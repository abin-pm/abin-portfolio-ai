'use client';

import { useRef, useEffect } from 'react';
import type { BufferAttribute } from 'three';

const CONNECT_THRESHOLD = 120;
const FPS_TARGET = 30;
const FRAME_TIME = 1000 / FPS_TARGET;
const NODE_COLORS = [0x6366f1, 0x22d3ee, 0xa78bfa];

export function NeuralBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 40 : 80;

    import('three').then((THREE) => {
      if (!containerRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 400;

      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const positions = new Float32Array(nodeCount * 3);
      const velocities = new Float32Array(nodeCount * 3);
      const colorArr: number[] = [];

      for (let i = 0; i < nodeCount; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 800;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 600;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
        velocities[i * 3]     = (Math.random() - 0.5) * 0.4;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
        const c = NODE_COLORS[i % NODE_COLORS.length];
        colorArr.push(((c >> 16) & 255) / 255, ((c >> 8) & 255) / 255, (c & 255) / 255);
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colorArr), 3));
      const mat = new THREE.PointsMaterial({ size: 2, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true });
      const points = new THREE.Points(geo, mat);
      scene.add(points);

      const maxLines = (nodeCount * (nodeCount - 1)) / 2;
      const linePos = new Float32Array(maxLines * 6);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
      lineGeo.setDrawRange(0, 0);
      const lineMat = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.18 });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lines);

      containerRef.current.appendChild(renderer.domElement);

      const resize = () => {
        if (!containerRef.current) return;
        const w = containerRef.current.offsetWidth;
        const h = containerRef.current.offsetHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener('resize', resize);

      let paused = false;
      const onVisibility = () => { paused = document.hidden; };
      document.addEventListener('visibilitychange', onVisibility);

      const onMouse = (e: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width) * 800 - 400,
          y: -((e.clientY - rect.top) / rect.height) * 600 + 300,
        };
      };
      containerRef.current.addEventListener('mousemove', onMouse);

      const posAttr = geo.getAttribute('position') as BufferAttribute;
      const linePosAttr = lineGeo.getAttribute('position') as BufferAttribute;
      const clock = new THREE.Clock();
      let accumulator = 0;
      const now = () => Date.now();

      const animate = () => {
        rafRef.current = requestAnimationFrame(animate);
        if (paused || prefersReduced) { renderer.render(scene, camera); return; }

        accumulator += clock.getDelta() * 1000;
        if (accumulator < FRAME_TIME) { renderer.render(scene, camera); return; }
        accumulator -= FRAME_TIME;

        const t = now() * 0.001;
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        for (let i = 0; i < nodeCount; i++) {
          const i3 = i * 3;
          let vx = velocities[i3], vy = velocities[i3 + 1], vz = velocities[i3 + 2];
          const dx = mx - positions[i3], dy = my - positions[i3 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 200) { vx += (dx / dist) * 0.02; vy += (dy / dist) * 0.02; }
          positions[i3]     += vx + Math.sin(i * 0.1 + t) * 0.25;
          positions[i3 + 1] += vy + Math.cos(i * 0.07 + t * 0.8) * 0.25;
          positions[i3 + 2] += vz;
          if (positions[i3] < -400 || positions[i3] > 400)         velocities[i3]     *= -1;
          if (positions[i3 + 1] < -300 || positions[i3 + 1] > 300) velocities[i3 + 1] *= -1;
          velocities[i3] = vx * 0.99; velocities[i3 + 1] = vy * 0.99; velocities[i3 + 2] = vz * 0.99;
        }
        posAttr.needsUpdate = true;

        let lc = 0;
        for (let i = 0; i < nodeCount; i++) {
          for (let j = i + 1; j < nodeCount; j++) {
            const dx = positions[i*3]-positions[j*3], dy = positions[i*3+1]-positions[j*3+1], dz = positions[i*3+2]-positions[j*3+2];
            if (Math.sqrt(dx*dx+dy*dy+dz*dz) < CONNECT_THRESHOLD) {
              const idx = lc * 6;
              linePos[idx]=positions[i*3]; linePos[idx+1]=positions[i*3+1]; linePos[idx+2]=positions[i*3+2];
              linePos[idx+3]=positions[j*3]; linePos[idx+4]=positions[j*3+1]; linePos[idx+5]=positions[j*3+2];
              lc++;
            }
          }
        }
        lineGeo.setDrawRange(0, lc * 2);
        linePosAttr.needsUpdate = true;
        renderer.render(scene, camera);
      };
      animate();

      cleanupRef.current = () => {
        cancelAnimationFrame(rafRef.current);
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', onVisibility);
        containerRef.current?.removeEventListener('mousemove', onMouse);
        if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose(); geo.dispose(); mat.dispose(); lineGeo.dispose(); lineMat.dispose();
      };
    });

    return () => { cleanupRef.current?.(); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
      aria-hidden
    />
  );
}
