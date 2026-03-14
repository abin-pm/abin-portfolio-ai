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
        <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight text-[#f1f5f9] md:text-4xl">
          Hire a Senior React & AI-Native Engineer From India
        </h2>
        <p className="mb-10 max-w-2xl text-[#94a3b8]">
          Looking to hire a freelance full stack developer or AI-native developer from India who
          delivers enterprise-grade output? Abin PM is available for React developer remote roles,
          MERN stack contracts, and LLM integration engagements globally.
        </p>

        {/* Available badge */}
        <div className="mb-12 inline-flex items-center gap-3 rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.05)] px-6 py-4">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[#f1f5f9]">
            <strong>Currently Available</strong> — Open for new projects & remote full-time roles
          </span>
        </div>

        {/* Platform cards */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="glass rounded-xl p-6 text-center transition hover:border-[rgba(99,102,241,0.35)] hover:-translate-y-0.5"
            >
              <div className="mb-3 text-2xl">{p.icon}</div>
              <div className="font-sans font-semibold text-[#f1f5f9]">{p.name}</div>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-[#94a3b8] no-underline hover:text-[#6366f1]">
                  {p.desc}
                </a>
              ) : (
                <div className="mt-1 text-sm text-[#94a3b8]">{p.desc}</div>
              )}
            </div>
          ))}
        </div>

        {/* AI tools strip */}
        <p className="mb-3 font-mono text-sm text-[#6366f1]">AI-Accelerated Development</p>
        <p className="mb-6 max-w-lg text-sm text-[#94a3b8]">
          Enterprise-grade output at freelance speed — using AI tools that multiply delivery
          velocity without sacrificing code quality.
        </p>
        <div className="mb-12 flex flex-wrap gap-3">
          {aiTools.map((t) => (
            <span key={t} className="inline-flex items-center gap-2 rounded-full border border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.06)] px-4 py-1.5 font-mono text-xs text-[#a78bfa]">
              <span className="h-1 w-1 rounded-full bg-[#a78bfa]" />
              {t}
            </span>
          ))}
        </div>

        <Link
          href="/hire-me"
          className="inline-flex items-center gap-2 rounded-md bg-indigo px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition hover:opacity-90"
        >
          View Full Hire Page →
        </Link>
      </div>
    </SectionWrapper>
  );
}
