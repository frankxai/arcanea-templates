'use client';

import * as React from 'react';
import { Sparkles, Terminal, Shield, Cpu, ArrowUpRight, Github, BookOpen } from 'lucide-react';
import { LiquidGlass } from '../components/ui/LiquidGlass';
import { SplitText } from '../components/ui/SplitText';
import { Magnetic } from '../components/ui/Magnetic';
import { GlowCard } from '../components/ui/GlowCard';
import { Reveal } from '../components/ui/Reveal';

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-100 flex flex-col items-center py-12 px-6 relative overflow-hidden">
      
      {/* Dynamic Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-24 z-50">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-atlanteanTeal to-brand-cosmicBlue flex items-center justify-center border border-white/[0.1] shadow-lg shadow-brand-atlanteanTeal/20">
            <span className="font-display font-black text-black text-base">A</span>
          </div>
          <span className="font-display font-semibold text-lg tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Arcanea
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          <a href="#sandbox" className="hover:text-white transition-colors">Sandbox</a>
        </nav>

        <div className="flex items-center gap-4">
          <Magnetic>
            <a 
              href="https://github.com/frankxai/arcanea-templates"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-white/[0.06] hover:bg-white/[0.04] transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </Magnetic>
          <Magnetic>
            <button className="relative group px-5 py-2.5 rounded-full text-xs font-semibold overflow-hidden transition-all bg-zinc-100 text-black hover:bg-zinc-200">
              <span className="relative z-10 flex items-center gap-1.5 font-display">
                Deploy Template <ArrowUpRight className="h-3 w-3" />
              </span>
            </button>
          </Magnetic>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center flex flex-col items-center mb-36 relative z-10">
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-atlanteanTeal/20 bg-brand-atlanteanTeal/[0.03] text-[10px] font-semibold text-brand-atlanteanTeal tracking-wider uppercase mb-8 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" /> AI-First Project Starter
          </div>
        </Reveal>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.08]">
          <SplitText text="The Creator Intelligence" as="span" className="block text-zinc-100" />
          <span className="font-editorial italic text-brand-arcaneanGold font-medium block mt-2">
            Workspace for World Builders.
          </span>
        </h1>

        <Reveal delay={0.4}>
          <p className="text-zinc-400 font-body text-base sm:text-lg max-w-xl mb-12 leading-relaxed">
            Forkable, production-ready Next.js layout built using HSL cosmic tokens, liquid glass layers, and hardware-accelerated micro-animations.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Magnetic>
              <button className="px-7 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-brand-atlanteanTeal to-brand-cosmicBlue text-black shadow-lg shadow-brand-atlanteanTeal/10 hover:shadow-brand-atlanteanTeal/25 hover:brightness-105 transition-all">
                Get Started
              </button>
            </Magnetic>
            <Magnetic>
              <button className="px-7 py-3.5 rounded-full text-sm font-semibold border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] transition-colors">
                View Documentation
              </button>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      {/* Premium Glass Feature Showcase */}
      <section id="features" className="w-full max-w-6xl mb-40 relative z-10">
        <Reveal yOffset={30}>
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold text-brand-arcaneanGold uppercase tracking-widest mb-3">Core Primitives</h2>
            <p className="font-editorial text-3xl sm:text-4xl italic text-zinc-200">Crafted with machine excellence</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal delay={0.1}>
            <LiquidGlass tint="#00bcd4" glow sheen tilt className="h-full">
              <div className="p-8 flex flex-col justify-between h-[300px]">
                <div className="h-10 w-10 rounded-lg bg-brand-atlanteanTeal/10 flex items-center justify-center border border-brand-atlanteanTeal/20 mb-6">
                  <Cpu className="h-5 w-5 text-brand-atlanteanTeal" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-zinc-100 mb-2">LiquidGlass Layering</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Combines SVG fractal noise overlays, custom backdrop-filters, mouse radial coordinates, and 3D perspectives.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </Reveal>

          <Reveal delay={0.2}>
            <LiquidGlass tint="#ffd700" glow sheen tilt className="h-full">
              <div className="p-8 flex flex-col justify-between h-[300px]">
                <div className="h-10 w-10 rounded-lg bg-brand-arcaneanGold/10 flex items-center justify-center border border-brand-arcaneanGold/20 mb-6">
                  <Terminal className="h-5 w-5 text-brand-arcaneanGold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-zinc-100 mb-2">BYOK-First Security</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Keys live strictly inside the client browser context and are piped via request headers, bypassing database moats.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </Reveal>

          <Reveal delay={0.3}>
            <LiquidGlass tint="#7fffd4" glow sheen tilt className="h-full">
              <div className="p-8 flex flex-col justify-between h-[300px]">
                <div className="h-10 w-10 rounded-lg bg-brand-aquamarine/10 flex items-center justify-center border border-brand-aquamarine/20 mb-6">
                  <Shield className="h-5 w-5 text-brand-aquamarine" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-zinc-100 mb-2">Agentic Orchestration</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Pre-wired hooks to spin up MCP servers, run multi-persona swarms, and deliberation cycles on commit.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </Reveal>
        </div>
      </section>

      {/* Grid of Micro-components */}
      <section id="architecture" className="w-full max-w-6xl mb-40 relative z-10">
        <Reveal yOffset={30}>
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold text-brand-aquamarine uppercase tracking-widest mb-3">Ecosystem Moat</h2>
            <p className="font-editorial text-3xl sm:text-4xl italic text-zinc-200">The decentralized intelligence stack</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <GlowCard glowColor="rgba(0, 188, 212, 0.12)" className="h-full">
              <h3 className="font-display font-semibold text-lg text-zinc-100 mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-brand-atlanteanTeal" /> Decentralized Splits
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                When readers purchase content or templates generated inside Arcanea, smart contracts automatically execute micro-splits across co-creators, publishers, and active agents.
              </p>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded bg-zinc-800 border border-white/[0.05] text-[10px] font-mono text-zinc-400">Onchain Minting</span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 border border-white/[0.05] text-[10px] font-mono text-zinc-400">Splits V2</span>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.2}>
            <GlowCard glowColor="rgba(255, 215, 0, 0.12)" className="h-full">
              <h3 className="font-display font-semibold text-lg text-zinc-100 mb-2 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-brand-arcaneanGold" /> Contextual Memory Graph
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Every prompt, decision, and character sheet is woven into a high-performance vector graph database. Your world grows smarter with every paragraph you add.
              </p>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded bg-zinc-800 border border-white/[0.05] text-[10px] font-mono text-zinc-400">ChromaDB</span>
                <span className="px-2.5 py-1 rounded bg-zinc-800 border border-white/[0.05] text-[10px] font-mono text-zinc-400">Luminor Sona</span>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </section>

      {/* Live Swarm Interactive Terminal Mock */}
      <section id="sandbox" className="w-full max-w-4xl mb-40 relative z-10">
        <Reveal yOffset={35}>
          <LiquidGlass tint="#00bcd4" intensity="heavy" className="w-full">
            <div className="p-8">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs text-zinc-400">agent-swarm-telemetry@arcanea: active</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Stdio Transport Online</span>
              </div>

              <div className="font-mono text-xs text-zinc-300 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-brand-atlanteanTeal">[02:07:13]</span>
                  <div>
                    <span className="text-brand-arcaneanGold">sys-operator:</span> Swarm consensus initialized. Fleet members connected: <span className="text-brand-aquamarine">Lumina, Lyria, Draconia, Alera, Shinkami</span>.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-brand-atlanteanTeal">[02:07:22]</span>
                  <div>
                    <span className="text-brand-aquamarine">lumina-orchestrator:</span> Deliberation loop running on <span className="text-zinc-400">"chapters/01-first-flames.md"</span>.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-brand-atlanteanTeal">[02:07:26]</span>
                  <div>
                    <span className="text-purple-400">lyria-sight:</span> Identified 2 stylistic bottlenecks. Writing critiques to <span className="text-zinc-400">council-audits/</span>.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-brand-atlanteanTeal">[02:07:30]</span>
                  <div>
                    <span className="text-emerald-400">alera-voice:</span> Climax rhythm check passed. Tone rating: <span className="text-brand-arcaneanGold">9.8/10</span>.
                  </div>
                </div>
              </div>
            </div>
          </LiquidGlass>
        </Reveal>
      </section>

      {/* Cosmic CTA Section */}
      <section className="w-full max-w-4xl text-center py-20 relative z-10 flex flex-col items-center">
        <Reveal yOffset={30}>
          <h2 className="font-editorial text-5xl sm:text-6xl italic text-zinc-200 mb-8 max-w-xl leading-tight">
            Ready to shape <span className="text-brand-atlanteanTeal">your universe</span>?
          </h2>
          <p className="text-zinc-400 max-w-sm mb-12 text-sm leading-relaxed">
            Deploy this template to Vercel in one click. Free, open source, and MIT licensed.
          </p>
          <Magnetic>
            <button className="px-8 py-4 rounded-full text-sm font-semibold bg-zinc-100 text-black hover:bg-zinc-200 transition-colors shadow-xl shadow-white/5">
              Deploy to Vercel
            </button>
          </Magnetic>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl border-t border-white/[0.06] pt-12 mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 z-50">
        <span>© {new Date().getFullYear()} Arcanea. AI-powered world-building ecosystem.</span>
        <div className="flex gap-6 mt-4 md:mt-0 font-medium">
          <a href="https://arcanea.ai" className="hover:text-zinc-300">Arcanea Home</a>
          <a href="https://github.com/frankxai" className="hover:text-zinc-300">GitHub</a>
          <a href="https://arcanea.ai/templates" className="hover:text-zinc-300">Showcase</a>
        </div>
      </footer>
      
    </main>
  );
}
