'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/#skills',     label: 'Skills' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects',   label: 'Projects' },
  { href: '/#faq',        label: 'FAQ' },
  { href: '/hire-me',     label: 'Hire Me', cta: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-10 ${
          scrolled
            ? 'border-b border-[rgba(99,102,241,0.12)] bg-[#080810]/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <Link
          href="/"
          className="font-sans text-lg font-bold text-[#f1f5f9] no-underline"
          aria-label="Abin PM — Home"
        >
          abin<span className="text-violet">.</span>dev
        </Link>

        {/* Desktop links */}
        <ul className="hidden list-none items-center gap-1 md:flex" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={
                  l.cta
                    ? 'rounded-md bg-indigo px-5 py-2 font-mono text-xs font-medium text-white no-underline transition hover:opacity-90'
                    : 'rounded border border-transparent px-3 py-2 font-mono text-xs text-[#94a3b8] no-underline transition hover:border-[rgba(99,102,241,0.35)] hover:bg-[rgba(99,102,241,0.05)] hover:text-[#f1f5f9]'
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded p-2 text-[#94a3b8] transition hover:text-[#f1f5f9] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-40 w-72 border-l border-[rgba(99,102,241,0.12)] bg-[#080810]/98 px-8 pt-24 pb-10 backdrop-blur-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <ul className="flex list-none flex-col gap-4" role="list">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={
                      l.cta
                        ? 'block rounded-md bg-indigo py-2.5 text-center font-mono text-sm font-medium text-white no-underline transition hover:opacity-90'
                        : 'block py-2 font-mono text-sm text-[#94a3b8] no-underline transition hover:text-[#f1f5f9]'
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  );
}
