'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Compass,
  Brain,
  Waves,
  Orbit,
  Atom,
  Eye,
  Quote,
  Check,
  Play,
  Moon,
  Star,
  ChevronDown,
} from 'lucide-react'
import './quantum.css'
import { LiquidGlass } from './_components/LiquidGlass'
import { SplitText } from './_components/SplitText'
import { Magnetic } from './_components/Magnetic'
import { GlowCard } from './_components/GlowCard'
import { Reveal } from './_components/Reveal'
import { PortalOrb } from './_components/PortalOrb'
import { CountUp } from './_components/CountUp'
import { FAQ } from './_components/FAQ'
import { SelfSelector } from './_components/SelfSelector'
import { SessionLog } from './_components/SessionLog'
import { CursorGlow } from './_components/CursorGlow'
import { QuantumField } from './_components/QuantumField'

const MARQUEE = [
  'Infinite Selves',
  'Theta Crossing',
  'Skill Imprinting',
  'Parallel Timelines',
  'Frequency Fields',
  'Return With The Gift',
  'Quantum Coherence',
]

const SECTION_NAV = [
  { label: 'Premise', href: '#theory' },
  { label: 'Choose a Self', href: '#selves' },
  { label: 'Method', href: '#practice' },
  { label: 'Sessions', href: '#sessions' },
  { label: 'Pricing', href: '#begin' },
  { label: 'FAQ', href: '#faq' },
]

const PREMISE = [
  {
    icon: Orbit,
    title: 'Infinite Yous',
    body: 'Each fork spawned a complete, living timeline. In billions of them a version of you kept walking down a road you once turned away from.',
  },
  {
    icon: Star,
    title: 'Already Mastered',
    body: 'Somewhere one of those selves holds the discipline, the craft, the calm you are reaching for. To them it is not a goal — it is an ordinary Tuesday.',
  },
  {
    icon: Eye,
    title: 'A Bridge of Attention',
    body: 'Quantum Jumping is the practice of placing your attention there so completely that their state becomes a memory you carry home.',
  },
]

const STEPS = [
  {
    n: '01',
    icon: Moon,
    title: 'Center the Field',
    body: 'Settle into a slow theta rhythm. Three deep breaths dissolve the noise of this timeline and quiet the ordinary mind.',
  },
  {
    n: '02',
    icon: Orbit,
    title: 'Open the Portal',
    body: 'Visualize a door of light before you. Behind it waits a parallel life — close enough to touch, vivid enough to enter.',
  },
  {
    n: '03',
    icon: Compass,
    title: 'Cross the Threshold',
    body: 'Step through and meet the version of you who already mastered what you seek. Watch how they move, think, and create.',
  },
  {
    n: '04',
    icon: Sparkles,
    title: 'Return with the Gift',
    body: 'Carry their skill, certainty, and frequency back across. Anchor it in the body. The imprint is yours to keep.',
  },
]

const FEATURES = [
  {
    icon: Waves,
    tint: '#8b5cf6',
    title: 'Guided Jump Library',
    body: 'Sixty cinematic sessions engineered to drop you into theta within minutes and walk you, breath by breath, into a chosen parallel self.',
  },
  {
    icon: Brain,
    tint: '#22d3ee',
    title: 'Skill Imprinting',
    body: 'Encode the mastery you witness on the other side using sensory anchoring — so the ability returns with you instead of staying behind.',
  },
  {
    icon: Atom,
    tint: '#d946ef',
    title: 'Frequency Sessions',
    body: 'Layered binaural and isochronic fields tuned to the exact bands where the boundary between selves grows thin.',
  },
]

const STATS = [
  { end: 10000, suffix: '+', label: 'Jumps completed' },
  { end: 60, suffix: '', label: 'Guided sessions' },
  { end: 4, suffix: '', label: 'Thresholds to cross' },
  { end: 98, suffix: '%', label: 'Report new clarity' },
]

