'use client';

import * as React from 'react';
import { Github, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Practice',
    links: [
      { label: 'The Theory', href: '#theory' },
      { label: 'Choose a Self', href: '#selves' },
      { label: 'The Method', href: '#practice' },
      { label: 'Session Library', href: '#sessions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Arcanea', href: 'https://arcanea.ai' },
      { label: 'Field Reports', href: '#testimonials' },
      { label: 'Pricing', href: '#begin' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Disclaimer', href: '#' },
      { label: 'License (MIT)', href: '#' },
    ],
  },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/frankxai/arcanea-templates', Icon: Github },
  { label: 'Twitter', href: '#', Icon: Twitter },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'YouTube', href: '#', Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 pt-20 pb-10 z-50 relative">
      <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm p-8 sm:p-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr,1fr,1fr,1fr]">
          {/* Brand + newsletter */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center border border-white/[0.12] shadow-lg shadow-violet-500/30">
                <span className="font-display font-black text-white text-base">Q</span>
              </div>
              <span className="font-display font-semibold text-lg tracking-tight text-zinc-100">
                Quantum&nbsp;Jump
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs mb-6">
              A guided practice for visiting the parallel versions of yourself who
              already mastered what you seek — and bringing their genius home.
            </p>

            <form
              className="flex items-center gap-2 max-w-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@parallel.self"
                className="flex-1 rounded-full border border-white/[0.1] bg-black/30 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-violet-400/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to the newsletter"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white transition-transform hover:scale-105"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Nav columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Quantum Jump — an Arcanea experiential template.
          </p>
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.2] transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-zinc-600 font-mono">made with intention · in theta</p>
        </div>
      </div>
    </footer>
  );
}
