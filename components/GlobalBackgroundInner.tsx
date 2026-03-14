'use client';

import { useRef, useEffect } from 'react';
import type { BufferAttribute } from 'three';

const CONNECT_THRESHOLD = 160;
const FPS_TARGET = 24;
const FRAME_TIME = 1000 / FPS_TARGET;
const NODE_COLORS = [0x6366f1, 0x22d3ee, 0xa78bfa];

export default function GlobalBackgroundInner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 18 : 35;

    import('three').then((THREE) => {
      if (!containerRef.current) return;

      const scene = new THREE.Scene();
      const w = window.innerWidth;
      const h = window.innerHeight;
      const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
      camera.position.z = 500;

      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: 'low-power',
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(1);
      renderer.setSize(w, h);

      // Nodes
      const positions = new Float32Array(nodeCount * 3);
      const velocities = new Float32Array(nodeCount * 3);
      const colorArr: number[] = [];

      for (let i = 0; i < nodeCount; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * w * 1.4;
        positions[i * 3 + 1] = (Math.random() - 0.5) * h * 1.4;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 150;
        velocities[i * 3]     = (Math.random() - 0.5) * 0.3;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
        const c = NODE_COLORS[i % NODE_COLORS.length];
        colorArr.push(((c >> 16) & 255) / 255, ((c >> 8) & 255) / 255, (c & 255) / 255);
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colorArr), 3));
      const mat = new THREE.PointsMaterial({
        size: 1.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.45,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geo, mat);
      scene.add(points);

      const maxLines = (nodeCount * (nodeCount - 1)) / 2;
      const linePos = new Float32Array(maxLines * 6);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
      lineGeo.setDrawRange(0, 0);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.08,
      });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lines);

      containerRef.current.appendChild(renderer.domElement);

      const resize = () => {
        const nw = window.innerWidth;
        const nh = window.innerHeight;
        renderer.setSize(nw, nh);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', resize);

      let paused = false;
      const onVisibility = () => { paused = document.hidden; };
      document.addEventListener('visibilitychange', onVisibility);

      const posAttr = geo.getAttribute('position') as BufferAttribute;
      const linePosAttr = lineGeo.getAttribute('position') as BufferAttribute;
      const clock = new THREE.Clock();
      let accumulator = 0;

      const Xbound = w * 0.75;
      const Ybound = h * 0.75;

      const animate = () => {
        rafRef.current = requestAnimationFrame(animate);
        if (paused) { renderer.render(scene, camera); return; }

        accumulator += clock.getDelta() * 1000;
        if (accumulator < FRAME_TIME) { renderer.render(scene, camera); return; }
        accumulator -= FRAME_TIME;

        const t = Date.now() * 0.0006;

        for (let i = 0; i < nodeCount; i++) {
          const i3 = i * 3;
          positions[i3]     += velocities[i3]     + Math.sin(i * 0.13 + t) * 0.18;
          positions[i3 + 1] += velocities[i3 + 1] + Math.cos(i * 0.09 + t * 0.7) * 0.18;
          positions[i3 + 2] += velocities[i3 + 2];
          if (positions[i3] < -Xbound || positions[i3] > Xbound)     velocities[i3]     *= -1;
          if (positions[i3+1] < -Ybound || positions[i3+1] > Ybound) velocities[i3 + 1] *= -1;
          velocities[i3]     *= 0.995;
          velocities[i3 + 1] *= 0.995;
          velocities[i3 + 2] *= 0.995;
        }
        posAttr.needsUpdate = true;

        let lc = 0;
        for (let i = 0; i < nodeCount; i++) {
          for (let j = i + 1; j < nodeCount; j++) {
            const dx = positions[i*3]-positions[j*3];
            const dy = positions[i*3+1]-positions[j*3+1];
            const dz = positions[i*3+2]-positions[j*3+2];
            if (Math.sqrt(dx*dx+dy*dy+dz*dz) < CONNECT_THRESHOLD) {
              const idx = lc * 6;
              linePos[idx]   = positions[i*3];   linePos[idx+1] = positions[i*3+1]; linePos[idx+2] = positions[i*3+2];
              linePos[idx+3] = positions[j*3];   linePos[idx+4] = positions[j*3+1]; linePos[idx+5] = positions[j*3+2];
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
        if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        lineGeo.dispose();
        lineMat.dispose();
      };
    });

    return () => { cleanupRef.current?.(); };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
