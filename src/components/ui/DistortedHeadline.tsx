'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';

interface DistortedHeadlineProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center' | 'right';
}

export default function DistortedHeadline({
  text,
  className = '',
  as = 'h2',
  align = 'left',
}: DistortedHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [offsets, setOffsets] = useState<Array<{ x: number; y: number; rotate: number }>>([]);
  const animFrameRef = useRef<number | null>(null);

  const words = useMemo(() => text.split(' '), [text]);
  const totalLetters = useMemo(() => words.reduce((acc, word) => acc + word.length, 0), [words]);
  const Tag = as;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Check if mouse is within proximity of the headline (150px margin)
      if (
        e.clientX < rect.left - 150 ||
        e.clientX > rect.right + 150 ||
        e.clientY < rect.top - 150 ||
        e.clientY > rect.bottom + 150
      ) {
        if (offsets.length > 0) {
          setOffsets([]);
        }
        return;
      }

      const letterSpans = containerRef.current.querySelectorAll<HTMLSpanElement>('.distort-letter');
      const newOffsets: Array<{ x: number; y: number; rotate: number }> = [];

      letterSpans.forEach((span) => {
        const sRect = span.getBoundingClientRect();
        const letterCenterX = sRect.left + sRect.width / 2;
        const letterCenterY = sRect.top + sRect.height / 2;

        const dx = letterCenterX - e.clientX;
        const dy = letterCenterY - e.clientY;
        const dist = Math.hypot(dx, dy);
        const maxDist = 140;

        if (dist < maxDist && dist > 0) {
          const power = Math.pow(1 - dist / maxDist, 2);
          const push = power * 18; // Max 18px displacement
          const angle = Math.atan2(dy, dx);

          newOffsets.push({
            x: Math.cos(angle) * push,
            y: Math.sin(angle) * push,
            rotate: (dx / maxDist) * 12 * power,
          });
        } else {
          newOffsets.push({ x: 0, y: 0, rotate: 0 });
        }
      });

      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }

      animFrameRef.current = requestAnimationFrame(() => {
        setOffsets(newOffsets);
      });
    };

    const handleMouseLeave = () => {
      setOffsets([]);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [offsets.length]);

  let globalLetterIdx = 0;

  const alignClass =
    align === 'center'
      ? 'justify-center text-center'
      : align === 'right'
      ? 'justify-end text-right'
      : 'justify-start text-left';

  return (
    <Tag
      ref={containerRef}
      className={`font-heading font-bold tracking-tight text-white leading-[1.14] select-none cursor-default ${className}`}
    >
      <span className={`flex flex-wrap items-center ${alignClass} gap-x-[0.3em] gap-y-1`}>
        {words.map((word, wIdx) => {
          const wordLetters = word.split('');

          return (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              {wordLetters.map((char, cIdx) => {
                const currentIdx = globalLetterIdx++;
                const offset = offsets[currentIdx] || { x: 0, y: 0, rotate: 0 };
                const isDistorted = offset.x !== 0 || offset.y !== 0;

                // Smooth linear continuous gradient from White #FFFFFF to Soft Slate #8EACB4
                const t = totalLetters > 1 ? currentIdx / (totalLetters - 1) : 0;
                const r = Math.round(255 - t * (255 - 142));
                const g = Math.round(255 - t * (255 - 172));
                const b = Math.round(255 - t * (255 - 180));
                const continuousColor = `rgb(${r}, ${g}, ${b})`;

                return (
                  <span
                    key={cIdx}
                    className={`distort-letter inline-block transition-transform duration-100 ease-out font-heading ${
                      isDistorted ? 'drop-shadow-[0_0_12px_rgba(115,209,224,0.7)]' : ''
                    }`}
                    style={{
                      transform: `translate3d(${offset.x.toFixed(2)}px, ${offset.y.toFixed(2)}px, 0) rotate(${offset.rotate.toFixed(2)}deg)`,
                      color: isDistorted ? '#73D1E0' : continuousColor,
                      willChange: 'transform',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
