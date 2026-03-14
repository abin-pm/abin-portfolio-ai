import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { aiTools, identity } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hire an AI-Native Full Stack Developer from India | Abin PM',
  description:
    'Hire Abin PM — AI-native full stack developer from India using Cursor AI, GitHub Copilot, and Claude in enterprise production at IBM. LLM integration, GenAI stabilization. Freelance & remote.',
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
    'Cursor AI developer',
  ],
};

const whatItMeans = [
  { before: 'Feature development: weeks', after: 'Days, using AI scaffolding + senior review' },
  { before: 'Debugging: manual trace', after: 'AI-assisted root cause in minutes' },
  { before: 'Code review: manual pass', after: 'AI-assisted analysis + human judgment' },
  { before: 'Architecture: blank page', after: 'AI scaffold refined with enterprise patterns' },
];

const whoFor = [
  { icon: '🚀', title: 'Startups needing speed', desc: 'Ship faster without burning budget on a large team.' },
  { icon: '🏢', title: 'Enterprises exploring AI', desc: 'Get a proven AI-native engineer who understands compliance and scale.' },
  { icon: '🤖', title: 'Companies building LLM features', desc: 'Integrate AI APIs, chatbots, and semantic search into your product.' },
  { icon: '🛡️', title: 'Teams needing GenAI hardened', desc: 'Review, refactor, and productionize AI-generated codebases.' },
];

const aiFaq = [
  {
    q: 'Is AI-generated code safe for production?',
    a: 'Not by default. AI-generated code requires senior review, architectural alignment, edge case handling, and testing before it is production-ready. This is exactly what I do — I take AI-generated baselines and harden them to enterprise standards.',
  },
  {
    q: 'Can you build LLM features into my existing app?',
    a: 'Yes. I have hands-on experience integrating LLM APIs (OpenAI, Claude) into production applications — chat interfaces, semantic search, AI-powered workflows, and more.',
  },
  {
    q: 'How do you ensure quality when using AI tools?',
    a: 'AI accelerates drafting and iteration. I apply senior engineering judgment to validate correctness, enforce coding standards, write tests, and ensure the output is maintainable and production-reliable. AI is the accelerator; I am the quality gate.',
  },
  {
    q: 'What is GenAI stabilization?',
    a: 'GenAI stabilization is the process of taking AI-generated code and correcting its discrepancies, aligning it with business logic, enforcing architecture standards, and ensuring it meets production reliability thresholds. I did this at IBM for the National Grid MDS project.',
  },
];

export default function AIEngineerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] pt-28">
        <section className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
          <span className="mb-4 inline-block rounded-full border border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.1)] px-3 py-1 font-mono text-xs text-[#a78bfa]">
            AI Engineer
          </span>
          <h1 className="mb-6 font-sans text-4xl font-bold tracking-tight text-[#f1f5f9] md:text-5xl">
            AI-Native Full Stack Engineer for Hire
          </h1>
          <p className="mb-16 max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
            Abin PM is an AI-native full stack developer based in Kochi, India — among the first
            generation of senior engineers to adopt AI-assisted development tools in enterprise
            production. Since 2024, he has used Cursor AI, GitHub Copilot, and Claude as core
            instruments in his daily workflow at IBM India, delivering React and Node.js systems
            for National Grid faster than traditional development cycles allow. He doesn&apos;t just
            use AI — he stabilizes AI-generated code for Fortune 500 production standards.
          </p>

          <h2 className="mb-8 font-sans text-2xl font-bold text-[#f1f5f9]">What AI-native means in practice</h2>
          <div className="mb-16 grid gap-4 md:grid-cols-2">
            {whatItMeans.map((item) => (
              <div key={item.before} className="glass rounded-xl p-6">
                <div className="mb-2 text-sm text-[#94a3b8]">{item.before}</div>
                <div className="font-mono text-sm text-[#6366f1]">→ {item.after}</div>
              </div>
            ))}
          </div>

          <h2 className="mb-6 font-sans text-2xl font-bold text-[#f1f5f9]">The rare skill — GenAI stabilization</h2>
          <div className="mb-16 rounded-xl border border-[rgba(167,139,250,0.2)] bg-[rgba(167,139,250,0.04)] p-8">
            <p className="mb-4 leading-relaxed text-[#94a3b8]">
              At IBM, I was assigned to the National Grid MDS Consolidation EPO Tracking project.
              The initial codebase was generated by AI tools — and it was a mess of subtle bugs,
              architectural misalignments, and enterprise anti-patterns. My job was to take that
              GenAI baseline, review every module, correct discrepancies, enforce React and Node.js
              enterprise standards, optimize the .NET Core API, and ship a production-ready
              application that met National Grid&apos;s reliability requirements.
            </p>
            <p className="leading-relaxed text-[#94a3b8]">
              That process — critically reviewing AI output, applying senior engineering judgment,
              hardening to enterprise standards — is what I call GenAI stabilization. It is a skill
              that requires deep full stack experience AND AI fluency. Most engineers have one or
              the other. I have both.
            </p>
          </div>

          <h2 className="mb-6 font-sans text-2xl font-bold text-[#f1f5f9]">AI tools I use</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiTools.map((tool) => (
              <div key={tool.name} className="glass-violet rounded-xl p-6">
                <div className="mb-1 font-mono text-sm font-semibold text-[#a78bfa]">{tool.name}</div>
                <span className="mb-3 inline-block rounded bg-[rgba(167,139,250,0.1)] px-2 py-0.5 font-mono text-[10px] text-[#a78bfa]">
                  {tool.role}
                </span>
                <p className="text-sm text-[#94a3b8]">{tool.description}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-8 font-sans text-2xl font-bold text-[#f1f5f9]">Who this is for</h2>
          <div className="mb-16 grid gap-5 md:grid-cols-2">
            {whoFor.map((item) => (
              <div key={item.title} className="glass rounded-xl p-6">
                <div className="mb-2 text-2xl">{item.icon}</div>
                <h3 className="mb-1 font-sans font-semibold text-[#f1f5f9]">{item.title}</h3>
                <p className="text-sm text-[#94a3b8]">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-8 font-sans text-2xl font-bold text-[#f1f5f9]">AI engineering FAQ</h2>
          <div className="mb-16 space-y-4">
            {aiFaq.map((item) => (
              <div key={item.q} className="glass rounded-xl p-6">
                <h3 className="mb-2 font-sans font-semibold text-[#f1f5f9]">{item.q}</h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-6 text-lg text-[#94a3b8]">
              Ready to work with an AI-native engineer who can build fast AND stabilize AI-generated code?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex rounded-xl border border-[rgba(167,139,250,0.5)] bg-[rgba(167,139,250,0.08)] px-8 py-4 font-mono font-semibold text-[#a78bfa] no-underline transition hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]"
              >
                Hire an AI-Native Engineer
              </a>
              <Link
                href="/hire-me"
                className="inline-flex rounded-xl border border-[rgba(99,102,241,0.35)] bg-transparent px-8 py-4 font-mono font-semibold text-[#94a3b8] no-underline transition hover:text-[#f1f5f9]"
              >
                Full Hire Page →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
