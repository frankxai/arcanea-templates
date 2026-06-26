'use client';

import * as React from 'react';
import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { ArrowUpRight, Github, Menu, X } from 'lucide-react';
import { Magnetic } from './Magnetic';

const NAV = [
  { label: 'The Theory', href: '#theory' },
  { label: 'Choose a Self', href: '#selves' },
  { label: 'The Method', href: '#practice' },
  { label: 'Sessions', href: '#sessions' },
  { label: 'FAQ', href: '#faq' },
];

const SECTION_IDS = ['theory', 'selves', 'practice', 'sessions', 'faq', 'begin'];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 24);
  });

  // Active-section awareness via IntersectionObserver.
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close on Escape, lock scroll while menu open.
  React.useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-white/[0.08] bg-[#09090b]/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-2.5 group" aria-label="Quantum Jump home">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center border border-white/[0.12] shadow-lg shadow-violet-500/30 transition-transform group-hover:scale-105">
              <span className="font-display font-black text-white text-base">Q</span>
            </div>
            <span className="font-display font-semibold text-lg tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Quantum&nbsp;Jump
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium" aria-label="Primary">
            {NAV.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <m.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-violet-400 to-cyan-400"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Magnetic>
              <a
                href="https://github.com/frankxai/arcanea-templates"
                target="_blank"
                rel="noreferrer"
                aria-label="View source on GitHub"
                className="p-2.5 rounded-full border border-white/[0.08] hover:bg-white/[0.05] transition-colors block"
              >
                <Github className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#begin"
                className="hidden sm:flex relative group px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-100 text-black hover:bg-white transition-all items-center gap-1.5 font-display"
              >
                Begin a Jump <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="md:hidden p-2.5 rounded-full border border-white/[0.08] hover:bg-white/[0.05] transition-colors"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </m.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] md:hidden bg-[#09090b]/95 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.08]">
              <span className="font-display font-semibold text-lg tracking-tight text-zinc-100">
                Quantum&nbsp;Jump
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2.5 rounded-full border border-white/[0.08] hover:bg-white/[0.05] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-10 gap-1" aria-label="Mobile">
              {NAV.map((item, i) => (
                <m.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="font-editorial italic text-4xl text-zinc-200 hover:text-white py-3 border-b border-white/[0.05] transition-colors"
                >
                  {item.label}
                </m.a>
              ))}
              <m.a
                href="#begin"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center px-6 py-4 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-violet-500/25"
              >
                Begin Your First Jump
              </m.a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
