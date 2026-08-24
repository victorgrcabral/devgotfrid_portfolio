'use client';

import React, { useEffect, useState, useRef, useSyncExternalStore } from 'react';

function subscribeToMedia(callback: () => void) {
  const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getMediaSnapshot() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function getServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const enabled = useSyncExternalStore(subscribeToMedia, getMediaSnapshot, getServerSnapshot);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('[role="button"]') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animId: number;

    const render = () => {
      // High-precision tight following (no lagging/separation)
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.45;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.45;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [enabled, visible]);

  if (!enabled || !visible) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] select-none -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        left: 0,
        top: 0,
      }}
    >
      {/* Outer Magnetic Ring */}
      <div
        className={`relative -ml-4 -mt-4 w-8 h-8 rounded-full border transition-all duration-150 ease-out flex items-center justify-center ${
          hovered
            ? 'scale-140 border-[#73D1E0] bg-[#73D1E0]/20 shadow-[0_0_16px_rgba(115,209,224,0.5)]'
            : clicked
            ? 'scale-85 border-[#358A90] bg-[#358A90]/20'
            : 'scale-100 border-[#73D1E0]/60 bg-[#73D1E0]/05'
        }`}
      >
        {/* Concentric Precision Pinpoint Center Dot */}
        <div
          className={`w-1.5 h-1.5 rounded-full bg-[#73D1E0] shadow-[0_0_8px_#73D1E0] transition-transform duration-100 ${
            hovered ? 'scale-125 bg-white' : clicked ? 'scale-75' : 'scale-100'
          }`}
        />
      </div>
    </div>
  );
}