const TESTIMONIALS = [
  {
    quote: 'I met the version of me who had already finished the album. I came back and recorded it in nine days.',
    name: 'Mara V.',
    role: 'Composer',
    tint: 'rgba(139,92,246,0.14)',
    from: 'from-violet-500',
    to: 'to-fuchsia-500',
  },
  {
    quote:
      'The certainty is what transfers. My other self wasn’t hoping the company would work — he simply knew. I borrowed that.',
    name: 'Devin K.',
    role: 'Founder',
    tint: 'rgba(34,211,238,0.14)',
    from: 'from-cyan-400',
    to: 'to-violet-500',
  },
  {
    quote: 'Quantum Jumping didn’t hand me a new life. It reminded me that one of mine was already living it.',
    name: 'Aisha R.',
    role: 'Painter',
    tint: 'rgba(217,70,239,0.14)',
    from: 'from-fuchsia-500',
    to: 'to-cyan-400',
  },
]

const TIERS = [
  {
    name: 'Drifter',
    price: 'Free',
    period: '',
    tagline: 'Your first crossing.',
    features: ['3 guided jumps', 'Core breathing primer', 'Parallel journal (7 entries)'],
    cta: 'Begin Free',
    highlight: false,
  },
  {
    name: 'Voyager',
    price: '$19',
    period: '/mo',
    tagline: 'For the regular traveler.',
    features: [
      'Full 60-session library',
      'Frequency & binaural fields',
      'Unlimited parallel journal',
      'Skill-imprinting protocols',
    ],
    cta: 'Become a Voyager',
    highlight: true,
  },
  {
    name: 'Architect',
    price: '$49',
    period: '/mo',
    tagline: 'Design across timelines.',
    features: [
      'Everything in Voyager',
      'Custom jump scripting',
      'Live monthly group crossings',
      'Early access to new fields',
    ],
    cta: 'Go Architect',
    highlight: false,
  },
]

const FAQS = [
  {
    q: 'What exactly is Quantum Jumping?',
    a: 'It is a guided visualization practice. You drop into a relaxed, theta-like state and vividly imagine meeting a version of yourself who already embodies a skill or quality you want. The aim is experiential: to borrow their posture, certainty, and way of moving through the world, then anchor that felt sense in your own body.',
  },
  {
    q: 'Do I have to believe in parallel universes for it to work?',
    a: 'Not at all. The many-worlds framing is a useful metaphor, not a requirement. Whether you treat your “other self” as literally real or as a powerful creative projection, the practice works the same way — by giving your nervous system a clear, embodied target to rehearse toward.',
  },
  {
    q: 'Is it safe?',
    a: 'Yes. This is essentially structured relaxation and guided imagery — the same family of techniques used in visualization and mindfulness. It is not a substitute for medical or psychological care. If you live with a condition that affects dissociation or perception, check with your practitioner first and keep sessions short.',
  },
  {
    q: 'How long until I notice results?',
    a: 'Many people feel a shift in mood and clarity after a single session — the calm or confidence lingers for a while. Lasting change comes from repetition: most travelers practice a few times a week for two to three weeks before the new state starts to feel like their default.',
  },
  {
    q: 'I’ve never meditated. Can I still do this?',
    a: 'Absolutely. The guided sessions assume no experience. You simply listen, breathe, and follow the imagery. Beginners often find Quantum Jumping easier than silent meditation precisely because there is a story and a destination to hold your attention.',
  },
  {
    q: 'What’s the science framing here?',
    a: 'We lean on well-studied ideas: mental rehearsal, which athletes use to improve real performance; state-dependent memory; and the brain’s difficulty distinguishing vividly imagined experience from lived experience. We make no medical claims — treat this as a creative, experiential practice rather than a clinical protocol.',
  },
]

