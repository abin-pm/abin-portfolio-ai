'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { stats } from '@/lib/data';

const NeuralBackground = dynamic(
  () => import('@/components/NeuralBackground').then((m) => m.NeuralBackground),
  { ssr: false, loading: () => null }
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const KPI_STRIP = [
  { metric: '96h → 2h',  label: 'Ops cycle cut for Paragon Energy (200k+ smart meters)' },
  { metric: 'Fortune 500', label: 'IBM, Abercrombie & Fitch, National Grid' },
  { metric: '3–5×',      label: 'Faster delivery with AI-native workflow' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-20 md:px-10">
      <NeuralBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1100px]">

        {/* Availability badges */}
        <motion.div {...fadeUp(0)} className="mb-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,211,238,0.35)] bg-[rgba(34,211,238,0.06)] px-4 py-1.5 font-mono text-xs text-[#22d3ee]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available now — open to new projects
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(167,139,250,0.35)] bg-[rgba(167,139,250,0.07)] px-4 py-1.5 font-mono text-xs text-[#a78bfa]">
            🤖 AI-Native Engineer
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mb-5 font-sans text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">
            Senior React Developer &amp;<br />
            AI-Native Engineer for Hire
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.15)}
          className="mb-8 max-w-2xl text-base leading-relaxed text-[#94a3b8] md:text-lg"
        >
          Freelance Full Stack Developer from India — 9+ years building enterprise-grade React,
          Next.js &amp; Node.js platforms for IBM, Abercrombie &amp; Fitch, and National Grid.
          Using Cursor AI, GitHub Copilot &amp; Claude daily to ship faster without sacrificing quality.
        </motion.p>

        {/* ── Primary CTA + secondary ── */}
        <motion.div {...fadeUp(0.25)} className="mb-10 flex flex-wrap items-center gap-4">
          {/* PRIMARY — dominant, highest visual weight */}
          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 rounded-xl bg-[#6366f1] px-8 py-4 font-sans text-base font-bold text-white shadow-[0_0_40px_rgba(99,102,241,0.4)] transition hover:opacity-90 hover:shadow-[0_0_56px_rgba(99,102,241,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]"
            aria-label="Hire Abin PM — go to hire page"
          >
            Hire Me Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* SECONDARY — ghost */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-[rgba(99,102,241,0.35)] bg-transparent px-7 py-3.5 font-sans text-sm font-semibold text-[#f1f5f9] transition hover:border-[rgba(99,102,241,0.6)] hover:bg-[rgba(99,102,241,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]"
          >
            View Case Studies →
          </Link>

          {/* TERTIARY — text link only */}
          <Link
            href="/ai-engineer"
            className="font-mono text-sm text-[#a78bfa] underline-offset-4 hover:underline"
          >
            AI Engineer page ↗
          </Link>
        </motion.div>

        {/* ── KPI outcome strip ── */}
        <motion.div
          {...fadeUp(0.32)}
          className="mb-10 grid gap-3 sm:grid-cols-3"
          aria-label="Key outcomes"
        >
          {KPI_STRIP.map((k) => (
            <div
              key={k.metric}
              className="flex items-start gap-3 rounded-lg border border-[rgba(99,102,241,0.1)] bg-[rgba(99,102,241,0.04)] px-4 py-3"
            >
              <span className="mt-0.5 shrink-0 font-sans text-lg font-bold text-[#6366f1]">
                {k.metric}
              </span>
              <span className="font-mono text-[11px] leading-relaxed text-[#475569]">
                {k.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          {...fadeUp(0.4)}
          className="grid grid-cols-2 gap-4 border-t border-[rgba(99,102,241,0.1)] pt-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="card-stat rounded-xl p-5">
              <div className="font-sans text-3xl font-bold text-[#f1f5f9]">{stat.value}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-[#475569]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
