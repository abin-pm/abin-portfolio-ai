'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { aiTools, aiStats } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function AIEngineer() {
  return (
    <SectionWrapper
      id="ai-engineer"
      className="border-y border-border bg-surface px-6 py-32 md:px-10"
    >
      <div className="mx-auto max-w-[1100px]">
        <span className="mb-4 inline-block rounded-full border border-border-strong bg-sage-light px-3 py-1 text-xs text-sage-dark">
          Core Differentiator
        </span>

        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          AI-Native Development
        </h2>
        <p className="mb-12 text-lg text-muted">
          Not just a developer who uses AI — an engineer who makes AI production-ready.
        </p>

        {/* Narrative cards */}
        <div className="mb-16 grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Adopted Early, Used Daily',
              body: 'While most developers were still experimenting, I integrated Cursor AI, GitHub Copilot, and Claude into enterprise production workflows at IBM from day one in 2024. These are not productivity shortcuts — they are core instruments I wield with senior engineering judgment to multiply output without compromising standards.',
            },
            {
              title: 'The Rare Skill: GenAI Stabilization',
              body: 'On the National Grid MDS Consolidation project at IBM, I took a GenAI-generated codebase — full of discrepancies, architectural drift, and reliability gaps — and hardened it to Fortune 500 production standards. Reviewing AI output critically, correcting misaligned logic, enforcing enterprise coding standards, and ensuring every component is maintainable and production-reliable.',
            },
            {
              title: 'What This Means for Your Project',
              body: 'You get the speed of a team, the accountability of a single senior engineer, and output that does not need a second pass. Whether building a feature from scratch or reviewing AI-generated code you already have, the result meets the same production standard: robust, tested, maintainable, and ready to ship.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card card-violet p-7"
            >
              <div className="relative z-10">
                <h3 className="mb-3 text-base text-sage-dark">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tools Grid */}
        <h3 className="mb-6 text-xl text-ink">AI Tools I Use Daily</h3>
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="card card-violet p-6"
            >
              <div className="relative z-10">
                <div className="mb-1 text-sm font-semibold text-sage-dark">{tool.name}</div>
                <span className="mb-3 inline-block rounded-full bg-sage-light px-2.5 py-0.5 text-[10px] text-sage-dark">
                  {tool.role}
                </span>
                <p className="text-sm leading-relaxed text-muted">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Stats */}
        <div className="mb-16 grid grid-cols-2 gap-5 md:grid-cols-4">
          {aiStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="card-stat p-6 text-center"
            >
              <div className="mb-1 font-serif text-4xl text-sage-dark">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* What I can build */}
        <h3 className="mb-6 text-xl text-ink">What I can build for you</h3>
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: '🔗', title: 'AI-Powered Features', desc: 'LLM APIs, semantic search, chatbots, and AI-driven UX built directly into your product.' },
            { icon: '⚙️', title: 'AI-Accelerated Delivery', desc: 'Ship your project 3–5× faster using AI tooling — without cutting corners on quality or reliability.' },
            { icon: '🛡️', title: 'GenAI Code Stabilization', desc: 'Review and harden AI-generated codebases to production standards — architecture, logic, and edge cases included.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="card p-7"
            >
              <div className="relative z-10">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h4 className="mb-2 font-sans font-semibold text-ink">{item.title}</h4>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href="/ai-engineer"
          className="btn-secondary"
        >
          Hire an AI-Native Engineer →
        </Link>
      </div>
    </SectionWrapper>
  );
}
