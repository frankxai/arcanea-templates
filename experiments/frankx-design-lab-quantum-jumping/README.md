# Quantum Jumping — Design Lab port for `frankxai/frankx.ai-vercel-website`

A premium, self-contained standalone experiment page for the frankx.ai Design
Lab, living at the route **`/design-lab/quantum-jumping`**.

It ports the elevated "Quantum Jumping" experience (animated portal centerpiece,
split-text headline, an interactive "Choose a self" selector, the four-step
method, feature cards, animated stat counters, a self-revealing session console,
testimonials, pricing tiers, an FAQ accordion, and a cinematic CTA) into the
frankx.ai App Router site, matching its design tokens and the design-lab
conventions (`createMetadata` + `path`, back-link to `/design-lab`, dark
glassmorphic shell, inherits the site header/footer/layout).

## Why this artifact exists (Path B)

This work was built and verified inside a clone of the **public**
`frankxai/frankx.ai-vercel-website` repo, but **pushing to that repo is blocked**
in this environment: the session's git relay (`http://127.0.0.1:41729/git/...`,
injected via a global `url.insteadOf` rewrite for `https://github.com/`) only
authorizes `frankxai/arcanea-templates`. Any read or push against
`frankx.ai-vercel-website` returns:

```
fatal: unable to access 'http://127.0.0.1:41729/git/frankxai/frankx.ai-vercel-website/': The requested URL returned error: 403
```

This is an org egress / policy denial, not a transient error, so the complete,
build-verified artifact is preserved here in `arcanea-templates` (which *can* be
pushed) for a human to drop into the frankx.ai repo.

> The full repo contents were still readable for development via the egress
> HTTPS proxy (codeload tarball), which is how conventions were matched and the
> build was verified — only *git push* to that repo is denied.

## Verified build

Inside a fresh clone of `frankx.ai-vercel-website` with these files applied:

```
npm install
npm run build   # exit code 0 — clean build
```

The route compiled and registered:

- `/design-lab/quantum-jumping` is present in
  `.next/app-path-routes-manifest.json`
  (`/design-lab/quantum-jumping → /design-lab/quantum-jumping/page`).
- It builds as a client-rendered route (the page is a `'use client'` component),
  consistent with the other interactive design-lab pages (e.g. `nature`).

Notes:
- `tsconfig.json` and ESLint ignore `app/design-lab/**`, but `next build` still
  bundles and compiles the route — it compiled with no import/runtime errors.
- The three wiring edits below touch type-checked files
  (`app/design-lab/page.tsx`, `app/sitemap.ts`, `lib/vision-context.ts`) and are
  type-correct (`color: 'violet'` is a valid `GlowColor` / `colorConfig` key;
  the sitemap/allowlist entries match the existing literal shapes).

## What to drop in (exact file map)

Copy the contents of `app/` in this folder into the **repo root** of
`frankx.ai-vercel-website`, preserving paths. Concretely:

| From (this folder) | To (frankx.ai repo root) |
| --- | --- |
| `app/design-lab/quantum-jumping/page.tsx`   | `app/design-lab/quantum-jumping/page.tsx` |
| `app/design-lab/quantum-jumping/layout.tsx` | `app/design-lab/quantum-jumping/layout.tsx` |
| `app/design-lab/quantum-jumping/quantum.css` | `app/design-lab/quantum-jumping/quantum.css` |
| `app/design-lab/quantum-jumping/_components/*.tsx` | `app/design-lab/quantum-jumping/_components/*.tsx` |

The `_components/` directory is underscore-prefixed so Next.js does not treat it
as a route segment. All twelve primitives are co-located there:
`LiquidGlass`, `SplitText`, `Magnetic`, `GlowCard` (route-local — does **not**
collide with the site's shared `@/components/ui/glow-card`), `Reveal`,
`PortalOrb`, `CountUp`, `FAQ`, `SelfSelector`, `SessionLog`, `CursorGlow`,
`QuantumField`.

Then apply the three small, additive wiring edits, each documented with an exact
diff in `patches/`:

1. **`patches/01-design-lab-index-page.md`** — add `Orbit` to the `lucide-react`
   import and append a `Quantum Jumping` entry to the `hubSections` array in
   `app/design-lab/page.tsx` (makes it discoverable from the gallery).
2. **`patches/02-sitemap.md`** — add `/design-lab/quantum-jumping` to
   `app/sitemap.ts`.
3. **`patches/03-vision-context.md`** — add `/design-lab/quantum-jumping` to the
   route allowlist in `lib/vision-context.ts`.

## Then verify

```
npm install
npm run build
```

Expect a clean build with `/design-lab/quantum-jumping` in the route table.
Visit `/design-lab/quantum-jumping` and confirm the gallery card on
`/design-lab` links to it.

## Design / scoping decisions

- **Self-contained styling.** No global CSS or Tailwind token edits. Custom
  keyframes/utilities (aurora, float, marquee, grain, gradient-pan, pulse-glow,
  scroll-cue, blink) live in the co-located `quantum.css`, with **every selector
  scoped under a unique `.qj-root` wrapper class** so nothing leaks site-wide.
- **Fonts reuse the site's variables.** `quantum.css` maps its font roles onto
  the site's already-loaded fonts — `--font-poppins` (display), `--font-serif`
  (Playfair, editorial italics), `--font-inter` (body), `--font-mono` — so the
  page feels native. No new font loading.
- **Quantum identity.** Violet `#8b5cf6` / cyan `#22d3ee` / plasma `#d946ef`
  over near-black `#09090b` reads as a deliberate, premium dark-glass variant of
  the design-lab aesthetic. These match the site's existing `quantum.*` Tailwind
  palette values, so the page is at home in the dark glassmorphic design-lab.
- **Motion.** Framer Motion (already a site dependency) via
  `LazyMotion` + `domAnimation` throughout. `prefers-reduced-motion` is respected
  in components (`useReducedMotion` gates entrance/parallax/portal/particle
  motion) and via a reduced-motion media block in `quantum.css`.
- **Design-lab shell.** No standalone `Header`/`Footer` (those pointed at the
  template's own brand). Instead the page inherits the site layout and adds a
  sticky in-page bar with a `← Design Lab` back-link, an on-this-page section
  nav, and a "Begin a Jump" CTA, plus a second "Back to Design Lab" affordance in
  the final CTA — consistent with the `nature` standalone page.
- **No images.** The portal and all visuals are pure SVG/CSS/Framer Motion, so
  there are no new assets to add to `/public` and no `next.config` image-domain
  changes required.

## Source

Adapted and improved from the Arcanea template at
`templates/quantum-jumping/` in this same repo. The template's standalone
`Header`/`Footer`/`ScrollProgress`/`opengraph-image`/`icon` and global
`globals.css` were intentionally **not** ported — the route inherits the
frankx.ai layout and uses scoped `quantum.css` instead.
