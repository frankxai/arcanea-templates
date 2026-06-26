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
  layout.tsx            Root layout: next/font, rich metadata, background layers,
                        scroll progress + animated QuantumField canvas
  globals.css           Design tokens, quantum aurora/grid/mesh/grain background,
                        focus + selection styles, animations, reduced-motion
  page.tsx              The full landing page (see sections below)
  icon.tsx              Generated favicon — a quantum "Q" mark (next/og)
  opengraph-image.tsx   Generated 1200×630 branded OG/Twitter card (next/og)
components/ui/
  Header.tsx        Sticky header: scroll-aware blur, active-section nav,
                    animated full-screen mobile menu (Escape/keyboard aware)
  Footer.tsx        Multi-column footer: brand, nav, newsletter, social icons
  ScrollProgress.tsx Top gradient progress bar (useScroll + scaleX)
  FAQ.tsx           Accessible animated accordion (aria-expanded/controls)
  SelfSelector.tsx  "Choose a self" tabbed interactive with cross-fade panels
  SessionLog.tsx    Console session log with line-by-line reveal + blinking cursor
  CursorGlow.tsx    Hero-confined cursor-follow glow (motion values, spring)
  LiquidGlass.tsx   Multi-layer glass with noise, sheen, spring 3D tilt
  SplitText.tsx     Word-then-char blur/reveal headline animation
  Magnetic.tsx      Cursor-attraction wrapper
  GlowCard.tsx      Cursor-tracking radial glow card (motion values, no re-render)
  Reveal.tsx        Scroll-triggered blur/translate entrance
  QuantumField.tsx  Interactive canvas particle field — depth parallax, twinkle,
                    cursor constellation lines, pauses when tab hidden
  PortalOrb.tsx     Cinematic portal centerpiece — energy swirl, orbiting sparks,
                    layered bloom
  CountUp.tsx       In-view animated number counter
```

## Page sections

Hero (portal centerpiece, split-text headline, dual CTAs, trust row, scroll cue) ·
evocative term marquee · The Premise · **Choose a Self** interactive · The Method
(4-step timeline with connecting spine) · Features (3 LiquidGlass cards) · Stats
band (CountUp) · Session log console · Testimonials · Pricing tiers ·
**FAQ accordion** · final CTA · premium footer.

## Design system

- Background `#09090b`; quantum accents violet `#8b5cf6`, glow `#a78bfa`,
  cyan `#22d3ee`, plasma/fuchsia `#d946ef`.
- Fonts loaded via `next/font/google`: Geist (display/body), Instrument Serif
  (editorial italic, weight 400), Geist Mono — self-hosted, zero CLS.
- Motion via `LazyMotion` + `domAnimation`. Thoroughly respects
  `prefers-reduced-motion` (parallax, marquee, aurora, float, canvas loop,
  count-up and accordions all degrade gracefully).
- Accessibility: skip-to-content link, semantic landmarks, visible focus rings,
  violet text selection, aria-labelled icon-only controls, keyboard-reachable
  navigation and menus.

MIT licensed, part of [arcanea-templates](https://github.com/frankxai/arcanea-templates).
