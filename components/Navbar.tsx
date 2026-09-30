'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const links = [
  { href: '/',            label: 'Home' },
  { href: '/skills',      label: 'Skills' },
  { href: '/experience',  label: 'Experience' },
  { href: '/projects',    label: 'Projects' },
  { href: '/blog',        label: 'Blog' },
  { href: '/faq',         label: 'FAQ' },
];

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname() ?? '/';
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
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 md:px-10 ${
          scrolled ? 'border-b border-border bg-cream/95' : 'border-b border-transparent bg-cream'
        }`}
      >
        <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Abin PM — Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-sage/40 font-serif text-lg text-sage">
            A
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-ink">Abin PM</span>
            <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-subtle">Full Stack &amp; AI Engineer</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden list-none items-center gap-7 md:flex" role="list">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`border-b pb-1 text-xs font-medium uppercase tracking-[0.12em] no-underline transition ${
                    active
                      ? 'border-sage text-ink'
                      : 'border-transparent text-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/hire-me" className="btn-primary hidden !py-2.5 md:inline-flex">
          Hire Me <ArrowRight size={14} aria-hidden />
        </Link>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded p-2 text-muted transition hover:text-ink md:hidden"
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
            className="fixed inset-y-0 right-0 z-40 w-72 border-l border-border bg-cream px-8 pt-24 pb-10 md:hidden"
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
                    className={`block py-2 text-sm font-medium uppercase tracking-[0.12em] no-underline transition ${
                      isActive(pathname, l.href) ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/hire-me" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                  Hire Me <ArrowRight size={14} aria-hidden />
                </Link>
              </li>
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
            className="fixed inset-0 z-30 bg-ink/20 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  );
}
