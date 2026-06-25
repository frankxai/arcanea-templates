'use client';

import * as React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface PortalOrbProps {
  className?: string;
  size?: number;
}

const RINGS = [
  { scale: 1.0, dur: 28, dash: '4 10', color: 'rgba(167,139,250,0.55)', dir: 1 },
  { scale: 0.82, dur: 20, dash: '2 14', color: 'rgba(34,211,238,0.5)', dir: -1 },
  { scale: 0.64, dur: 13, dash: '6 8', color: 'rgba(217,70,239,0.5)', dir: 1 },
];

export function PortalOrb({ className = '', size = 320 }: PortalOrbProps) {
  return (
    <LazyMotion features={domAnimation}>
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        {/* Halo */}
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.35), rgba(34,211,238,0.12) 45%, transparent 70%)',
          }}
        />

        {/* Dashed orbital rings */}
        {RINGS.map((r, i) => (
          <m.div
            key={i}
            className="absolute rounded-full"
            style={{ inset: `${(1 - r.scale) * 50}%` }}
            animate={{ rotate: 360 * r.dir }}
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
          animate={{ rotate: 360 }}
          transition={{ duration: 9, ease: 'linear', repeat: Infinity }}
        />

        {/* Core */}
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            inset: '35%',
            background:
              'radial-gradient(circle at 35% 30%, #c4b5fd, #7c3aed 42%, #312e81 75%, #0b0b1a)',
            boxShadow:
              '0 0 60px rgba(139,92,246,0.6), inset 0 0 40px rgba(34,211,238,0.4)',
          }}
        >
          <div
            className="absolute inset-0 animate-pulse-glow"
            style={{
              background:
                'radial-gradient(circle at 62% 66%, rgba(34,211,238,0.45), transparent 55%)',
            }}
          />
        </div>
      </div>
    </LazyMotion>
  );
}
