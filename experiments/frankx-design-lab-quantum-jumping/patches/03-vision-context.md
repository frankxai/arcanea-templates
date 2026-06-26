# Patch 3 — `lib/vision-context.ts`

Add the route to the route allowlist array (around line 46). Insert the
`quantum-jumping` entry directly under `/design-lab`:

```diff
   '/design-lab',
+  '/design-lab/quantum-jumping',
   '/design-lab/family-tree',
```

This is optional for the page to render (other standalone design-lab routes such
as `/design-lab/nature` are not in this list), but it keeps the new route
consistent with the vision-context signature routes. Safe, additive, one line.
