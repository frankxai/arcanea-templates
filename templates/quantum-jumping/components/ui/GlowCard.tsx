'use client';

import * as React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string; // e.g. 'rgba(0, 188, 212, 0.15)'
}

export function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(0, 188, 212, 0.18)',
  style,
  ...props
}: GlowCardProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState({ x: -9999, y: -9999 });
  const [hovering, setHovering] = React.useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setCoords({ x: -9999, y: -9999 });
        }}
        className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900/[0.4] backdrop-blur-md p-6 group transition-all duration-300 ${className}`}
        style={style}
        {...props}
      >
        {/* Spot mouse tracking glow backing */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 60%)`,
          }}
        />

        {/* Hover-triggered subtle background sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        {/* Content layer */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </LazyMotion>
  );
}
