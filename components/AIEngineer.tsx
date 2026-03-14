'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { aiTools, aiStats } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function AIEngineer() {
  return (
    <SectionWrapper
      id="ai-engineer"
      className="border-y border-violet/20 bg-[rgba(167,139,250,0.03)] px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-[1100px]">
        <span className="mb-4 inline-block rounded-full bg-violet/20 px-3 py-1 font-mono text-xs text-violet">
          Core Differentiator
        </span>
        <h2 className="mb-3 font-sans text-3xl font-800 tracking-tight md:text-4xl">
          AI-Native Development
        </h2>
        <p className="mb-12 text-lg text-[#94a3b8]">
          Not just a developer who uses AI — an engineer who makes AI production-ready.
        </p>

        <div className="prose prose-invert mb-14 max-w-none">
          <p className="mb-4 text-[#94a3b8]">
            While most developers are still experimenting with AI tools, I&apos;ve been using Cursor
            AI, GitHub Copilot, and Claude as core instruments in enterprise production at IBM since
            2024 — not to replace engineering judgment, but to multiply it.
          </p>
          <p className="mb-4 text-[#94a3b8]">
            What makes this different: I don&apos;t just generate code with AI. I stabilize it. At
            IBM and National Grid, I&apos;ve taken GenAI-generated application baselines and hardened
            them to meet enterprise architecture standards, security requirements, and production
            reliability thresholds. That skill — senior engineering judgment applied to AI-generated
            code — is rare and increasingly in demand.
          </p>
          <p className="text-[#94a3b8]">
            The result for your project: the speed of a team, the accountability of one engineer,
            and output that doesn&apos;t need a second pass.
          </p>
        </div>

        {/* AI Tools grid */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-violet/20 bg-neural-surface p-6 transition hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]"
            >
              <div className="font-mono font-600 text-violet">{tool.name}</div>
              <span className="mt-2 inline-block rounded bg-violet/10 px-2 py-0.5 font-mono text-xs text-violet">
                {tool.role}
              </span>
              <p className="mt-3 text-sm text-[#94a3b8]">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        {/* AI Stats */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {aiStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-sans text-3xl font-800 md:text-4xl"
                style={{
                  background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-[#94a3b8]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* What I can build */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-neural-border bg-neural-surface p-6">
            <div className="mb-2 text-2xl">🔗</div>
            <h3 className="mb-2 font-sans font-700 text-[#f1f5f9]">AI-Powered Features</h3>
            <p className="text-sm text-[#94a3b8]">
              LLM APIs, chatbots, semantic search, AI-driven UX into your product.
            </p>
          </div>
          <div className="rounded-xl border border-neural-border bg-neural-surface p-6">
            <div className="mb-2 text-2xl">⚙️</div>
            <h3 className="mb-2 font-sans font-700 text-[#f1f5f9]">AI-Accelerated Delivery</h3>
            <p className="text-sm text-[#94a3b8]">
              Use AI tooling to ship your project 3–5× faster without cutting corners.
            </p>
          </div>
          <div className="rounded-xl border border-neural-border bg-neural-surface p-6">
            <div className="mb-2 text-2xl">🛡️</div>
            <h3 className="mb-2 font-sans font-700 text-[#f1f5f9]">GenAI Code Stabilization</h3>
            <p className="text-sm text-[#94a3b8]">
              AI-generated codebase review and hardening to production standards.
            </p>
          </div>
        </div>

        <Link
          href="/ai-engineer"
          className="inline-flex items-center gap-2 rounded-md border border-violet/50 bg-violet/10 px-6 py-3 font-mono text-sm font-600 text-violet transition hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]"
        >
          Hire an AI-Native Engineer →
        </Link>
      </div>
    </SectionWrapper>
  );
}
