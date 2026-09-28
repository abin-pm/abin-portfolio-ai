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
    <section className="mx-auto max-w-[1100px] px-6 pt-32 pb-20 md:px-10">
      <div className="section-label mb-4">Portfolio</div>
      <h1 className="mb-4 text-4xl text-ink md:text-5xl">
        Projects
      </h1>
      <p className="mb-10 max-w-xl text-muted">
        {projects.length} production platforms across retail, energy, events, civic tech, and SaaS — shipped for
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
            className={`rounded-full border px-4 py-1.5 text-xs transition ${
              filter === f
                ? 'border-sage bg-sage-light text-sage-dark'
                : 'border-border text-muted hover:border-border-strong hover:text-ink'
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
              className={`card relative flex flex-col ${project.aiAssisted ? 'card-violet' : ''}`}
            >
              {/* Flat cover block — stands in for a project screenshot */}
              <div className="flex h-40 flex-col justify-between border-b border-border bg-sage-light p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sage-dark">
                    {project.category}
                  </span>
                  {project.aiAssisted && (
                    <span className="rounded-full border border-sage-border bg-surface px-3 py-1 text-[10px] text-sage-dark">
                      🤖 AI-Assisted
                    </span>
                  )}
                </div>
                <div className="flex items-end justify-between gap-3">
                  <span className="font-serif text-3xl text-ink">{project.client}</span>
                  <span className="text-2xl" aria-hidden>{project.flag}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
              {(project.period || project.company) && (
                <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-subtle">
                  {[project.company, project.period].filter(Boolean).join(' · ')}
                </p>
              )}
              <h2 className="mb-3 text-2xl text-ink">{project.title}</h2>
              <p className="mb-5 text-sm leading-relaxed text-muted">{project.description}</p>
              <ul className="mb-5 space-y-1.5">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-sage-dark">
                    <span className="mt-px shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {project.aiNote && (
                <p className="mb-4 text-xs text-sage-dark">{project.aiNote}</p>
              )}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink no-underline transition hover:text-sage-dark"
                aria-label={`See ${project.client} case study — ${project.title}`}
              >
                See {project.client} case study <span aria-hidden>→</span>
              </Link>
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-16 text-center">
        <Link
          href="/#contact"
          className="btn-primary"
        >
          Discuss a project →
        </Link>
      </div>
    </section>
  );
}
