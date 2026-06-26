'use client'

import * as React from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

interface QA {
  q: string
  a: string
}

interface FAQProps {
  items: QA[]
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <LazyMotion features={domAnimation}>
      <div className="mx-auto max-w-3xl divide-y divide-white/[0.07] rounded-3xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          const panelId = `qj-faq-panel-${i}`
          const buttonId = `qj-faq-button-${i}`
          return (
            <div key={i}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="qj-font-display font-medium text-base sm:text-lg text-zinc-100">{item.q}</span>
                  <m.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className={`shrink-0 grid place-items-center h-8 w-8 rounded-full border transition-colors ${
                      isOpen
                        ? 'border-violet-400/40 bg-violet-500/10 text-violet-200'
                        : 'border-white/[0.1] text-zinc-400'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </m.span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 pr-14 text-sm leading-relaxed text-zinc-400">{item.a}</p>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </LazyMotion>
  )
}
