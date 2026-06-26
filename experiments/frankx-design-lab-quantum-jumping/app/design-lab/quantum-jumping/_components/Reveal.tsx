'use client'

import * as React from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  staggerChildren?: number
}

const easeExpoOut = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  yOffset = 20,
  staggerChildren = 0,
}: RevealProps) {
  const reduce = useReducedMotion()

  if (staggerChildren > 0) {
    const parentVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: reduce ? 0 : staggerChildren,
          delayChildren: reduce ? 0 : delay,
        },
      },
    }

    const childVariants = {
      hidden: reduce ? { opacity: 0 } : { opacity: 0, y: yOffset, filter: 'blur(10px)' },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: reduce ? 0 : duration, ease: easeExpoOut },
      },
    }

    return (
      <LazyMotion features={domAnimation}>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={parentVariants}
          className={className}
        >
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child
            return <m.div variants={childVariants}>{child}</m.div>
          })}
        </m.div>
      </LazyMotion>
    )
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: yOffset, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: reduce ? 0 : duration, ease: easeExpoOut, delay: reduce ? 0 : delay }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
