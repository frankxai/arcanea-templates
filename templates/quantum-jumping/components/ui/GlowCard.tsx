'use client';

import * as React from 'react';
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';

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

  // Motion values drive the gradient directly in the DOM — no React re-render.
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const background = useMotionTemplate`radial-gradient(250px circle at ${x}px ${y}px, ${glowColor}, transparent 60%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(-9999);
    y.set(-9999);
  }

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900/[0.4] backdrop-blur-md p-6 group transition-all duration-300 hover:border-white/[0.12] ${className}`}
        style={style}
        {...props}
      >
        {/* Spot mouse tracking glow backing */}
        <m.div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background }}
        />

        {/* Hover-triggered subtle background sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        {/* Content layer */}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </LazyMotion>
  );
}
