'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { aiTools, aiStats } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function AIEngineer() {
  return (
    <SectionWrapper
      id="ai-engineer"
      className="border-y border-[rgba(167,139,250,0.15)] bg-[rgba(167,139,250,0.03)] px-6 py-32 md:px-10"
    >
      <div className="mx-auto max-w-[1100px]">
        <span className="mb-4 inline-block rounded-full border border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.1)] px-3 py-1 font-mono text-xs text-[#a78bfa]">
          Core Differentiator
        </span>

        <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight text-[#f1f5f9] md:text-4xl">
          AI-Native Development
        </h2>
        <p className="mb-12 text-lg text-[#94a3b8]">
          Not just a developer who uses AI — an engineer who makes AI production-ready.
        </p>

        {/* Narrative */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[rgba(167,139,250,0.15)] bg-[rgba(167,139,250,0.04)] p-7">
            <h3 className="mb-3 font-sans text-base font-semibold text-[#a78bfa]">Adopted Early, Used Daily</h3>
            <p className="text-sm leading-relaxed text-[#94a3b8]">
              While most developers were still experimenting, I integrated Cursor AI, GitHub Copilot,
              and Claude into enterprise production workflows at IBM from day one in 2024. These are
              not productivity shortcuts — they are core instruments I wield with senior engineering
              judgment to multiply output without compromising standards.
            </p>
          </div>
          <div className="rounded-xl border border-[rgba(167,139,250,0.15)] bg-[rgba(167,139,250,0.04)] p-7">
            <h3 className="mb-3 font-sans text-base font-semibold text-[#a78bfa]">The Rare Skill: GenAI Stabilization</h3>
            <p className="text-sm leading-relaxed text-[#94a3b8]">
              On the National Grid MDS Consolidation project at IBM, I took a GenAI-generated
              codebase — full of discrepancies, architectural drift, and reliability gaps — and
              hardened it to Fortune 500 production standards. That means reviewing AI output
              critically, correcting misaligned logic, enforcing enterprise coding standards, and
              ensuring every component is maintainable and production-reliable. Most engineers
              cannot do this. I do it daily.
            </p>
          </div>
          <div className="rounded-xl border border-[rgba(167,139,250,0.15)] bg-[rgba(167,139,250,0.04)] p-7">
            <h3 className="mb-3 font-sans text-base font-semibold text-[#a78bfa]">What This Means for Your Project</h3>
            <p className="text-sm leading-relaxed text-[#94a3b8]">
              You get the speed of a team, the accountability of a single senior engineer, and
              output that does not need a second pass. Whether I am building a feature from scratch
              or reviewing AI-generated code you already have, the result meets the same production
              standard: robust, tested, maintainable, and ready to ship.
            </p>
          </div>
        </div>

        {/* AI Tools Grid */}
        <h3 className="mb-6 font-sans text-xl font-semibold text-[#f1f5f9]">AI Tools I Use Daily</h3>
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-[rgba(167,139,250,0.2)] bg-[rgba(99,102,241,0.04)] p-6 transition hover:shadow-[0_0_30px_rgba(167,139,250,0.12)]"
            >
              <div className="mb-1 font-mono text-sm font-semibold text-[#a78bfa]">{tool.name}</div>
              <span className="mb-3 inline-block rounded bg-[rgba(167,139,250,0.1)] px-2 py-0.5 font-mono text-[10px] text-[#a78bfa]">
                {tool.role}
              </span>
              <p className="text-sm leading-relaxed text-[#94a3b8]">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        {/* AI Stats */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {aiStats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center">
              <div className="mb-1 font-sans text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#94a3b8]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* What I can build */}
        <h3 className="mb-6 font-sans text-xl font-semibold text-[#f1f5f9]">What I can build for you</h3>
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: '🔗', title: 'AI-Powered Features', desc: 'LLM APIs, semantic search, chatbots, and AI-driven UX built directly into your product.' },
            { icon: '⚙️', title: 'AI-Accelerated Delivery', desc: 'Ship your project 3–5× faster using AI tooling — without cutting corners on quality or reliability.' },
            { icon: '🛡️', title: 'GenAI Code Stabilization', desc: 'Review and harden AI-generated codebases to production standards — architecture, logic, and edge cases included.' },
          ].map((card) => (
            <div key={card.title} className="glass rounded-xl p-7">
              <div className="mb-3 text-2xl">{card.icon}</div>
              <h4 className="mb-2 font-sans font-semibold text-[#f1f5f9]">{card.title}</h4>
              <p className="text-sm text-[#94a3b8]">{card.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/ai-engineer"
          className="inline-flex items-center gap-2 rounded-md border border-[rgba(167,139,250,0.5)] bg-[rgba(167,139,250,0.08)] px-6 py-3 font-mono text-sm text-[#a78bfa] transition hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]"
        >
          Hire an AI-Native Engineer →
        </Link>
      </div>
    </SectionWrapper>
  );
}
