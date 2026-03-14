'use client';

import Link from 'next/link';
import { identity } from '@/lib/data';

const seoLinks = [
  { label: 'React.js Developer India', href: '/#skills' },
  { label: 'MERN Stack Expert', href: '/#skills' },
  { label: 'AI-Native Developer India', href: '/ai-engineer' },
  { label: 'LLM Integration Developer', href: '/ai-engineer' },
  { label: 'Freelance Full Stack Developer', href: '/hire-me' },
  { label: 'Hire React Developer', href: '/hire-me' },
  { label: 'AI Engineer for Hire', href: '/ai-engineer' },
  { label: 'GenAI Developer India', href: '/ai-engineer' },
];

export function Footer() {
  return (
    <footer className="border-t border-neural-border bg-neural-bg px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-6">
        <div className="font-mono text-sm text-[#475569]">
          © {new Date().getFullYear()} Abin PM · Senior Full Stack Developer & AI-Native Engineer ·
          Kochi, Kerala, India
        </div>
        <div className="flex flex-wrap justify-center gap-4 font-mono text-xs text-[#475569]">
          {seoLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#475569] no-underline transition hover:text-indigo"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
