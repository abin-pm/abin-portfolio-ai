'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { stats, aiTickerRow } from '@/lib/data';

const NeuralBackground = dynamic(
  () => import('@/components/NeuralBackground').then((m) => m.NeuralBackground),
  { ssr: false, loading: () => null }
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-20 md:px-10">
      <NeuralBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1100px]">

        {/* Badges */}
        <motion.div {...fadeUp(0)} className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.08)] px-4 py-1.5 font-mono text-xs text-[#6366f1]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for Hire — Freelance & Remote
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(167,139,250,0.4)] bg-[rgba(167,139,250,0.08)] px-4 py-1.5 font-mono text-xs text-[#a78bfa] animate-ai-pulse">
            🤖 AI-Native Engineer
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mb-6 font-sans text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">
            Senior React Developer &<br />
            AI-Native Engineer for Hire
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.2)}
          className="mb-10 max-w-2xl text-base leading-relaxed text-[#94a3b8] md:text-lg"
        >
          Freelance Full Stack Developer from India — 9+ years building enterprise-grade React,
          Next.js & Node.js platforms for IBM, Abercrombie & Fitch, and National Grid. I use
          Cursor AI, GitHub Copilot & Claude daily to ship faster without sacrificing
          enterprise-grade quality.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="mb-14 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-indigo px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition hover:opacity-90"
          >
            View Projects →
          </Link>
          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 rounded-md border border-[rgba(99,102,241,0.35)] bg-transparent px-7 py-3.5 font-sans text-sm font-semibold text-[#f1f5f9] transition hover:border-[rgba(99,102,241,0.6)] hover:bg-[rgba(99,102,241,0.06)]"
          >
            Hire Me Now
          </Link>
          <Link
            href="/ai-engineer"
            className="inline-flex items-center gap-2 rounded-md border border-[rgba(167,139,250,0.45)] bg-transparent px-7 py-3.5 font-sans text-sm font-semibold text-[#a78bfa] transition hover:shadow-[0_0_25px_rgba(167,139,250,0.2)]"
          >
            AI Engineer ↗
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.4)}
          className="mb-8 grid grid-cols-2 gap-6 border-t border-[rgba(99,102,241,0.12)] pt-10 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-5">
              <div className="font-sans text-3xl font-bold text-[#f1f5f9]">{stat.value}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-[#475569]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* AI micro-strip */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#475569]">
          <span className="mr-1 text-[#475569]">AI stack:</span>
          {aiTickerRow.map((tool) => (
            <span key={tool} className="flex items-center gap-1.5 text-[#94a3b8]">
              <span className="h-1 w-1 rounded-full bg-[#a78bfa]" />
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
