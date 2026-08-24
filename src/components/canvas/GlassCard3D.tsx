'use client';

import React, { useRef, useState, useEffect } from 'react';

interface GlassCard3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard3D({ children, className = '' }: GlassCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0.15 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Calculate offset from card center relative to screen size
      const deltaX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

      // Smooth subtle 3D tilt
      const rotateX = Math.max(-10, Math.min(10, -deltaY * 10));
      const rotateY = Math.max(-10, Math.min(10, deltaX * 10));

      setRotX(rotateX);
      setRotY(rotateY);

      // Relative glare specular mirror coordinates
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;

      setGlarePos({
        x: Math.max(0, Math.min(100, glareX)),
        y: Math.max(0, Math.min(100, glareY)),
        opacity: 0.22,
      });
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
        transition: 'transform 0.12s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-2xl glass-hero-monolith overflow-hidden ${className}`}
    >
      {/* Specular Mirror Glass Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-200 z-30 rounded-2xl overflow-hidden"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.12) 35%, transparent 70%)`,
          mixBlendMode: 'overlay',
        }}
      />

      {children}
    </div>
  );
}
