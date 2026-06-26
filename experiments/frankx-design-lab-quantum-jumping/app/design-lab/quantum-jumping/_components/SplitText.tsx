'use client'

import * as React from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

const easeExpoOut = [0.22, 1, 0.36, 1] as const

// Hoisted once — not recreated per render or per map iteration.
const MSpan = m.span as any

export function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.025,
  as = 'span',
}: SplitTextProps) {
  const Tag = as
  const reduce = useReducedMotion()
  const words = text.split(' ')

  // Running char index so the stagger flows continuously across word boundaries.
  let charIndex = 0

  return (
    <LazyMotion features={domAnimation}>
      <Tag className={className} aria-label={text}>
        {words.map((word, wi) => {
          const chars = word.split('')
          return (
            <span
              key={wi}
              aria-hidden="true"
              style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            >
              {chars.map((char, ci) => {
                const i = charIndex++
                return (
                  <MSpan
                    key={ci}
                    aria-hidden="true"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: '0.4em', filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: reduce ? 0 : 0.65,
                      ease: easeExpoOut,
                      delay: reduce ? 0 : delay + i * stagger,
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </MSpan>
                )
              })}
              {/* Space between words (not after the last word). */}
              {wi < words.length - 1 && (
                <span aria-hidden="true" style={{ display: 'inline-block' }}>
                  &nbsp;
                </span>
              )}
            </span>
          )
        })}
      </Tag>
    </LazyMotion>
  )
}
