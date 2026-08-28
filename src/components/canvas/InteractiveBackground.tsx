'use client';

import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    currentPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const SPACING = 38;
    const FISHEYE_RADIUS = 380;
    const FISHEYE_STRENGTH = 38;
    const CENTER_FADE_RADIUS = 110;

    let animId: number;

    const render = () => {
      // High-precision tight lerp for spotlight synchronization
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.35;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.35;

      const mx = Math.round(currentPos.current.x);
      const my = Math.round(currentPos.current.y);

      // Pixel-perfect centered spotlight position
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${mx - 375}px, ${my - 375}px, 0)`;
      }

      ctx.clearRect(0, 0, width, height);

      // Helper function to calculate fisheye distorted coordinate
      const getDistortedPoint = (gx: number, gy: number) => {
        const dx = gx - mx;
        const dy = gy - my;
        const dist = Math.hypot(dx, dy);

        if (dist < FISHEYE_RADIUS && dist > 0) {
          const norm = dist / FISHEYE_RADIUS;
          // Smooth bell curve displacement
          const displacement = Math.sin(norm * Math.PI) * FISHEYE_STRENGTH;
          const angle = Math.atan2(dy, dx);
          return {
            x: gx + Math.cos(angle) * displacement,
            y: gy + Math.sin(angle) * displacement,
          };
        }

        return { x: gx, y: gy };
      };

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(115, 209, 224, 0.045)';

      // 1. Draw Vertical Distorted Lines
      for (let x = 0; x <= width + SPACING; x += SPACING) {
        ctx.beginPath();
        let started = false;

        for (let y = 0; y <= height + SPACING; y += 6) {
          const p = getDistortedPoint(x, y);

          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }

        ctx.stroke();
      }

      // 2. Draw Horizontal Distorted Lines
      for (let y = 0; y <= height + SPACING; y += SPACING) {
        ctx.beginPath();
        let started = false;

        for (let x = 0; x <= width + SPACING; x += 6) {
          const p = getDistortedPoint(x, y);

          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }

        ctx.stroke();
      }

      // 3. Radial Destination-Out: completely clear/erase the grid in the exact mouse center circle
      ctx.globalCompositeOperation = 'destination-out';
      const eraseGrad = ctx.createRadialGradient(mx, my, 0, mx, my, CENTER_FADE_RADIUS);
      eraseGrad.addColorStop(0, 'rgba(0, 0, 0, 1)'); // 100% transparent in center
      eraseGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0.85)');
      eraseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)'); // unaffected outside

      ctx.fillStyle = eraseGrad;
      ctx.beginPath();
      ctx.arc(mx, my, CENTER_FADE_RADIUS, 0, Math.PI * 2);
      ctx.fill();

      // Restore normal blending for next frame
      ctx.globalCompositeOperation = 'source-over';

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05181D]">
      {/* Ambient Deep Atmospheric Base Glows */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-[#358A90]/12 rounded-full blur-[140px] opacity-75" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[#00595B]/20 rounded-full blur-[150px] opacity-70" />
      <div className="absolute -bottom-40 left-1/4 w-[750px] h-[750px] bg-[#73D1E0]/10 rounded-full blur-[160px] opacity-65" />

      {/* Large Radiant Ambient Background Spotlight that shines from BEHIND and through the cleared center */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[750px] h-[750px] pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(115, 209, 224, 0.28) 0%, rgba(53, 138, 144, 0.16) 38%, rgba(0, 89, 91, 0.06) 62%, transparent 78%)',
          willChange: 'transform',
        }}
      />

      {/* Interactive Fisheye Canvas Grid Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}
