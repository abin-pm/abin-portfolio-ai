import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { aiTools, identity } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hire an AI-Native Full Stack Developer from India | Abin PM',
  description:
    'Hire Abin PM — AI-native full stack developer & engineer from India. Uses Cursor AI, GitHub Copilot, and Claude in enterprise production at IBM. Available for freelance & remote.',
  keywords: [
    'AI-native developer India',
    'AI Engineer full stack',
    'hire AI developer India',
    'developer with Cursor AI experience',
    'LLM integration developer',
    'GenAI developer for hire',
    'AI-assisted full stack developer',
    'agentic developer',
    'vibe coding developer',
  ],
};

const whatItMeans = [
  { before: 'Feature development: weeks', after: 'Days' },
  { before: 'Debugging: manual trace', after: 'AI root cause analysis' },
  { before: 'Code review: manual', after: 'AI-assisted + human judgment' },
  { before: 'Architecture: blank page', after: 'AI scaffold + senior review' },
];

const whoFor = [
  'Startups wanting to ship fast without burning budget',
  'Enterprises exploring AI-assisted development',
  'Companies building LLM/AI features into products',
  'Teams needing GenAI code reviewed & hardened',
];

const aiFaq = [
  {
    q: 'Is AI-generated code safe for production?',
    a: 'Only after senior review and hardening. I take GenAI baselines and refactor them to meet enterprise standards, security, and reliability before shipping.',
  },
  {
    q: 'Can you build LLM features into my existing app?',
    a: 'Yes. I have hands-on experience with LLM APIs, OpenAI, and integrating AI-powered features into production products.',
  },
  {
    q: 'How do you ensure quality with AI tools?',
    a: 'AI accelerates drafting and iteration; I apply senior engineering judgment, tests, and architecture review so output is production-grade.',
  },
  {
    q: "What's the difference between AI-assisted and AI-native development?",
    a: 'AI-assisted means occasionally using tools. AI-native means AI is part of the core workflow every day, with the skill to stabilize and ship that output — which I do at IBM.',
  },
];

export default function AIEngineerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neural-bg pt-28">
        <section className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
          <h1 className="mb-8 font-sans text-4xl font-800 tracking-tight text-[#f1f5f9] md:text-5xl">
            AI-Native Full Stack Engineer for Hire
          </h1>
          <p className="mb-14 max-w-[720px] text-lg leading-relaxed text-[#94a3b8]">
            Abin PM is an AI-native full stack developer based in Kochi, India — one of a rare group
            of senior engineers who adopted AI-assisted development tools in enterprise production
            before they became mainstream. Since 2024, he has used Cursor AI, GitHub Copilot, and
            Claude as core instruments in his daily workflow at IBM India, delivering React and
            Node.js systems faster than traditional development cycles allow.
          </p>

          <h2 className="mb-6 font-sans text-2xl font-800 text-[#f1f5f9]">
            What AI-native means in practice
          </h2>
          <div className="mb-14 grid gap-4 md:grid-cols-2">
            {whatItMeans.map((item) => (
              <div
                key={item.before}
                className="rounded-xl border border-neural-border bg-neural-surface p-6"
              >
                <div className="text-sm text-[#94a3b8]">{item.before}</div>
                <div className="mt-2 font-mono text-indigo">→ {item.after}</div>
              </div>
            ))}
          </div>

          <h2 className="mb-6 font-sans text-2xl font-800 text-[#f1f5f9]">
            The rare skill — GenAI stabilization
          </h2>
          <p className="mb-14 max-w-[720px] text-[#94a3b8]">
            At IBM I take AI-generated code baselines → review → refactor → enforce enterprise
            standards → ship to production. Most engineers can&apos;t do this. I can.
          </p>

          <h2 className="mb-6 font-sans text-2xl font-800 text-[#f1f5f9]">AI tools I use</h2>
          <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-violet/20 bg-neural-surface p-6"
              >
                <div className="font-mono font-600 text-violet">{tool.name}</div>
                <span className="mt-2 inline-block rounded bg-violet/10 px-2 py-0.5 font-mono text-xs text-violet">
                  {tool.role}
                </span>
                <p className="mt-3 text-sm text-[#94a3b8]">{tool.description}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-6 font-sans text-2xl font-800 text-[#f1f5f9]">Who this is for</h2>
          <ul className="mb-14 list-inside list-disc space-y-2 text-[#94a3b8]">
            {whoFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mb-6 font-sans text-2xl font-800 text-[#f1f5f9]">FAQ</h2>
          <div className="mb-14 space-y-4">
            {aiFaq.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-neural-border bg-neural-surface p-6"
              >
                <h3 className="font-sans font-600 text-[#f1f5f9]">{item.q}</h3>
                <p className="mt-2 text-sm text-[#94a3b8]">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`mailto:${identity.email}`}
              className="inline-flex rounded-md border border-violet/50 bg-violet/10 px-8 py-4 font-mono font-600 text-violet transition hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]"
            >
              Hire an AI-Native Engineer
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
