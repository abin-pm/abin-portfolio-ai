'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { aiTools } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function AIEngineer() {
  return (
    <SectionWrapper
      id="ai-engineer"
      className="border-y border-border bg-surface px-6 py-32 md:px-10"
    >
      <div className="mx-auto max-w-[1100px]">
        <span className="mb-4 inline-block rounded-full border border-border-strong bg-sage-light px-3 py-1 text-xs text-sage-dark">
          How I work
        </span>

        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          AI-assisted development, checked by a senior engineer
        </h2>
        <p className="mb-12 text-lg text-muted">
          AI tools make me faster. Ten years of shipping production code is how I know when they&apos;re wrong.
        </p>

        {/* Narrative cards */}
        <div className="mb-16 grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Part of my normal day',
              body: 'I have used Cursor, GitHub Copilot and Claude on IBM client work since 2024. They draft boilerplate, suggest refactors and give me a second read on a diff. I decide what stays, and the same code review and tests apply whoever wrote the first version.',
            },
            {
              title: 'Fixing code an AI wrote',
              body: 'On National Grid at IBM, GenAI tools wrote much of the first draft of a React and .NET Core app. Some of its logic did not match the business rules and parts had drifted from the architecture. I went through it module by module, corrected what was wrong and brought it up to the standard the client needed.',
            },
            {
              title: 'What you get',
              body: 'Routine work goes faster, and you still have one senior engineer who is accountable for every line. If your team already has AI-generated code it is unsure about, I can review it, tell you plainly what is risky, and fix it.',
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
        <h3 className="mb-6 text-xl text-ink">The tools, and what I use each one for</h3>
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

        {/* What I can build */}
        <h3 className="mb-6 text-xl text-ink">What I can build for you</h3>
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: '🔗', title: 'LLM features in your app', desc: 'A chat assistant, search or summaries added to an existing React and Node.js product through the OpenAI or Claude API.' },
            { icon: '⚙️', title: 'Faster delivery', desc: 'AI tools on the repetitive parts of a build, with every change still reviewed and tested before release.' },
            { icon: '🛡️', title: 'AI-generated code review', desc: 'A review of code your team or a tool generated: logic, architecture and edge cases, with fixes.' },
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
          More on how I use AI →
        </Link>
      </div>
    </SectionWrapper>
  );
}
