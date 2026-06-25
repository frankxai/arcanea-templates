'use client';

import * as React from 'react';
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  // Same markup on server and client to avoid hydration mismatch. Under reduced
  // motion we render a static full-width hairline accent instead of binding scaleX.
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
        style={reduce ? { opacity: 0.5 } : { scaleX }}
      />
    </LazyMotion>
  );
}
