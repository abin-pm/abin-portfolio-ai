'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';

type Filter = 'All' | 'Enterprise' | 'SaaS' | 'UK' | 'USA';
const FILTERS: Filter[] = ['All', 'Enterprise', 'SaaS', 'UK', 'USA'];

function matches(category: string, flag: string, filter: Filter): boolean {
  if (filter === 'All') return true;
  if (filter === 'Enterprise') return category.toLowerCase().includes('enterprise') || category.toLowerCase().includes('energy');
  if (filter === 'SaaS') return category.toLowerCase().includes('saas') || category.toLowerCase().includes('social') || category.toLowerCase().includes('events');
  if (filter === 'UK') return flag === '🇬🇧';
  if (filter === 'USA') return flag === '🇺🇸';
  return true;
}

export function ProjectsClient() {
  const [filter, setFilter] = useState<Filter>('All');
  const filtered = projects.filter((p) => matches(p.category, p.flag, filter));

  return (
    <section className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
      <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-[#6366f1]">
        <span className="h-px w-6 bg-[#6366f1]" />
        Portfolio
      </div>
      <h1 className="mb-4 font-sans text-4xl font-bold tracking-tight text-[#f1f5f9] md:text-5xl">
        Projects
      </h1>
      <p className="mb-10 max-w-xl text-[#94a3b8]">
        6 production platforms across retail, energy, events, civic tech, and SaaS — shipped for
        clients in the USA, UK, and India.
      </p>

      {/* Filter tabs */}
      <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${
              filter === f
                ? 'border-[#6366f1] bg-[rgba(99,102,241,0.12)] text-[#6366f1]'
                : 'border-[rgba(99,102,241,0.15)] text-[#94a3b8] hover:border-[rgba(99,102,241,0.35)] hover:text-[#f1f5f9]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {filtered.map((project) => (
            <article
              key={project.id}
              className="relative rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] p-8 transition hover:border-[rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]"
            >
              {project.aiAssisted && (
                <span className="absolute right-4 top-4 rounded-full border border-[rgba(167,139,250,0.4)] bg-[rgba(167,139,250,0.1)] px-3 py-1 font-mono text-[10px] text-[#a78bfa]">
                  🤖 AI-Assisted
                </span>
              )}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="text-xl">{project.flag}</span>
                <span className="font-mono text-xs text-[#6366f1]">{project.client}</span>
                <span className="rounded bg-[rgba(99,102,241,0.1)] px-2 py-0.5 font-mono text-[10px] text-[#475569]">
                  {project.category}
                </span>
              </div>
              <h2 className="mb-3 font-sans text-xl font-bold text-[#f1f5f9]">{project.title}</h2>
              <p className="mb-5 text-sm leading-relaxed text-[#94a3b8]">{project.description}</p>
              <ul className="mb-5 space-y-1.5">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#22d3ee]">
                    <span className="mt-px shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {project.aiNote && (
                <p className="mb-4 font-mono text-xs text-[#a78bfa]">{project.aiNote}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-16 text-center">
        <Link
          href="/#contact"
          className="inline-flex rounded-xl bg-[#6366f1] px-8 py-4 font-sans font-semibold text-white no-underline shadow-[0_0_30px_rgba(99,102,241,0.25)] transition hover:opacity-90"
        >
          Discuss a project →
        </Link>
      </div>
    </section>
  );
}
