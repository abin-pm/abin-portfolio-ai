'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/hire-me', label: 'Hire Me' },
  { href: '/ai-engineer', label: 'AI Engineer' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact', cta: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-4 px-6 py-5 transition-all duration-300 md:px-10 ${
        scrolled
          ? 'border-b border-neural-border bg-[#080810]/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Link
        href="/"
        className="font-sans text-lg font-800 text-[#f1f5f9] no-underline transition hover:text-indigo"
      >
        abin<span className="text-indigo">.</span>pm
      </Link>
      <ul className="flex list-none gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-mono text-xs uppercase tracking-wider no-underline transition
                ${link.cta
                  ? 'rounded bg-indigo px-5 py-2 font-medium text-white hover:opacity-90'
                  : 'rounded border border-transparent px-2.5 py-2 text-[#94a3b8] hover:border-indigo/35 hover:bg-indigo/5 hover:text-indigo'
                }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
