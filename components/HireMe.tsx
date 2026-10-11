'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { identity } from '@/lib/data';

const channels = [
  { icon: '🤝', name: 'LinkedIn', desc: 'Remote, contract and relocation roles', href: identity.linkedin, external: true },
  { icon: '📧', name: 'Email', desc: identity.email, href: `mailto:${identity.email}`, external: false },
];

const engagements = ['Freelance contract', 'Part-time remote', 'Full-time remote', 'Relocation abroad'];

export function HireMe() {
  return (
    <SectionWrapper id="hire" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-label mb-4">Freelance, remote or relocation</div>
        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          Hire a senior full stack developer for freelance or remote work
        </h2>
        <p className="mb-10 max-w-2xl text-muted">
          I take freelance React and Next.js contracts, Node.js and MERN projects, and remote
          full-time roles. I&apos;ve worked with teams in the US, the UK, France and Dubai, and I&apos;m
          open to relocating for the right job, from the US and Europe to Dubai, Africa or Asia-Pacific.{' '}
          <Link href="/remote-developer-relocation" className="text-sage-dark underline-offset-4 hover:underline">Where I can work</Link>.
        </p>

        {/* Available badge */}
        <div className="mb-10 inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
          <span className="text-ink">
            <strong>Available now</strong> for new projects and roles
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
