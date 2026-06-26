# Patch 1 — `app/design-lab/page.tsx`

Make the Quantum Jumping experiment discoverable from the Design Lab gallery by
adding it to the `hubSections` array. Two small edits.

## 1a. Add the `Orbit` icon to the existing `lucide-react` import

The import block at the top of the file (around lines 7–31) lists icons
alphabetically. Add `Orbit` between `MousePointerClick` and `Palette`:

```diff
   MousePointerClick,
+  Orbit,
   Palette,
   ShoppingBag,
   Sparkles,
```

## 1b. Append a new entry to the `hubSections` array

`hubSections` is defined around line 222. Add this object as the **last** item
in the array (after the `v0 Design Showcase` entry, before the closing `]`):

```ts
  {
    title: 'Quantum Jumping',
    subtitle: 'A cinematic experiential landing page — animated portal, interactive self-selector, four-step method, and a self-revealing session console, all in scoped violet/cyan/plasma glass',
    href: '/design-lab/quantum-jumping',
    icon: Orbit,
    color: 'violet',
    badge: 'Premium Experience',
    stats: 'Framer Motion',
  },
```

The object shape matches the other `hubSections` entries exactly
(`title`, `subtitle`, `href`, `icon`, `color`, `badge`, `stats`). `color: 'violet'`
is already a valid `GlowColor` / `colorConfig` key on the site.
