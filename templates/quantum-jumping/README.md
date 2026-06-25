# Quantum Jumping — Arcanea Experiential Template

A premium, fully-animated single-page landing template built on the Arcanea Design System. It dramatizes **Quantum Jumping** — a guided meditative practice for visiting the parallel versions of yourself who have already mastered what you are reaching for, and bringing their state home.

> This is a design/experiential template, not medical or psychological advice. The concept is presented as imaginative consciousness-practice content.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS 3** · **Framer Motion 11** · **lucide-react**

## Quick start

```bash
pnpm install   # or npm install
pnpm dev       # or npm run dev
```

Open http://localhost:3000.

## Build

```bash
pnpm build && pnpm start
```

One-click deployable to Vercel with zero configuration (`images.unoptimized = true`).

## Structure

```
app/
  layout.tsx     Root layout: background layers + animated QuantumField canvas
  globals.css    Design tokens, quantum aurora/grid/mesh background, animations
  page.tsx       The full landing page (hero, theory, practice, features,
                 stats, session log, testimonials, tiers, CTA)
components/ui/
  LiquidGlass.tsx  Multi-layer glass with noise, sheen, 3D tilt (shared primitive)
  SplitText.tsx    Char-by-char blur/reveal headline animation (shared primitive)
  Magnetic.tsx     Cursor-attraction wrapper (shared primitive)
  GlowCard.tsx     Cursor-tracking radial glow card (shared primitive)
  Reveal.tsx       Scroll-triggered blur/translate entrance (shared primitive)
  QuantumField.tsx Interactive canvas particle field with cursor links (new)
  PortalOrb.tsx    Animated multi-ring portal centerpiece (new)
  CountUp.tsx      In-view animated number counter (new)
```

## Design system

- Background `#09090b`; quantum accents violet `#8b5cf6`, cyan `#22d3ee`, plasma `#d946ef`.
- Fonts: Geist (display/body), Instrument Serif (editorial italic), Geist Mono.
- Motion via `LazyMotion` + `domAnimation`. Respects `prefers-reduced-motion`.

MIT licensed, part of [arcanea-templates](https://github.com/frankxai/arcanea-templates).
