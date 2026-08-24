'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

function NodeScene() {
  const cubeRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Deterministic particles
  const [particlePositions, particleColors] = useMemo(() => {
    const count = 160;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const baseColor = new THREE.Color('#6EA8FE');
    const dimColor = new THREE.Color('#1E2E48');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 2.2 + (i % 10) * 0.15;
      const theta = (i / count) * Math.PI * 2 * 3;
      const phi = Math.acos(((i % 20) / 10) - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.8;
      positions[i3 + 2] = radius * Math.cos(phi);

      const col = i % 3 === 0 ? baseColor : dimColor;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }
    return [positions, colors];
  }, []);

  // Floating tech label positions around the cube
  const techPills = useMemo(() => [
    { label: 'React', pos: [1.8, 1.2, 0.5] as [number, number, number], color: 'text-[#6EA8FE] border-[#6EA8FE]/30' },
    { label: 'Next.js', pos: [-1.8, 1.0, 0.6] as [number, number, number], color: 'text-white border-white/20' },
    { label: 'TypeScript', pos: [1.6, -1.3, 0.4] as [number, number, number], color: 'text-blue-400 border-blue-400/30' },
    { label: 'PostgreSQL', pos: [-1.7, -1.2, 0.5] as [number, number, number], color: 'text-sky-300 border-sky-300/30' },
    { label: 'Python', pos: [0, 1.9, -0.4] as [number, number, number], color: 'text-amber-300 border-amber-300/30' },
  ], []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { pointer } = state;

    if (cubeRef.current) {
      // Gentle continuous rotation + smooth pointer tilt
      cubeRef.current.rotation.y = t * 0.35 + pointer.x * 0.6;
      cubeRef.current.rotation.x = Math.sin(t * 0.25) * 0.15 - pointer.y * 0.5;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.2;
      ringRef.current.rotation.x = Math.PI / 4 + Math.cos(t * 0.2) * 0.1;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.08;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#6EA8FE" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#3B82F6" />
      <pointLight position={[0, 0, 3]} intensity={1.8} color="#6EA8FE" distance={8} />

      {/* Orbiting particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[particleColors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* Central Interactive Full-Stack Cube */}
      <group ref={cubeRef}>
        {/* Outer Wireframe Cube */}
        <mesh>
          <boxGeometry args={[2.0, 2.0, 2.0]} />
          <meshStandardMaterial
            color="#6EA8FE"
            wireframe
            transparent
            opacity={0.7}
            emissive="#1D4ED8"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Inner Solid Frosted Core */}
        <mesh>
          <boxGeometry args={[1.7, 1.7, 1.7]} />
          <meshStandardMaterial
            color="#131820"
            metalness={0.85}
            roughness={0.15}
            emissive="#6EA8FE"
            emissiveIntensity={0.25}
          />
        </mesh>

        {/* Inner Core Octahedron */}
        <mesh>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#6EA8FE"
            wireframe
            emissive="#6EA8FE"
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Orbiting Tech Tags */}
        {techPills.map((pill, idx) => (
          <Html
            key={idx}
            position={pill.pos}
            center
            distanceFactor={8}
            className="pointer-events-none select-none"
          >
            <div className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#0B0F14]/90 border ${pill.color} shadow-lg backdrop-blur-sm whitespace-nowrap`}>
              {pill.label}
            </div>
          </Html>
        ))}
      </group>

      {/* Outer Halo Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.6, 0.018, 16, 80]} />
        <meshStandardMaterial
          color="#6EA8FE"
          emissive="#6EA8FE"
          emissiveIntensity={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>
    </>
  );
}

export default function InteractiveHeroNode() {
  return (
    <div className="w-full h-[320px] sm:h-[360px] md:h-[400px] relative rounded-2xl bg-[#131820]/90 border border-[#1E2836] shadow-xl overflow-hidden flex items-center justify-center">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(110,168,254,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Status Header Badge inside the Card */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#0B0F14]/80 border border-[#1E2836] text-[10px] font-mono text-[#AAB4C0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FE] animate-pulse" />
          Interactive 3D Node
        </span>
        <span className="text-[10px] font-mono text-[#6C7A8C]">
          Full-Stack Core
        </span>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <NodeScene />
        </Suspense>
      </Canvas>

      {/* Card Footer Hint */}
      <div className="absolute bottom-2 text-center w-full pointer-events-none">
        <span className="text-[10px] font-mono text-[#6C7A8C]">
          Hover to tilt • React / Next.js / Python / Postgres
        </span>
      </div>
    </div>
  );
}
