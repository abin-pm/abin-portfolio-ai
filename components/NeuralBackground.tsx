'use client';

import { useRef, useEffect } from 'react';
import type { BufferAttribute } from 'three';

const CONNECT_THRESHOLD = 120;
const FPS_TARGET = 30;
const FRAME_TIME = 1000 / FPS_TARGET;
const COLORS = [0x6366f1, 0x22d3ee, 0xa78bfa];

export function NeuralBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 40 : 80;

    let THREE: typeof import('three');
    import('three').then((mod) => {
      THREE = mod;
      if (!containerRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 400;

      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: 'low-power',
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const positions = new Float32Array(nodeCount * 3);
      const velocities = new Float32Array(nodeCount * 3);
      const colorAttrs: number[] = [];

      for (let i = 0; i < nodeCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 800;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 600;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
        velocities[i * 3] = (Math.random() - 0.5) * 0.4;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
        const c = COLORS[i % COLORS.length];
        colorAttrs.push(
          ((c >> 16) & 255) / 255,
          ((c >> 8) & 255) / 255,
          (c & 255) / 255
        );
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colorAttrs), 3));

      const material = new THREE.PointsMaterial({
        size: 1.5 + Math.random(),
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const maxLines = (nodeCount * (nodeCount - 1)) / 2;
      const linePositions = new Float32Array(maxLines * 6);
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeometry.setDrawRange(0, 0);
      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: false,
        color: 0x6366f1,
        transparent: true,
        opacity: 0.2,
      });
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      const clock = new THREE.Clock();
      let accumulator = 0;
      let paused = false;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

      document.addEventListener('visibilitychange', () => {
        paused = document.hidden;
      });

      containerRef.current.addEventListener('mousemove', (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width) * 800 - 400,
          y: -((e.clientY - rect.top) / rect.height) * 600 + 300,
        };
      });

      const posAttr = geometry.getAttribute('position') as BufferAttribute;
      const linePosAttr = lineGeometry.getAttribute('position') as BufferAttribute;

      const animate = () => {
        rafRef.current = requestAnimationFrame(animate);
        if (paused || prefersReducedMotion) {
          renderer.render(scene, camera);
          return;
        }

        const delta = clock.getDelta() * 1000;
        accumulator += delta;
        if (accumulator < FRAME_TIME) {
          renderer.render(scene, camera);
          return;
        }
        accumulator -= FRAME_TIME;

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        for (let i = 0; i < nodeCount; i++) {
          const i3 = i * 3;
          let vx = velocities[i3];
          let vy = velocities[i3 + 1];
          let vz = velocities[i3 + 2];

          const dx = mx - positions[i3];
          const dy = my - positions[i3 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 200) {
            const pull = 0.02;
            vx += (dx / dist) * pull;
            vy += (dy / dist) * pull;
          }

          positions[i3] += vx + Math.sin(i * 0.1 + Date.now() * 0.001) * 0.3;
          positions[i3 + 1] += vy + Math.cos(i * 0.07 + Date.now() * 0.0008) * 0.3;
          positions[i3 + 2] += vz;

          if (positions[i3] < -400 || positions[i3] > 400) velocities[i3] *= -1;
          if (positions[i3 + 1] < -300 || positions[i3 + 1] > 300) velocities[i3 + 1] *= -1;

          velocities[i3] = vx * 0.99;
          velocities[i3 + 1] = vy * 0.99;
          velocities[i3 + 2] = vz * 0.99;
        }
        posAttr.needsUpdate = true;

        let lineCount = 0;
        for (let i = 0; i < nodeCount; i++) {
          for (let j = i + 1; j < nodeCount; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (d < CONNECT_THRESHOLD) {
              const idx = lineCount * 6;
              linePositions[idx] = positions[i * 3];
              linePositions[idx + 1] = positions[i * 3 + 1];
              linePositions[idx + 2] = positions[i * 3 + 2];
              linePositions[idx + 3] = positions[j * 3];
              linePositions[idx + 4] = positions[j * 3 + 1];
              linePositions[idx + 5] = positions[j * 3 + 2];
              lineCount++;
            }
          }
        }
        lineGeometry.setDrawRange(0, lineCount * 2);
        linePosAttr.needsUpdate = true;

        renderer.render(scene, camera);
      };
      animate();

      cleanupRef.current = () => {
        cancelAnimationFrame(rafRef.current);
        window.removeEventListener('resize', resize);
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
      };
    });

    return () => {
      cleanupRef.current?.();
    };
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
