'use client';

import * as React from 'react';
import {
  Sparkles, ArrowUpRight, ArrowRight, Github, Compass, Brain, Waves,
  Orbit, Atom, Eye, Quote, Check, Play, Moon, Star,
} from 'lucide-react';
import { LiquidGlass } from '../components/ui/LiquidGlass';
import { SplitText } from '../components/ui/SplitText';
import { Magnetic } from '../components/ui/Magnetic';
import { GlowCard } from '../components/ui/GlowCard';
import { Reveal } from '../components/ui/Reveal';
import { PortalOrb } from '../components/ui/PortalOrb';
import { CountUp } from '../components/ui/CountUp';

const MARQUEE = [
  'Infinite Selves', 'Theta Crossing', 'Skill Imprinting', 'Parallel Timelines',
  'Frequency Fields', 'Return With The Gift', 'Quantum Coherence',
];

const PREMISE = [
  { icon: Orbit, title: 'Infinite Yous', body: 'Each fork spawned a complete, living timeline. In billions of them a version of you kept walking down a road you once turned away from.' },
  { icon: Star, title: 'Already Mastered', body: 'Somewhere one of those selves holds the discipline, the craft, the calm you are reaching for. To them it is not a goal — it is an ordinary Tuesday.' },
  { icon: Eye, title: 'A Bridge of Attention', body: 'Quantum Jumping is the practice of placing your attention there so completely that their state becomes a memory you carry home.' },
];

const STEPS = [
  { n: '01', icon: Moon, title: 'Center the Field', body: 'Settle into a slow theta rhythm. Three deep breaths dissolve the noise of this timeline and quiet the ordinary mind.' },
  { n: '02', icon: Orbit, title: 'Open the Portal', body: 'Visualize a door of light before you. Behind it waits a parallel life — close enough to touch, vivid enough to enter.' },
  { n: '03', icon: Compass, title: 'Cross the Threshold', body: 'Step through and meet the version of you who already mastered what you seek. Watch how they move, think, and create.' },
  { n: '04', icon: Sparkles, title: 'Return with the Gift', body: 'Carry their skill, certainty, and frequency back across. Anchor it in the body. The imprint is yours to keep.' },
];

const FEATURES = [
  { icon: Waves, tint: '#8b5cf6', title: 'Guided Jump Library', body: 'Sixty cinematic sessions engineered to drop you into theta within minutes and walk you, breath by breath, into a chosen parallel self.' },
  { icon: Brain, tint: '#22d3ee', title: 'Skill Imprinting', body: 'Encode the mastery you witness on the other side using sensory anchoring — so the ability returns with you instead of staying behind.' },
  { icon: Atom, tint: '#d946ef', title: 'Frequency Sessions', body: 'Layered binaural and isochronic fields tuned to the exact bands where the boundary between selves grows thin.' },
];

const STATS = [
  { end: 10000, suffix: '+', label: 'Jumps completed' },
  { end: 60, suffix: '', label: 'Guided sessions' },
  { end: 4, suffix: '', label: 'Thresholds to cross' },
  { end: 98, suffix: '%', label: 'Report new clarity' },
];

const TESTIMONIALS = [
  { quote: 'I met the version of me who had already finished the album. I came back and recorded it in nine days.', name: 'Mara V.', role: 'Composer', tint: 'rgba(139,92,246,0.14)' },
  { quote: 'The certainty is what transfers. My other self wasn’t hoping the company would work — he simply knew. I borrowed that.', name: 'Devin K.', role: 'Founder', tint: 'rgba(34,211,238,0.14)' },
  { quote: 'Quantum Jumping didn’t hand me a new life. It reminded me that one of mine was already living it.', name: 'Aisha R.', role: 'Painter', tint: 'rgba(217,70,239,0.14)' },
];

