'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { identity } from '@/lib/data';

const channels = [
  { icon: '🤝', name: 'LinkedIn', desc: 'Remote full-time & contract roles', href: identity.linkedin, external: true },
  { icon: '📧', name: 'Email', desc: identity.email, href: `mailto:${identity.email}`, external: false },
];

const engagements = ['Freelance contract', 'Part-time remote', 'Full-time remote'];

export function HireMe() {
  return (
    <SectionWrapper id="hire" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-label mb-4">Freelance &amp; Remote</div>
        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          Hire a Senior Full Stack &amp; AI Developer from India
        </h2>
        <p className="mb-10 max-w-2xl text-muted">
          Looking for a freelance full stack developer who delivers enterprise-grade output? Abin PM
          is available for React and Next.js contracts, MERN stack projects, LLM integrations and
          remote full-time roles — working with teams in the US, UK and Europe.
        </p>

        {/* Available badge */}
        <div className="mb-10 inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
          <span className="text-ink">
            <strong>Currently available</strong> — open for new projects &amp; remote roles
          </span>
        </div>

        <div className="mb-10 flex flex-wrap gap-3" aria-label="Ways to work together">
          {engagements.map((e) => (
            <span key={e} className="tag-pill !px-4 !py-1.5 !text-sm">{e}</span>
          ))}
        </div>

        {/* Contact channels */}
        <div className="mb-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="card group flex items-center gap-4 p-6 no-underline"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-light text-xl" aria-hidden>
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-ink transition group-hover:text-sage-dark">{c.name}</span>
                <span className="block truncate text-sm text-muted">{c.desc}</span>
              </span>
            </a>
          ))}
        </div>

        <Link href="/hire-me" className="btn-primary">
          How to hire me <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    </SectionWrapper>
  );
}
