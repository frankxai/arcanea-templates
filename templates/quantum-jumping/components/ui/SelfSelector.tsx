'use client';

import * as React from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { Palette, Rocket, Flame, Mountain, type LucideIcon } from 'lucide-react';

interface SelfOption {
  id: string;
  label: string;
  icon: LucideIcon;
  tint: string;
  bring: string;
  body: string;
  signature: string;
}

const SELVES: SelfOption[] = [
  {
    id: 'artist',
    label: 'The Artist',
    icon: Palette,
    tint: '#d946ef',
    bring: 'Unblocked creative flow',
    body: 'In their timeline the work simply pours out. There is no negotiation with the blank page — only the joy of making. You return carrying their permission to create badly, often, and without apology.',
    signature: 'finishes the work',
  },
  {
    id: 'founder',
    label: 'The Founder',
    icon: Rocket,
    tint: '#8b5cf6',
    bring: 'Unreasonable certainty',
    body: 'They are not hoping it works — they know. Risk reads as opportunity, rejection as data. You bring back their nervous-system calm in the face of the unknown, the kind that makes hard decisions feel obvious.',
    signature: 'decides without flinching',
  },
  {
    id: 'athlete',
    label: 'The Athlete',
    icon: Flame,
    tint: '#22d3ee',
    bring: 'Effortless discipline',
    body: 'For this self, showing up is not a battle of willpower — it is identity. The early alarm, the last rep, the cold morning all feel like home. You imprint their relationship with effort, where consistency is simply who you are.',
    signature: 'shows up anyway',
  },
  {
    id: 'unshakeable',
    label: 'The Unshakeable One',
    icon: Mountain,
    tint: '#a78bfa',
    bring: 'Deep inner stillness',
    body: 'Nothing external sets their weather. Praise and criticism pass through without lodging. You return with their groundedness — a quiet center that holds steady whether the day brings a storm or a standing ovation.',
    signature: 'stays whole',
  },
];

export function SelfSelector() {
  const [activeId, setActiveId] = React.useState(SELVES[0].id);
  const active = SELVES.find((s) => s.id === activeId) ?? SELVES[0];
  const ActiveIcon = active.icon;

  return (
    <LazyMotion features={domAnimation}>
      <div className="mx-auto max-w-4xl">
        {/* Segmented selector */}
        <div
          role="tablist"
          aria-label="Choose a parallel self"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {SELVES.map((self) => {
            const isActive = self.id === activeId;
            const Icon = self.icon;
            return (
              <button
                key={self.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="self-panel"
                id={`self-tab-${self.id}`}
                onClick={() => setActiveId(self.id)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <m.span
                    layoutId="self-pill"
                    className="absolute inset-0 rounded-full border border-white/[0.12] bg-white/[0.05]"
                    style={{ boxShadow: `0 0 24px ${self.tint}33` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon
                  className="relative h-4 w-4"
                  style={{ color: isActive ? self.tint : undefined }}
                />
                <span className="relative">{self.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cross-fading panel */}
        <div
          id="self-panel"
          role="tabpanel"
          aria-labelledby={`self-tab-${active.id}`}
          className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-8 sm:p-12 overflow-hidden min-h-[300px]"
        >
          {/* Accent wash */}
          <div
            className="pointer-events-none absolute -top-1/2 -right-1/3 h-[120%] w-[60%] rounded-full blur-[100px] transition-colors duration-500"
            style={{ background: `${active.tint}22` }}
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            <m.div
              key={active.id}
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid gap-8 sm:grid-cols-[auto,1fr] sm:items-start"
            >
              <div
                className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border"
                style={{
                  backgroundColor: `${active.tint}1a`,
                  borderColor: `${active.tint}40`,
                  boxShadow: `0 0 40px ${active.tint}30`,
                }}
              >
                <ActiveIcon className="h-7 w-7" style={{ color: active.tint }} />
              </div>

              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-2"
                  style={{ color: active.tint }}
                >
                  You bring back · {active.bring}
                </p>
                <h3 className="font-editorial italic text-3xl sm:text-4xl text-zinc-100 mb-4">
                  {active.label}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
                  {active.body}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/30 px-3.5 py-1.5 font-mono text-xs text-zinc-400">
                  <span className="text-emerald-400">imprint:</span>
                  <span className="text-zinc-200">&ldquo;{active.signature}&rdquo;</span>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </LazyMotion>
  );
}
