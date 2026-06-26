'use client'

import * as React from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { LiquidGlass } from './LiquidGlass'

interface LogLine {
  t: string
  role: string
  roleColor: string
  body: React.ReactNode
}

const LINES: LogLine[] = [
  {
    t: '[00:00]',
    role: 'guide:',
    roleColor: 'text-cyan-300',
    body: 'Breath synchronised. Descending into theta…',
  },
  {
    t: '[02:41]',
    role: 'field:',
    roleColor: 'text-violet-300',
    body: (
      <>
        Portal stabilised. Threshold luminance <span className="text-zinc-100">96%</span>.
      </>
    ),
  },
  {
    t: '[04:18]',
    role: 'you:',
    roleColor: 'text-fuchsia-300',
    body: (
      <>
        Crossing. Parallel self located — timeline <span className="text-zinc-100">Δ-4417</span>.
      </>
    ),
  },
  {
    t: '[05:02]',
    role: 'imprint:',
    roleColor: 'text-emerald-400',
    body: (
      <>
        Skill signature acquired → <span className="text-zinc-400">&ldquo;finished the work&rdquo;</span>.
      </>
    ),
  },
  {
    t: '[06:30]',
    role: 'guide:',
    roleColor: 'text-cyan-300',
    body: 'Anchoring complete. Welcome back. The gift is yours.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35, delayChildren: 0.1 } },
}

const line = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export function SessionLog() {
  return (
    <LazyMotion features={domAnimation}>
      <LiquidGlass tint="#8b5cf6" intensity="heavy" className="w-full">
        <div className="p-8">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="qj-font-mono text-xs text-zinc-400">jump-session://voyager-07 · theta locked</span>
            </div>
            <span className="qj-font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Coherence 0.98</span>
          </div>

          <m.div
            className="qj-font-mono text-xs text-zinc-300 space-y-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
          >
            {LINES.map((l, i) => (
              <m.div key={i} variants={line} className="flex items-start gap-4">
                <span className="text-violet-300/80 shrink-0">{l.t}</span>
                <div>
                  <span className={l.roleColor}>{l.role}</span> {l.body}
                </div>
              </m.div>
            ))}
            <m.div variants={line} className="flex items-start gap-4">
              <span className="text-violet-300/80 shrink-0">[—:—]</span>
              <div className="text-zinc-500">
                session closed
                <span className="qj-animate-blink text-violet-300 ml-0.5">▌</span>
              </div>
            </m.div>
          </m.div>
        </div>
      </LiquidGlass>
    </LazyMotion>
  )
}
