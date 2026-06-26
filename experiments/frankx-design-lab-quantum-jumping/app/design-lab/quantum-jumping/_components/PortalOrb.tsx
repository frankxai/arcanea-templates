'use client'

import * as React from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

interface PortalOrbProps {
  className?: string
  size?: number
}

const RINGS = [
  { scale: 1.0, dur: 28, dash: '4 10', color: 'rgba(167,139,250,0.55)', dir: 1 },
  { scale: 0.82, dur: 20, dash: '2 14', color: 'rgba(34,211,238,0.5)', dir: -1 },
  { scale: 0.64, dur: 13, dash: '6 8', color: 'rgba(217,70,239,0.5)', dir: 1 },
]

// Orbiting sparks at varied radii / phases.
const SPARKS = [
  { r: 46, dur: 11, phase: 0, color: 'rgba(167,139,250,0.95)', size: 3, dir: 1 },
  { r: 46, dur: 11, phase: 140, color: 'rgba(34,211,238,0.9)', size: 2, dir: 1 },
  { r: 38, dur: 8, phase: 60, color: 'rgba(217,70,239,0.9)', size: 2.5, dir: -1 },
  { r: 38, dur: 8, phase: 230, color: 'rgba(167,139,250,0.8)', size: 1.8, dir: -1 },
  { r: 30, dur: 6, phase: 300, color: 'rgba(125,211,252,0.9)', size: 2, dir: 1 },
]

export function PortalOrb({ className = '', size = 320 }: PortalOrbProps) {
  const reduce = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        {/* Layered bloom */}
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.4), rgba(34,211,238,0.14) 45%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-[10%] rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(217,70,239,0.22), transparent 65%)',
          }}
        />

        {/* Dashed orbital rings */}
        {RINGS.map((r, i) => (
          <m.div
            key={i}
            className="absolute rounded-full"
            style={{ inset: `${(1 - r.scale) * 50}%` }}
            animate={reduce ? undefined : { rotate: 360 * r.dir }}
            transition={{ duration: r.dur, ease: 'linear', repeat: Infinity }}
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke={r.color}
                strokeWidth="0.6"
                strokeDasharray={r.dash}
              />
            </svg>
          </m.div>
        ))}

        {/* Conic sweep ring */}
        <m.div
          className="absolute rounded-full"
          style={{
            inset: '18%',
            background:
              'conic-gradient(from 0deg, rgba(167,139,250,0), rgba(34,211,238,0.5), rgba(217,70,239,0.4), rgba(167,139,250,0))',
            WebkitMaskImage:
              'radial-gradient(circle, transparent 57%, #000 60%, #000 70%, transparent 73%)',
            maskImage:
              'radial-gradient(circle, transparent 57%, #000 60%, #000 70%, transparent 73%)',
          }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 9, ease: 'linear', repeat: Infinity }}
        />

        {/* Orbiting sparks */}
        {SPARKS.map((s, i) => (
          <m.div
            key={`spark-${i}`}
            className="absolute left-1/2 top-1/2"
            style={{ width: 0, height: 0, rotate: s.phase }}
            animate={reduce ? undefined : { rotate: s.phase + 360 * s.dir }}
            transition={{ duration: s.dur, ease: 'linear', repeat: Infinity }}
          >
            <span
              className="absolute rounded-full"
              style={{
                width: s.size,
                height: s.size,
                top: `-${s.r}%`,
                left: 0,
                transform: 'translate(-50%, -50%)',
                background: s.color,
                boxShadow: `0 0 8px ${s.color}`,
              }}
            />
          </m.div>
        ))}

        {/* Core with inner energy swirl */}
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            inset: '35%',
            background:
              'radial-gradient(circle at 35% 30%, #c4b5fd, #7c3aed 42%, #312e81 75%, #0b0b1a)',
            boxShadow: '0 0 60px rgba(139,92,246,0.6), inset 0 0 40px rgba(34,211,238,0.4)',
          }}
        >
          {/* Inner energy swirl */}
          <m.div
            className="absolute inset-[-25%]"
            style={{
              background:
                'conic-gradient(from 0deg, transparent, rgba(34,211,238,0.5), transparent 35%, rgba(217,70,239,0.45), transparent 70%)',
            }}
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 7, ease: 'linear', repeat: Infinity }}
          />
          {/* Reactive inner glow */}
          <div
            className="absolute inset-0 qj-animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle at 62% 66%, rgba(34,211,238,0.5), transparent 55%)',
            }}
          />
          {/* Bright specular highlight */}
          <div
            className="absolute rounded-full blur-sm"
            style={{
              inset: '18% 50% 60% 22%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.7), transparent 70%)',
            }}
          />
        </div>
      </div>
    </LazyMotion>
  )
}