export default function QuantumJumpingPage() {
  return (
    <div className="qj-root min-h-screen text-zinc-100">
      <QuantumField />

      {/* ── Design-lab affordance: back link + in-page section nav ── */}
      <div className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#09090b]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 h-14">
          <Link
            href="/design-lab"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Design Lab
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="On this page">
            {SECTION_NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-zinc-400 transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <Magnetic>
            <a
              href="#begin"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:brightness-110"
            >
              Begin a Jump <ArrowRight className="h-3 w-3" />
            </a>
          </Magnetic>
        </div>
      </div>

      <main className="relative flex flex-col items-center px-6">
        <span id="top" className="absolute top-0" aria-hidden="true" />

        {/* Hero */}
        <section className="relative z-10 mb-28 flex w-full max-w-4xl flex-col items-center overflow-hidden pt-20 text-center sm:pt-28">
          <CursorGlow color="rgba(139,92,246,0.16)" />

          <Reveal delay={0.05}>
            <div className="qj-animate-float-slow mb-10">
              <PortalOrb size={300} />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300 backdrop-blur-sm">
              <Sparkles className="h-3 w-3" /> Design Lab — Consciousness Technology
            </div>
          </Reveal>

          <h1 className="qj-font-display mb-8 text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
            <SplitText text="Meet the you who" as="span" className="block text-zinc-100" />
            <span className="qj-font-editorial qj-text-gradient-animated mt-2 block">already made it.</span>
          </h1>

          <Reveal delay={0.4}>
            <p className="qj-font-body mb-10 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Quantum Jumping is a guided meditative practice for visiting the parallel versions of yourself who
              have already mastered what you are reaching for — and bringing their genius home.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Magnetic>
                <a
                  href="#begin"
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/50 hover:brightness-110"
                >
                  Begin Your First Jump
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#practice"
                  className="group flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.02] px-7 py-3.5 text-sm font-semibold transition-all hover:border-white/[0.2] hover:bg-white/[0.06]"
                >
                  <Play className="h-3.5 w-3.5 transition-transform group-hover:scale-110" /> Watch the Method
                </a>
              </Magnetic>
            </div>
          </Reveal>

          {/* Trust / affirmation row */}
          <Reveal delay={0.6}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-cyan-300" /> No belief required
              </span>
              <span className="hidden text-zinc-700 sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-cyan-300" /> 10,000+ crossings logged
              </span>
              <span className="hidden text-zinc-700 sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-cyan-300" /> Just breath &amp; attention
              </span>
            </div>
          </Reveal>

          {/* Scroll cue */}
          <a href="#theory" aria-label="Scroll to begin" className="mt-16 text-zinc-600 transition-colors hover:text-zinc-400">
            <ChevronDown className="qj-animate-scroll-cue h-5 w-5" />
          </a>
        </section>

        {/* Marquee */}
        <div className="relative z-10 mb-36 w-full max-w-6xl overflow-hidden border-y border-white/[0.06] py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="qj-marquee-track qj-animate-marquee qj-font-mono flex w-max gap-12 whitespace-nowrap text-sm uppercase tracking-[0.2em] text-zinc-500">
            {[...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i} className="flex items-center gap-12">
                {w}
                <span className="text-violet-400/40">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Premise */}
        <section id="theory" className="relative z-10 mb-44 w-full max-w-5xl scroll-mt-20">
          <Reveal yOffset={30}>
            <div className="mb-16 text-center">
              <h2 className="qj-text-glow mb-3 text-[11px] font-semibold uppercase tracking-[0.2em]">The Premise</h2>
              <p className="qj-font-editorial mx-auto max-w-2xl text-3xl leading-snug text-zinc-200 sm:text-4xl">
                Every decision you have ever faced split the universe in two.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PREMISE.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <GlowCard glowColor="rgba(139,92,246,0.16)" className="h-full">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                    <p.icon className="h-5 w-5 text-violet-300" />
                  </div>
                  <h3 className="qj-font-display mb-2 text-lg font-semibold text-zinc-100">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{p.body}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Choose a Self */}
        <section id="selves" className="relative z-10 mb-44 w-full max-w-6xl scroll-mt-20">
          <Reveal yOffset={30}>
            <div className="mb-16 text-center">
              <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-fuchsia-300">The Crossing</h2>
              <p className="qj-font-editorial text-3xl text-zinc-200 sm:text-4xl">Who will you visit?</p>
              <p className="mx-auto mt-4 max-w-md text-sm text-zinc-500">
                Choose a parallel self. See exactly which state you would carry back across the threshold.
              </p>
            </div>
          </Reveal>
          <Reveal yOffset={30} delay={0.1}>
            <SelfSelector />
          </Reveal>
        </section>

        {/* Method */}
        <section id="practice" className="relative z-10 mb-44 w-full max-w-6xl scroll-mt-20">
          <Reveal yOffset={30}>
            <div className="mb-16 text-center">
              <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">The Method</h2>
              <p className="qj-font-editorial text-3xl text-zinc-200 sm:text-4xl">Four breaths to another life</p>
            </div>
          </Reveal>
          <div className="relative">
            {/* Connecting spine */}
            <div
              className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-violet-500/0 via-violet-400/40 to-cyan-400/0 lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-violet-500/0 via-violet-400/40 to-cyan-400/0 lg:hidden"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.1}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b0b13]/80 p-7 backdrop-blur-sm transition-colors hover:border-violet-400/30">
                    <span className="qj-font-editorial absolute -top-1 right-4 select-none text-6xl text-white/[0.06]">
                      {s.n}
                    </span>
                    <div className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-colors group-hover:border-violet-400/40 group-hover:bg-violet-500/10">
                      <s.icon className="h-5 w-5 text-violet-200" />
                    </div>
                    <h3 className="qj-font-display relative mb-2 text-lg font-semibold text-zinc-100">{s.title}</h3>
                    <p className="relative text-sm leading-relaxed text-zinc-400">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="relative z-10 mb-44 w-full max-w-6xl scroll-mt-20">
          <Reveal yOffset={30}>
            <div className="mb-16 text-center">
              <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                The Instrument
              </h2>
              <p className="qj-font-editorial text-3xl text-zinc-200 sm:text-4xl">Engineered for the crossing</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <LiquidGlass tint={f.tint} glow sheen tilt className="h-full">
                  <div className="flex h-[300px] flex-col justify-between p-8">
                    <div
                      className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border"
                      style={{ backgroundColor: `${f.tint}1a`, borderColor: `${f.tint}33` }}
                    >
                      <f.icon className="h-5 w-5" style={{ color: f.tint }} />
                    </div>
                    <div>
                      <h3 className="qj-font-display mb-2 text-xl font-semibold text-zinc-100">{f.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-400">{f.body}</p>
                    </div>
                  </div>
                </LiquidGlass>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="relative z-10 mb-44 w-full max-w-5xl">
          <Reveal yOffset={30}>
            <div className="grid grid-cols-2 gap-8 divide-x-0 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 backdrop-blur-md md:grid-cols-4 md:divide-x md:divide-white/[0.06]">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="qj-font-display qj-text-gradient mb-2 text-4xl font-bold sm:text-5xl">
                    <CountUp end={s.end} suffix={s.suffix} />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Session log */}
        <section id="sessions" className="relative z-10 mb-44 w-full max-w-4xl scroll-mt-20">
          <Reveal yOffset={35}>
            <SessionLog />
          </Reveal>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="relative z-10 mb-44 w-full max-w-6xl scroll-mt-20">
          <Reveal yOffset={30}>
            <div className="mb-16 text-center">
              <h2 className="qj-text-glow mb-3 text-[11px] font-semibold uppercase tracking-[0.2em]">Field Reports</h2>
              <p className="qj-font-editorial text-3xl text-zinc-200 sm:text-4xl">Voices from the other side</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((tm, i) => (
              <Reveal key={tm.name} delay={i * 0.1}>
                <GlowCard glowColor={tm.tint} className="flex h-full flex-col">
                  <div className="mb-4 flex items-center gap-1 text-violet-300/70">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <span key={k} className="text-xs">
                        ✦
                      </span>
                    ))}
                  </div>
                  <Quote className="mb-4 h-7 w-7 text-violet-400/40" />
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-200">“{tm.quote}”</p>
                  <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                    <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${tm.from} ${tm.to} ring-2 ring-white/[0.06]`} />
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
        <section id="begin" className="relative z-10 mb-44 w-full max-w-6xl scroll-mt-20">
          <Reveal yOffset={30}>
            <div className="mb-16 text-center">
              <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">Begin</h2>
              <p className="qj-font-editorial text-3xl text-zinc-200 sm:text-4xl">Choose your depth of crossing</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} className="h-full">
                <div
                  className={`relative h-full rounded-3xl ${
                    t.highlight
                      ? 'bg-gradient-to-b from-violet-500/70 via-fuchsia-500/40 to-cyan-400/50 p-px shadow-2xl shadow-violet-500/25 md:-translate-y-2'
                      : 'border border-white/[0.07]'
                  }`}
                >
                  <div className={`relative flex h-full flex-col rounded-3xl p-8 ${t.highlight ? 'bg-[#0b0b13]' : 'bg-white/[0.02]'}`}>
                    {t.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-lg shadow-violet-500/30">
                        Most chosen
                      </span>
                    )}
                    <h3 className="qj-font-display text-lg font-semibold text-zinc-100">{t.name}</h3>
                    <p className="mb-6 text-xs text-zinc-500">{t.tagline}</p>
                    <div className="mb-6 flex items-end gap-1">
                      <span className="qj-font-display text-4xl font-bold text-zinc-100">{t.price}</span>
                      {t.period && <span className="mb-1 text-sm text-zinc-500">{t.period}</span>}
                    </div>
                    <ul className="mb-8 flex-1 space-y-3">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Magnetic className="w-full">
                      <button
                        className={`w-full rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                          t.highlight
                            ? 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-violet-500/30 hover:brightness-110'
                            : 'border border-white/[0.08] bg-white/[0.04] text-zinc-100 hover:bg-white/[0.08]'
                        }`}
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

        {/* FAQ */}
        <section id="faq" className="relative z-10 mb-44 w-full max-w-6xl scroll-mt-20">
          <Reveal yOffset={30}>
            <div className="mb-16 text-center">
              <h2 className="qj-text-glow mb-3 text-[11px] font-semibold uppercase tracking-[0.2em]">Before You Cross</h2>
              <p className="qj-font-editorial text-3xl text-zinc-200 sm:text-4xl">Questions from the threshold</p>
            </div>
          </Reveal>
          <Reveal yOffset={30} delay={0.1}>
            <FAQ items={FAQS} />
          </Reveal>
        </section>

        {/* Final CTA */}
        <section className="relative z-10 flex w-full max-w-4xl flex-col items-center py-16 text-center">
          <Reveal yOffset={30}>
            <Atom className="qj-animate-pulse mx-auto mb-8 h-8 w-8 text-violet-300" />
            <h2 className="qj-font-editorial mx-auto mb-8 max-w-xl text-5xl leading-tight text-zinc-100 sm:text-6xl">
              Your other lives are <span className="qj-text-gradient-animated">already waiting.</span>
            </h2>
            <p className="mx-auto mb-12 max-w-sm text-sm leading-relaxed text-zinc-400">
              Close your eyes tonight and cross for the first time. The version of you that you have been imagining is
              closer than your next breath.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Magnetic>
                <a
                  href="#begin"
                  className="inline-block rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-500/30 transition-all hover:brightness-110"
                >
                  Take Your First Jump
                </a>
              </Magnetic>
              <Link
                href="/design-lab"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.02] px-6 py-4 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.06]"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Design Lab
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  )
}