const TIERS = [
  { name: 'Drifter', price: 'Free', period: '', tagline: 'Your first crossing.', features: ['3 guided jumps', 'Core breathing primer', 'Parallel journal (7 entries)'], cta: 'Begin Free', highlight: false },
  { name: 'Voyager', price: '$19', period: '/mo', tagline: 'For the regular traveler.', features: ['Full 60-session library', 'Frequency & binaural fields', 'Unlimited parallel journal', 'Skill-imprinting protocols'], cta: 'Become a Voyager', highlight: true },
  { name: 'Architect', price: '$49', period: '/mo', tagline: 'Design across timelines.', features: ['Everything in Voyager', 'Custom jump scripting', 'Live monthly group crossings', 'Early access to new fields'], cta: 'Go Architect', highlight: false },
];

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-100 flex flex-col items-center py-12 px-6 relative">

      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-20 z-50">
        <div className="flex items-center gap-2.5">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center border border-white/[0.12] shadow-lg shadow-violet-500/30">
            <span className="font-display font-black text-white text-base">Q</span>
          </div>
          <span className="font-display font-semibold text-lg tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Quantum&nbsp;Jump
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#theory" className="hover:text-white transition-colors">The Theory</a>
          <a href="#practice" className="hover:text-white transition-colors">The Practice</a>
          <a href="#sessions" className="hover:text-white transition-colors">Sessions</a>
          <a href="#begin" className="hover:text-white transition-colors">Begin</a>
        </nav>

        <div className="flex items-center gap-3">
          <Magnetic>
            <a
              href="https://github.com/frankxai/arcanea-templates"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-white/[0.06] hover:bg-white/[0.04] transition-colors block"
            >
              <Github className="h-4 w-4" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#begin"
              className="relative group px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-100 text-black hover:bg-white transition-all block"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-display">
                Begin a Jump <ArrowUpRight className="h-3 w-3" />
              </span>
            </a>
          </Magnetic>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full max-w-4xl text-center flex flex-col items-center mb-28 z-10">
        <Reveal delay={0.05}>
          <div className="animate-float-slow mb-8">
            <PortalOrb size={300} />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-400/25 bg-violet-400/[0.04] text-[10px] font-semibold text-violet-300 tracking-[0.18em] uppercase mb-8 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" /> Consciousness Technology
          </div>
        </Reveal>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
          <SplitText text="Meet the you who" as="span" className="block text-zinc-100" />
          <span className="font-editorial italic text-quantum-gradient block mt-2">already made it.</span>
        </h1>

        <Reveal delay={0.4}>
          <p className="text-zinc-400 font-body text-base sm:text-lg max-w-xl mb-12 leading-relaxed">
            Quantum Jumping is a guided meditative practice for visiting the parallel
            versions of yourself who have already mastered what you are reaching for —
            and bringing their genius home.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Magnetic>
              <a
                href="#begin"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110 transition-all"
              >
                Begin Your First Jump
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#practice"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
              >
                <Play className="h-3.5 w-3.5" /> Watch the Method
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mt-10 text-xs text-zinc-500 font-mono tracking-wide">
            No belief required · Just breath, attention, and a willingness to cross.
          </p>
        </Reveal>
      </section>

      {/* Marquee */}
      <div className="w-full max-w-6xl mb-36 overflow-hidden border-y border-white/[0.06] py-5 relative z-10 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex gap-12 w-max animate-marquee whitespace-nowrap text-sm font-mono uppercase tracking-[0.2em] text-zinc-500">
          {[...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className="flex items-center gap-12">
              {w}
              <span className="text-violet-400/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Theory */}
      <section id="theory" className="w-full max-w-5xl mb-44 relative z-10">
        <Reveal yOffset={30}>
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-semibold text-quantum-glow uppercase tracking-[0.2em] mb-3">The Premise</h2>
            <p className="font-editorial text-3xl sm:text-4xl italic text-zinc-200 max-w-2xl mx-auto leading-snug">
              Every decision you have ever faced split the universe in two.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREMISE.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <GlowCard glowColor="rgba(139,92,246,0.14)" className="h-full">
                <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center border border-violet-500/20 mb-5">
                  <p.icon className="h-5 w-5 text-violet-300" />
                </div>
                <h3 className="font-display font-semibold text-lg text-zinc-100 mb-2">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Practice */}
      <section id="practice" className="w-full max-w-6xl mb-44 relative z-10">
        <Reveal yOffset={30}>
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-semibold text-cyan-300 uppercase tracking-[0.2em] mb-3">The Method</h2>
            <p className="font-editorial text-3xl sm:text-4xl italic text-zinc-200">Four breaths to another life</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm p-7 overflow-hidden group hover:border-violet-400/25 transition-colors">
                <span className="font-editorial italic text-6xl text-white/[0.06] absolute -top-1 right-4 select-none">{s.n}</span>
                <div className="relative h-10 w-10 rounded-lg bg-white/[0.04] flex items-center justify-center border border-white/[0.08] mb-6 group-hover:border-violet-400/30 transition-colors">
                  <s.icon className="h-5 w-5 text-violet-200" />
                </div>
                <h3 className="relative font-display font-semibold text-lg text-zinc-100 mb-2">{s.title}</h3>
                <p className="relative text-zinc-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full max-w-6xl mb-44 relative z-10">
        <Reveal yOffset={30}>
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-semibold text-fuchsia-300 uppercase tracking-[0.2em] mb-3">The Instrument</h2>
            <p className="font-editorial text-3xl sm:text-4xl italic text-zinc-200">Engineered for the crossing</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <LiquidGlass tint={f.tint} glow sheen tilt className="h-full">
                <div className="p-8 flex flex-col justify-between h-[300px]">
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center border mb-6"
                    style={{ backgroundColor: `${f.tint}1a`, borderColor: `${f.tint}33` }}
                  >
                    <f.icon className="h-5 w-5" style={{ color: f.tint }} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-zinc-100 mb-2">{f.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </LiquidGlass>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="w-full max-w-5xl mb-44 relative z-10">
        <Reveal yOffset={30}>
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl sm:text-5xl font-bold text-quantum-gradient mb-2">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Session log */}
      <section id="sessions" className="w-full max-w-4xl mb-44 relative z-10">
        <Reveal yOffset={35}>
          <LiquidGlass tint="#8b5cf6" intensity="heavy" className="w-full">
            <div className="p-8">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-violet-400 animate-pulse" />
                  <span className="font-mono text-xs text-zinc-400">jump-session://voyager-07 · theta locked</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Coherence 0.98</span>
              </div>

              <div className="font-mono text-xs text-zinc-300 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-violet-300/80 shrink-0">[00:00]</span>
                  <div><span className="text-cyan-300">guide:</span> Breath synchronised. Descending into theta…</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-violet-300/80 shrink-0">[02:41]</span>
                  <div><span className="text-violet-300">field:</span> Portal stabilised. Threshold luminance <span className="text-zinc-100">96%</span>.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-violet-300/80 shrink-0">[04:18]</span>
                  <div><span className="text-fuchsia-300">you:</span> Crossing. Parallel self located — timeline <span className="text-zinc-100">Δ-4417</span>.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-violet-300/80 shrink-0">[05:02]</span>
                  <div><span className="text-emerald-400">imprint:</span> Skill signature acquired → <span className="text-zinc-400">“finished the work”</span>.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-violet-300/80 shrink-0">[06:30]</span>
                  <div><span className="text-cyan-300">guide:</span> Anchoring complete. Welcome back. The gift is yours.</div>
                </div>
              </div>
            </div>
          </LiquidGlass>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-6xl mb-44 relative z-10">
        <Reveal yOffset={30}>
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-semibold text-quantum-glow uppercase tracking-[0.2em] mb-3">Field Reports</h2>
            <p className="font-editorial text-3xl sm:text-4xl italic text-zinc-200">Voices from the other side</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((tm, i) => (
            <Reveal key={tm.name} delay={i * 0.1}>
              <GlowCard glowColor={tm.tint} className="h-full flex flex-col">
                <Quote className="h-7 w-7 text-violet-400/40 mb-4" />
                <p className="text-zinc-200 text-sm leading-relaxed mb-6 flex-1">“{tm.quote}”</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">{tm.name}</p>
                    <p className="text-xs text-zinc-500">{tm.role}</p>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tiers / Begin */}
      <section id="begin" className="w-full max-w-6xl mb-44 relative z-10">
        <Reveal yOffset={30}>
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-semibold text-cyan-300 uppercase tracking-[0.2em] mb-3">Begin</h2>
            <p className="font-editorial text-3xl sm:text-4xl italic text-zinc-200">Choose your depth of crossing</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <div className={`relative h-full rounded-3xl ${t.highlight ? 'bg-gradient-to-b from-violet-500/60 via-fuchsia-500/30 to-cyan-400/40 p-px shadow-2xl shadow-violet-500/20' : 'border border-white/[0.07]'}`}>
                <div className={`relative h-full rounded-3xl p-8 flex flex-col ${t.highlight ? 'bg-[#0b0b13]' : 'bg-white/[0.02]'}`}>
                  {t.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-gradient-to-r from-violet-500 to-cyan-400 text-white whitespace-nowrap">
                      Most chosen
                    </span>
                  )}
                  <h3 className="font-display font-semibold text-lg text-zinc-100">{t.name}</h3>
                  <p className="text-xs text-zinc-500 mb-6">{t.tagline}</p>
                  <div className="flex items-end gap-1 mb-6">
                    <span className="font-display text-4xl font-bold text-zinc-100">{t.price}</span>
                    {t.period && <span className="text-sm text-zinc-500 mb-1">{t.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <Check className="h-4 w-4 text-cyan-300 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Magnetic className="w-full">
                    <button
                      className={`w-full px-5 py-3 rounded-full text-sm font-semibold transition-all ${t.highlight ? 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white hover:brightness-110 shadow-lg shadow-violet-500/25' : 'bg-white/[0.04] text-zinc-100 border border-white/[0.08] hover:bg-white/[0.08]'}`}
                    >
                      {t.cta}
                    </button>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full max-w-4xl text-center py-16 relative z-10 flex flex-col items-center">
        <Reveal yOffset={30}>
          <Atom className="h-8 w-8 text-violet-300 mb-8 mx-auto animate-pulse" />
          <h2 className="font-editorial text-5xl sm:text-6xl italic text-zinc-100 mb-8 max-w-xl leading-tight mx-auto">
            Your other lives are <span className="text-quantum-gradient">already waiting.</span>
          </h2>
          <p className="text-zinc-400 max-w-sm mb-12 text-sm leading-relaxed mx-auto">
            Close your eyes tonight and cross for the first time. The version of you that you have been imagining is closer than your next breath.
          </p>
          <Magnetic>
            <a
              href="#begin"
              className="px-8 py-4 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white hover:brightness-110 transition-all shadow-xl shadow-violet-500/25 inline-block"
            >
              Take Your First Jump
            </a>
          </Magnetic>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl border-t border-white/[0.06] pt-12 mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 z-50 gap-4">
        <span>© {new Date().getFullYear()} Quantum Jump — an Arcanea experiential template.</span>
        <div className="flex gap-6 font-medium">
          <a href="https://arcanea.ai" className="hover:text-zinc-300">Arcanea</a>
          <a href="https://github.com/frankxai/arcanea-templates" className="hover:text-zinc-300">GitHub</a>
          <a href="#begin" className="hover:text-zinc-300">Begin</a>
        </div>
      </footer>
    </main>
  );
}
