'use client'

import * as React from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

/**
 * QuantumField — the ambient backdrop for the experience.
 *
 * Composes the scoped background layers (mesh gradient, masked grid, slowly
 * rotating aurora, film grain) defined in quantum.css, plus a handful of
 * drifting particles rendered with Framer Motion. All layers are absolutely
 * positioned inside the `.qj-root` wrapper and sit behind the content
 * (negative z-index), so nothing leaks outside this route.
 */
export function QuantumField() {
  const reduce = useReducedMotion()

  // Deterministic particle field (no Math.random at render → no hydration drift).
  const particles = React.useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: `${(i * 53) % 100}%`,
        top: `${(i * 37 + 11) % 100}%`,
        size: 1 + (i % 3),
        dur: 9 + (i % 7) * 2,
        delay: (i % 5) * 0.8,
        color:
          i % 3 === 0
            ? 'rgba(167,139,250,0.7)'
            : i % 3 === 1
              ? 'rgba(34,211,238,0.6)'
              : 'rgba(217,70,239,0.6)',
      })),
    [],
  )

  return (
    <LazyMotion features={domAnimation}>
      <div className="qj-bg-mesh" aria-hidden="true" />
      <div className="qj-bg-grid" aria-hidden="true" />
      <div className="qj-bg-aurora" aria-hidden="true" />

      {!reduce && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true" style={{ zIndex: -2 }}>
          {particles.map((p, i) => (
            <m.span
              key={i}
              className="absolute rounded-full"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 6px ${p.color}`,
              }}
              animate={{ y: [0, -26, 0], opacity: [0, 1, 0] }}
              transition={{ duration: p.dur, delay: p.delay, ease: 'easeInOut', repeat: Infinity }}
            />
          ))}
        </div>
      )}

      <div className="qj-bg-grain" aria-hidden="true" />
    </LazyMotion>
  )
}
