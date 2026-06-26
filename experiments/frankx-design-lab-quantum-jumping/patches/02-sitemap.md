# Patch 2 — `app/sitemap.ts`

Add the route to the static route list (the `Design Lab` block, around line 296).
Insert the `quantum-jumping` line directly under the `/design-lab` entry:

```diff
     // Design Lab
     { url: '/design-lab', priority: 0.6, changeFrequency: 'weekly' as const },
+    { url: '/design-lab/quantum-jumping', priority: 0.6, changeFrequency: 'monthly' as const },
     { url: '/design-lab/nature', priority: 0.6, changeFrequency: 'monthly' as const },
     { url: '/design-lab/nature/variants', priority: 0.5, changeFrequency: 'monthly' as const },
```
