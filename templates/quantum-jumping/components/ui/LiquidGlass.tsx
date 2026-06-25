'use client';

import * as React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: 'subtle' | 'standard' | 'heavy';
  tint?: string; // e.g. '#00bcd4'
  glow?: boolean;
  sheen?: boolean;
  noise?: boolean;
  tilt?: boolean;
  tiltIntensity?: number;
}

const INTENSITY_MAP = {
  subtle:   { blur: '12px', sat: '140%', bg: 'rgba(255,255,255,0.02)' },
  standard: { blur: '20px', sat: '180%', bg: 'rgba(255,255,255,0.035)' },
  heavy:    { blur: '32px', sat: '200%', bg: 'rgba(255,255,255,0.05)' },
} as const;

export const LiquidGlass = React.forwardRef<HTMLDivElement, LiquidGlassProps>(
  (
    {
      children,
      className = '',
      intensity = 'standard',
      tint = '#00bcd4',
      glow = false,
      sheen = true,
      noise = true,
      tilt = false,
      tiltIntensity = 10,
      style,
      ...props
    },
    ref,
  ) => {
    const innerRef = React.useRef<HTMLDivElement>(null);
    const [pos, setPos] = React.useState({ x: -9999, y: -9999 });
    const [hovering, setHovering] = React.useState(false);
    const [transform, setTransform] = React.useState({ rotateX: 0, rotateY: 0 });
    const cfg = INTENSITY_MAP[intensity];

    const glowRgba = React.useMemo(() => {
      const hex = tint.replace('#', '');
      const n = parseInt(hex.length === 3 ? hex.split('').map(x => x + x).join('') : hex, 16);
      const r = (n >> 16) & 255;
      const g = (n >> 8) & 255;
      const b = n & 255;
      return `${r}, ${g}, ${b}`;
    }, [tint]);

    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
      const el = innerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (sheen) setPos({ x, y });

      if (tilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setTransform({
          rotateX: ((y - centerY) / centerY) * -tiltIntensity,
          rotateY: ((x - centerX) / centerX) * tiltIntensity,
        });
      }
    }

    function handleLeave() {
      setHovering(false);
      setPos({ x: -9999, y: -9999 });
      if (tilt) setTransform({ rotateX: 0, rotateY: 0 });
    }

    return (
      <LazyMotion features={domAnimation}>
        <div
          ref={ref}
          className={`relative rounded-2xl ${className}`}
          style={{ perspective: tilt ? '1000px' : undefined, ...style }}
          {...props}
        >
          {/* Outer glow ring */}
          {glow && (
            <div
              className="absolute -inset-2 rounded-[inherit] blur-xl transition-opacity duration-300 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, rgba(${glowRgba}, 0.3), rgba(${glowRgba}, 0.1))`,
                opacity: hovering ? 0.7 : 0.25,
              }}
            />
          )}

          {/* Glass body */}
          <div
            ref={innerRef}
            onMouseMove={handleMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={handleLeave}
            className="relative overflow-hidden rounded-[inherit] h-full w-full"
            style={{
              backgroundColor: cfg.bg,
              backdropFilter: `blur(${cfg.blur}) saturate(${cfg.sat}) brightness(${hovering ? 1.05 : 1})`,
              WebkitBackdropFilter: `blur(${cfg.blur}) saturate(${cfg.sat}) brightness(${hovering ? 1.05 : 1})`,
              boxShadow: `
                inset 0 1px 0 0 rgba(${glowRgba}, 0.12),
                inset 0 0 0 1px rgba(${glowRgba}, 0.06),
                0 4px 16px rgba(0,0,0,0.25)
              `,
              transform: tilt
                ? `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`
                : undefined,
              transformStyle: tilt ? 'preserve-3d' : undefined,
              transition: 'backdrop-filter 400ms ease, transform 200ms ease-out, box-shadow 300ms ease',
            }}
          >
            {/* Top Highlight Sheen Overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/[0.06] to-transparent" />

            {/* SVG noise texture */}
            {noise && (
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
            )}

            {/* Mouse radial sheen gradient */}
            {sheen && (
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: hovering ? 0.35 : 0,
                  background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, rgba(${glowRgba}, 0.12), transparent 60%)`,
                }}
              />
            )}

            {/* Content depth layer */}
            <div
              className="relative h-full w-full"
              style={{ transform: tilt ? 'translateZ(15px)' : undefined }}
            >
              {children}
            </div>
          </div>
        </div>
      </LazyMotion>
    );
  },
);

LiquidGlass.displayName = 'LiquidGlass';
