'use client';

import * as React from 'react';
import { LazyMotion, domAnimation, m, useMotionValue, useSpring } from 'framer-motion';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className = '', strength = 15 }: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Snappy magnetic springs
  const springConfig = { damping: 15, stiffness: 150, mass: 0.15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Relative distance vector from center (-1 to +1)
    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
