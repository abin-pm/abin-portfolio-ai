'use client';

import Link from 'next/link';
import { SectionWrapper } from '@/components/SectionWrapper';

export function HireMe() {
  return (
    <SectionWrapper id="hire" className="bg-neural-bg px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-indigo">
          <span className="h-px w-6 bg-indigo" />
          Freelance & Remote
        </div>
        <h2 className="mb-4 font-sans text-3xl font-800 tracking-tight md:text-4xl">
          Available for Hire
        </h2>
        <p className="mb-10 max-w-[480px] font-light text-[#94a3b8]">
          Open to freelance contracts, remote roles, and consulting engagements globally.
        </p>

        <div className="mb-12 inline-flex items-center gap-3 rounded-lg border border-indigo/25 bg-indigo/5 px-6 py-4">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[#f1f5f9]">
            <strong>Currently Available</strong> — Open for new projects & remote full-time roles
          </span>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: '💼', name: 'Upwork', desc: 'Senior Full Stack Developer · MERN · React · Node.js' },
            { icon: '🎯', name: 'Fiverr', desc: 'React.js / Next.js Expert · API Development · Cloud Setup' },
            { icon: '🤝', name: 'LinkedIn', desc: 'Open to remote full-time & contract opportunities' },
            { icon: '📧', name: 'Direct Hire', desc: 'Reach out directly — fastest response guaranteed' },
          ].map((card) => (
            <div
              key={card.name}
              className="rounded-xl border border-neural-border bg-neural-surface p-6 text-center transition hover:border-indigo/35 hover:-translate-y-0.5"
            >
              <div className="mb-3 text-2xl">{card.icon}</div>
              <div className="font-sans font-700 text-[#f1f5f9]">{card.name}</div>
              <div className="mt-1 text-sm text-[#94a3b8]">{card.desc}</div>
            </div>
          ))}
        </div>

        <p className="mb-6 font-mono text-sm text-indigo">AI-Accelerated Development</p>
        <p className="mb-6 max-w-[560px] text-[#94a3b8]">
          I leverage the latest AI tools to ship faster without sacrificing code quality — giving you
          enterprise-grade output at freelance speed.
        </p>
        <div className="flex flex-wrap gap-3">
          {['Cursor AI', 'GitHub Copilot', 'Claude', 'OpenAI Codex', 'v0 by Vercel'].map(
            (tool) => (
              <span
                key={tool}
                className="rounded-full border border-violet/30 bg-violet/5 px-4 py-2 font-mono text-sm text-violet"
              >
                {tool}
              </span>
            )
          )}
        </div>

        <div className="mt-12">
          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 rounded-md bg-indigo px-6 py-3 font-sans font-600 text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition hover:opacity-90"
          >
            Hire Me Now →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
