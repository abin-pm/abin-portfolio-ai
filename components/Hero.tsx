'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { stats } from '@/lib/data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const KPI_STRIP = [
  { metric: '96h → 2h',    label: 'Ops cycle cut for Paragon Energy (200k+ smart meters)' },
  { metric: 'Global brands', label: "L'Oréal, Abercrombie & Fitch, National Grid" },
  { metric: '1000s',       label: "of L'Oréal retail users on analytics I build" },
];

// Fade the photo's outer edge into the page: image optimisation shifts its
// off-white background a shade, which otherwise shows as a faint rectangle.
const EDGE = 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent), linear-gradient(to bottom, transparent, #000 5%, #000 95%, transparent)';
const PHOTO_EDGE_FADE = {
  WebkitMaskImage: EDGE,
  WebkitMaskComposite: 'source-in',
  maskImage: EDGE,
  maskComposite: 'intersect',
} as const;

// Dark mode (sage page): the dark photo cropped just outside its glowing outer ring
// (centre ≈ 49.5% / 49.4%, radius ≈ 93% of half the width), so it reads as a round
// medallion instead of a dark square.
const RING = 'radial-gradient(circle closest-side at 49.5% 49.4%, #000 93.3%, transparent 94.1%)';
const PHOTO_RING = { WebkitMaskImage: RING, maskImage: RING } as const;

const PHOTO_SIZES = '(min-width: 1280px) 520px, (min-width: 640px) 460px, 380px';

function HeroPortrait({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, x: 24 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      className={`relative mx-auto w-full max-w-[380px] sm:max-w-[460px] xl:max-w-[520px] ${className}`}
    >
      {/* Light: photo on a cream ground matched to the page, edges faded. Dark: the dark
          photo, cropped to its outer ring. Swapped by CSS so SSR never needs the theme. */}
      <Image
        src="/images/abin-hero.png"
        alt="Abin PM, senior full stack and AI developer in Kochi, Kerala"
        width={1254}
        height={1254}
        priority
        sizes={PHOTO_SIZES}
        className="h-auto w-full dark:hidden"
        style={PHOTO_EDGE_FADE}
      />
      <Image
        src="/images/abin-hero-dark.png"
        alt="Abin PM, senior full stack and AI developer in Kochi, Kerala"
        width={1254}
        height={1254}
        loading="eager"
        sizes={PHOTO_SIZES}
        className="hidden h-auto w-full dark:block"
        style={PHOTO_RING}
      />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 md:px-10">
      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] xl:items-center">
        <div>

        {/* Availability badges */}
        <motion.div {...fadeUp(0)} className="mb-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-ink">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
            Available now — open to new projects
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-sage-border bg-sage-light px-4 py-1.5 text-xs font-medium text-sage-dark">
            📍 Kochi, Kerala · Remote worldwide
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mb-6 text-4xl leading-[1.08] text-ink sm:text-5xl md:text-6xl xl:text-[3.4rem]"
        >
          Senior Full Stack &amp;<br />
          AI Developer for Hire
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.15)}
          className="mb-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          Freelance React, Next.js &amp; Node.js developer with 10+ years building enterprise
          platforms for L&apos;Oréal, Abercrombie &amp; Fitch and National Grid — now at IBM.
          AI-assisted delivery, production-grade engineering.
        </motion.p>

        {/* ── Primary CTA + secondary ── */}
        <motion.div {...fadeUp(0.25)} className="mb-10 flex flex-wrap items-center gap-4">
          <Link href="/hire-me" className="btn-primary" aria-label="Hire Abin PM — go to hire page">
            Hire Me Now <ArrowRight size={14} aria-hidden />
          </Link>

          <Link href="/projects" className="btn-secondary">
            View Case Studies <ArrowRight size={14} aria-hidden />
          </Link>

          <Link
            href="/ai-engineer"
            className="text-sm font-medium text-sage-dark underline-offset-4 hover:underline"
          >
            AI Engineer page ↗
          </Link>
        </motion.div>

        <HeroPortrait className="mb-4 xl:hidden" />

        </div>

        <HeroPortrait className="hidden xl:block" />
        </div>

        <section className="mt-14 border-t border-border pt-8 md:mt-16 md:pt-10" aria-label="Professional outcomes">
          <motion.div
            {...fadeUp(0.32)}
            className="grid gap-3 md:grid-cols-3"
            aria-label="Key outcomes"
          >
            {KPI_STRIP.map((k) => (
              <div
                key={k.metric}
                className="flex min-h-[88px] items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4"
              >
                <span className="shrink-0 font-serif text-2xl text-sage">
                  {k.metric}
                </span>
                <span className="text-xs leading-relaxed text-muted">
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
              <div key={stat.label} className="card-stat flex min-h-[132px] flex-col items-center justify-center p-5 text-center md:p-6">
                <div className="font-serif text-4xl text-ink">{stat.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
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
