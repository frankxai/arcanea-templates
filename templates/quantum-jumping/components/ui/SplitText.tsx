'use client';

import * as React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.025,
  as = 'span'
}: SplitTextProps) {
  const chars = text.split('');
  const Tag = as;

  const easeExpoOut = [0.22, 1, 0.36, 1];

  return (
    <LazyMotion features={domAnimation}>
      <Tag className={className} aria-label={text}>
        {chars.map((char, i) => {
          const MSpan = m.span as any;
          return (
            <MSpan
              key={i}
              aria-hidden="true"
              initial={{ opacity: 0, y: '0.3em', filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.65,
                ease: easeExpoOut,
                delay: delay + i * stagger,
              }}
              style={{
                display: 'inline-block',
                whiteSpace: char === ' ' ? 'pre' : 'normal'
              }}
            >
              {char}
            </MSpan>
          );
        })}
      </Tag>
    </LazyMotion>
  );
}
