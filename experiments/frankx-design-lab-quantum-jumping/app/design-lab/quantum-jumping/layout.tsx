import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Quantum Jumping — Meet the You Who Already Made It | FrankX.AI Design Lab',
  description:
    'A premium, cinematic experiment page for Quantum Jumping: a guided meditative practice for visiting the parallel versions of yourself who already mastered what you seek. Animated portal, interactive self-selector, four-step method, and a self-revealing session console — built with Framer Motion.',
  keywords: [
    'quantum jumping',
    'consciousness technology',
    'guided meditation',
    'parallel selves',
    'premium landing page',
    'framer motion design',
    'glassmorphism',
    'design lab experiment',
    'frankx design lab',
  ],
  path: '/design-lab/quantum-jumping',
})

export default function QuantumJumpingLayout({ children }: { children: React.ReactNode }) {
  return children
}
