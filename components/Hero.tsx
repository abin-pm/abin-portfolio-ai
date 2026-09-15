'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
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

function HeroPortrait({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, x: 24 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      className={`relative mx-auto w-full max-w-[360px] sm:max-w-[420px] xl:max-w-[460px] ${className}`}
    >
      <div className="absolute inset-[8%] rounded-full bg-indigo-500/25 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-indigo-400/20 bg-slate-950/30 shadow-[0_0_70px_rgba(99,102,241,0.28)]">
        <Image
          src="/images/abin-hero.png"
          alt="Abin P M, software developer"
          width={1254}
          height={1254}
          priority
          className="h-auto w-full"
        />
      </div>
      <div className="absolute -bottom-4 -left-3 rounded-xl border border-cyan-300/20 bg-slate-950/80 px-4 py-3 font-mono text-xs text-cyan-300 shadow-xl backdrop-blur sm:-left-5">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
        Building with AI
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-20 md:px-10">
      <NeuralBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] xl:items-start">
        <div>

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
          Freelance Full Stack Developer from India — 10+ years building enterprise-grade React,
          Next.js &amp; Node.js platforms for IBM, Abercrombie &amp; Fitch, and National Grid.
          Using Cursor AI, GitHub Copilot &amp; Claude daily to ship faster without sacrificing quality.
        </motion.p>

        <HeroPortrait className="mb-12 xl:hidden" />

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

        </div>

        <HeroPortrait className="hidden xl:block" />
        </div>

        <section className="mt-14 border-t border-[rgba(99,102,241,0.14)] pt-8 md:mt-16 md:pt-10" aria-label="Professional outcomes">
          <motion.div
            {...fadeUp(0.32)}
            className="grid gap-3 md:grid-cols-3"
            aria-label="Key outcomes"
          >
            {KPI_STRIP.map((k) => (
              <div
                key={k.metric}
                className="flex min-h-[88px] items-center gap-4 rounded-xl border border-[rgba(99,102,241,0.1)] bg-[rgba(99,102,241,0.04)] px-5 py-4"
              >
                <span className="shrink-0 font-sans text-xl font-bold text-[#6366f1]">
                  {k.metric}
                </span>
                <span className="font-mono text-xs leading-relaxed text-[#94a3b8]">
                  {k.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="card-stat flex min-h-[132px] flex-col justify-center rounded-xl p-5 md:p-6">
                <div className="font-sans text-3xl font-bold text-[#f1f5f9]">{stat.value}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-[#475569]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

      </div>
    </section>
  );
}
