'use client';

import Link from 'next/link';
import { SectionWrapper } from '@/components/SectionWrapper';
import { identity } from '@/lib/data';

const platforms = [
  { icon: '💼', name: 'Upwork', desc: 'Full Stack · MERN · React · Node.js' },
  { icon: '🎯', name: 'Fiverr', desc: 'React/Next.js · API Development · Cloud' },
  { icon: '🤝', name: 'LinkedIn', desc: 'Remote Full-Time & Contract', href: identity.linkedin },
  { icon: '📧', name: 'Direct', desc: identity.email, href: `mailto:${identity.email}` },
];

const aiTools = ['Cursor AI', 'GitHub Copilot', 'Claude', 'OpenAI Codex', 'LLM-Assisted Dev'];

export function HireMe() {
  return (
    <SectionWrapper id="hire" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-label mb-4">Freelance & Remote</div>
        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          Hire a Senior React & AI-Native Engineer From India
        </h2>
        <p className="mb-10 max-w-2xl text-muted">
          Looking to hire a freelance full stack developer or AI-native developer from India who
          delivers enterprise-grade output? Abin PM is available for React developer remote roles,
          MERN stack contracts, and LLM integration engagements globally.
        </p>

        {/* Available badge */}
        <div className="mb-12 inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
          <span className="text-ink">
            <strong>Currently Available</strong> — Open for new projects & remote full-time roles
          </span>
        </div>

        {/* Platform cards */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="card p-6 text-center"
            >
              <div className="relative z-10">
                <div className="mb-3 text-2xl">{p.icon}</div>
                <div className="font-sans font-semibold text-ink">{p.name}</div>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-muted no-underline hover:text-sage-dark">
                    {p.desc}
                  </a>
                ) : (
                  <div className="mt-1 text-sm text-muted">{p.desc}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AI tools strip */}
        <p className="mb-3 text-sm text-sage-dark">AI-Accelerated Development</p>
        <p className="mb-6 max-w-lg text-sm text-muted">
          Enterprise-grade output at freelance speed — using AI tools that multiply delivery
          velocity without sacrificing code quality.
        </p>
        <div className="mb-12 flex flex-wrap gap-3">
          {aiTools.map((t) => (
            <span key={t} className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 text-xs text-sage-dark">
              <span className="h-1 w-1 rounded-full bg-sage" />
              {t}
            </span>
          ))}
        </div>

        <Link
          href="/hire-me"
          className="btn-primary"
        >
          View Full Hire Page →
        </Link>
      </div>
    </SectionWrapper>
  );
}
