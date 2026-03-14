'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { stats, identity, aiTickerRow } from '@/lib/data';

const NeuralBackground = dynamic(
  () => import('@/components/NeuralBackground').then((m) => m.NeuralBackground),
  { ssr: false, loading: () => null }
);

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-20 md:px-10">
      <NeuralBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        {/* Dual badge row */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo/30 bg-indigo/10 px-4 py-1.5 font-mono text-xs tracking-wide text-indigo">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Hire — Freelance & Remote
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/40 bg-violet/10 px-4 py-1.5 font-mono text-xs tracking-wide text-violet animate-ai-pulse">
            🤖 AI-Native Engineer
          </span>
        </div>

        {/* H1 — gradient animation */}
        <h1
          className="mb-6 font-sans text-5xl font-800 leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
          style={{
            background: 'linear-gradient(90deg, #6366f1, #a78bfa, #22d3ee, #6366f1)',
            backgroundSize: '300% 300%',
            animation: 'gradient 6s ease infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Senior React Developer &<br />
          AI-Native Engineer for Hire
        </h1>

        <p className="mb-12 max-w-[540px] text-base font-light leading-relaxed text-[#94a3b8] md:text-lg">
          Freelance Full Stack Developer & AI-Native Engineer from India — 9+ years building
          enterprise React, Next.js & Node.js platforms for IBM, Abercrombie & Fitch, and National
          Grid. I use Cursor AI, GitHub Copilot & Claude daily to ship enterprise-grade code faster
          than traditional development cycles.
        </p>

        {/* CTA row */}
        <div className="mb-16 flex flex-wrap gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-md bg-indigo px-7 py-3.5 font-sans font-700 text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition hover:opacity-90"
          >
            View Projects →
          </Link>
          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 rounded-md border border-neural-border bg-transparent px-7 py-3.5 font-sans font-600 text-[#f1f5f9] transition hover:border-indigo/35"
          >
            Hire Me Now
          </Link>
          <Link
            href="/ai-engineer"
            className="inline-flex items-center gap-2 rounded-md border border-violet/50 bg-transparent px-7 py-3.5 font-sans font-600 text-violet transition hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]"
          >
            AI Engineer →
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-6 border-t border-neural-border pt-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-sans text-3xl font-800 text-[#f1f5f9]">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-[#475569]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* AI stack micro-strip */}
        <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-sm text-[#94a3b8]">
          <span className="text-[#475569]">AI stack:</span>
          {aiTickerRow.map((tool) => (
            <span key={tool} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-violet" />
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
