'use client';

import * as React from 'react';
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

interface CursorGlowProps {
  color?: string;
}

/**
 * A cursor-follow radial glow confined to its (relative) parent container.
 * Drop inside a `relative overflow-hidden` element.
 */
export function CursorGlow({ color = 'rgba(139,92,246,0.18)' }: CursorGlowProps) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 120, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 120, damping: 30, mass: 0.5 });
  const background = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, ${color}, transparent 70%)`;

  React.useEffect(() => {
    if (reduce) return;
    const parent = ref.current?.parentElement;
    if (!parent) return;
    function onMove(e: MouseEvent) {
      const rect = parent!.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
    function onLeave() {
      x.set(-9999);
      y.set(-9999);
    }
    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    return () => {
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, [reduce, x, y]);

  // Always render the same element (the listeners simply stay off under reduced
  // motion, so the glow never moves from off-screen) to avoid hydration mismatch.
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{ background }}
      />
    </LazyMotion>
  );
}
