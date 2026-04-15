# Arcanea Templates

> Everything we build, you can fork. Free forever. MIT.

Premium Next.js 16 templates with the Arcanea cosmic design system — liquid glass UI, Framer Motion primitives, and AI-first architecture. One-click deploy to Vercel. Zero required env vars where possible.

<table>
<tr>
<th width="50%">Template</th>
<th>Stack</th>
<th>Deploy</th>
</tr>

<tr>
<td>

### ✦ [Cosmic Landing](https://github.com/frankxai/cosmic-landing-template)

Premium dark landing page with 12 motion primitives.
LiquidGlass, SplitText, Magnetic, NumberTicker, GradientMesh, and 7 more.

</td>
<td>Next.js 16 · Framer Motion · Tailwind</td>
<td>

[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/frankxai/cosmic-landing-template)

</td>
</tr>

<tr>
<td>

### ✦ [Arcanea Chat](https://github.com/frankxai/arcanea-chat-template)

AI chat with **12 Luminor personas** and **real BYOK** — keys live in
your browser, flow via request headers, never touch the server.

</td>
<td>Next.js 16 · AI SDK 6 · Auth.js</td>
<td>

[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/frankxai/arcanea-chat-template&env=AUTH_SECRET)

</td>
</tr>

<tr>
<td>

### ✦ [Cosmic Dashboard](https://github.com/frankxai/arcanea-dashboard-template)

Analytics dashboard with 6 liquid glass widgets — stat cards, area
charts, donut, funnel, ranked list, activity feed. Mock data, zero config.

</td>
<td>Next.js 16 · Recharts · Framer Motion</td>
<td>

[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/frankxai/arcanea-dashboard-template)

</td>
</tr>

<tr>
<td>

### ✦ [MCP Starter](https://github.com/frankxai/arcanea-mcp-starter)

Production-ready MCP server starter — SDK 1.29, 3 example tools, HTTP/SSE
transport, Claude Desktop config. Build your own agents.

</td>
<td>TypeScript · MCP SDK 1.29 · Zod</td>
<td>

[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/frankxai/arcanea-mcp-starter)

</td>
</tr>

</table>

## Design Principles

Every Arcanea template follows these rules:

1. **Real deploy button.** One click from GitHub to live URL on Vercel.
2. **Zero required env vars** where possible. BYOK patterns over server keys.
3. **MIT license.** Use commercially, modify freely, no attribution required.
4. **Clean fork tree.** No monorepo clutter, no internal references.
5. **Production build passes.** Every push green.
6. **Real OG images.** Edge-rendered, Arcanea-branded, marketplace-ready.
7. **Cosmic design tokens.** Atlantean Teal (#00bcd4), Cosmic Blue (#0d47a1), Gold (#ffd700), background #09090b.
8. **Framer Motion 11** primitives — `domAnimation` not `domMax`, LazyMotion wrapped.

## The 12 Motion Primitives (shared across templates)

| Primitive | What it does |
|-----------|-------------|
| **LiquidGlass** | 4-layer glass: noise + sheen + tilt + glow |
| **SplitText** | Character-by-character blur-to-focus reveal |
| **Reveal / StaggerReveal** | Scroll-triggered entrance with blur |
| **GradientMesh** | Animated radial gradient background |
| **Magnetic** | Cursor attraction on CTAs via spring physics |
| **GlowCard** | Cursor-following border glow (Linear-tier) |
| **TiltCard** | 3D perspective tilt on hover |
| **NumberTicker** | Count-up with spring interpolation |
| **Marquee** | Infinite horizontal scroll |
| **ShimmerButton** | Animated light sweep |
| **AnimatedBeam** | SVG path connection with flow |
| **CursorFollower** | Dot following pointer |

Copy/paste from any template. All self-contained, zero coupling.

## Getting Started

Pick a template, click Deploy, or:

```bash
# Example — chat template
git clone https://github.com/frankxai/arcanea-chat-template.git
cd arcanea-chat-template
pnpm install
pnpm dev
```

Every README has its own Quick Start + Architecture + Customization sections.

## What's Coming

In active development (check repos for latest):

- **arcanea-world-engine-template** — Characters, locations, magic systems as a living graph
- **arcanea-publishing-template** — Multi-agent book production with Taste Gate
- **arcanea-agent-template** — Claude Managed Agent API + MCP integration

## License

All templates MIT. Use commercially, modify freely, no attribution required.

---

Built by [Arcanea](https://arcanea.ai) · [GitHub](https://github.com/frankxai) · [Templates showcase](https://arcanea.ai/templates)
