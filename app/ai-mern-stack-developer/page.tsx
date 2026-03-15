import type { Metadata } from 'next';
import Link from 'next/link';
import { identity } from '@/lib/data';
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://www.abinaiengineer.com';

export const metadata: Metadata = {
  title: 'AI-Powered MERN Stack Developer | React, Node.js & LLM Integration | Abin PM',
  description:
    'Senior AI-native MERN stack developer — React, Node.js, MongoDB + Cursor AI, GitHub Copilot & Claude in production. LLM integration, GenAI-assisted development, 9+ years enterprise experience.',
  keywords: [
    'AI MERN stack developer',
    'AI-powered React developer',
    'AI-native full stack developer',
    'LLM integration developer',
    'GenAI developer for hire',
    'Cursor AI developer',
    'AI-assisted React Node.js development',
    'hire AI engineer India',
    'MERN stack AI developer remote',
  ],
  alternates: { canonical: `${SITE_URL}/ai-mern-stack-developer` },
  openGraph: {
    title: 'AI-Powered MERN Stack Developer | Abin PM',
    description:
      'MERN stack + AI-native workflow. Cursor AI, Copilot & Claude in production at IBM. LLM integration, GenAI stabilization, React, Node.js. 9+ years enterprise.',
    url: `${SITE_URL}/ai-mern-stack-developer`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const aiTools = [
  {
    name: 'Cursor AI',
    role: 'Primary IDE',
    desc: 'In-context architectural reasoning, refactoring, and accelerated delivery across enterprise React and Node.js codebases at IBM since 2024.',
  },
  {
    name: 'GitHub Copilot',
    role: 'Inline Completion',
    desc: 'Typed boilerplate, test scaffolding, and repetitive API patterns — accepted with minimal review when TypeScript types are tight.',
  },
  {
    name: 'Claude',
    role: 'Architecture & Review',
    desc: 'Pre-PR diff review for edge cases, race conditions, and missing error boundaries — a senior second opinion before code goes to production.',
  },
  {
    name: 'OpenAI API',
    role: 'LLM Integration',
    desc: 'API integration and AI-powered feature development — streaming endpoints, RAG pipelines, semantic search — built into client products.',
  },
];

const aiCapabilities = [
  { label: 'AI-Accelerated MERN Development', desc: '3–5× faster delivery using Cursor AI + Copilot without sacrificing production-grade quality.' },
  { label: 'GenAI Code Stabilization', desc: 'Takes AI-generated code baselines and hardens them to enterprise architecture standards — the skill most AI tools skip.' },
  { label: 'LLM Feature Integration', desc: 'Adds OpenAI, Anthropic, or open-source LLM capabilities to existing React + Node.js products incrementally.' },
  { label: 'Prompt Engineering & RAG', desc: 'Context-aware prompting, retrieval-augmented generation, and AI workflow design for production-grade reliability.' },
  { label: 'AI-Assisted Code Review', desc: 'Uses Claude for systematic pre-merge review — catches failure modes and edge cases that automated tests miss.' },
  { label: 'Microservices + AI Architecture', desc: 'Designs AI feature layers as independent services — isolating latency, cost, and failure modes from core application logic.' },
];

const comparison = [
  { label: 'Delivery speed', traditional: 'Standard sprint velocity', ai: '3–5× faster with AI tooling' },
  { label: 'Code quality', traditional: 'Depends on discipline', ai: 'AI-reviewed before every PR' },
  { label: 'AI features', traditional: 'Separate specialist needed', ai: 'Built-in — React + Node.js + LLM' },
  { label: 'GenAI code', traditional: 'Ships as-is or not at all', ai: 'Stabilized to enterprise standard' },
];

export default function AiMernStackDeveloperPage() {
  const personSchema = getPersonSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'AI MERN Stack Developer', url: `${SITE_URL}/ai-mern-stack-developer` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#080810] text-[#f1f5f9]">
        {/* Nav */}
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[rgba(99,102,241,0.1)] bg-[#080810]/95 px-6 py-4 backdrop-blur-md md:px-10">
          <Link href="/" className="font-sans text-lg font-bold text-[#f1f5f9] no-underline">
            abin<span className="text-[#6366f1]">.</span>dev
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/hire-me" className="font-mono text-sm text-[#94a3b8] no-underline hover:text-[#6366f1]">
              Hire Me
            </Link>
            <Link href="/ai-engineer" className="font-mono text-sm text-[#94a3b8] no-underline hover:text-[#6366f1]">
              AI Engineer
            </Link>
          </div>
        </nav>

        <main className="mx-auto max-w-[1060px] px-6 py-20 md:px-10">

          {/* Hero */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.08)] px-4 py-1.5">
            <span className="font-mono text-xs text-[#a78bfa]">🤖 AI-Native since 2024</span>
          </div>

          <h1 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            AI-Powered MERN Stack Developer<br />
            <span className="text-[#a78bfa]">React, Node.js &amp; LLM Integration</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-[#94a3b8]">
            Senior MERN stack developer with a genuine AI-native workflow — Cursor AI, GitHub Copilot
            and Claude used daily in enterprise production at IBM since 2024. 9+ years full-stack
            experience. Available for AI feature builds, GenAI stabilization, and LLM integrations.
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex rounded-xl bg-[#a78bfa] px-7 py-3.5 font-sans font-semibold text-[#080810] no-underline transition hover:opacity-90"
            >
              Hire for AI project →
            </a>
            <Link
              href="/ai-engineer"
              className="inline-flex rounded-xl border border-[rgba(167,139,250,0.3)] px-7 py-3.5 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(167,139,250,0.6)]"
            >
              AI Engineer page →
            </Link>
          </div>

          {/* Client logos */}
          <div className="mb-20 flex flex-wrap gap-3 border-y border-[rgba(99,102,241,0.1)] py-6">
            {['IBM', 'Abercrombie & Fitch', 'National Grid', 'Paragon Energy'].map((c) => (
              <span key={c} className="rounded-full bg-[rgba(99,102,241,0.06)] px-4 py-1.5 font-mono text-sm font-medium text-[#94a3b8]">
                {c}
              </span>
            ))}
          </div>

          {/* AI Tools */}
          <h2 className="mb-8 font-sans text-2xl font-bold text-[#f1f5f9]">
            AI Tools Used Daily in Enterprise Production
          </h2>
          <div className="mb-20 grid gap-5 sm:grid-cols-2">
            {aiTools.map((tool) => (
              <div key={tool.name} className="rounded-xl border border-[rgba(167,139,250,0.15)] bg-[rgba(167,139,250,0.05)] p-6">
                <div className="mb-1 flex items-center gap-3">
                  <span className="font-sans font-bold text-[#a78bfa]">{tool.name}</span>
                  <span className="rounded-full bg-[rgba(167,139,250,0.1)] px-2.5 py-0.5 font-mono text-[10px] text-[#a78bfa]">{tool.role}</span>
                </div>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{tool.desc}</p>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <h2 className="mb-8 font-sans text-2xl font-bold text-[#f1f5f9]">
            AI + MERN Stack Capabilities
          </h2>
          <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((cap) => (
              <div key={cap.label} className="rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] p-6">
                <h3 className="mb-2 font-sans font-semibold text-[#f1f5f9]">{cap.label}</h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <h2 className="mb-8 font-sans text-2xl font-bold text-[#f1f5f9]">
            AI-Native vs Traditional MERN Development
          </h2>
          <div className="mb-20 overflow-x-auto rounded-xl border border-[rgba(99,102,241,0.12)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.06)]">
                  <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-widest text-[#475569]">Dimension</th>
                  <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-widest text-[#475569]">Traditional developer</th>
                  <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-widest text-[#a78bfa]">AI-native (Abin)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(99,102,241,0.08)]">
                {comparison.map((row) => (
                  <tr key={row.label} className="bg-[rgba(99,102,241,0.02)]">
                    <td className="px-6 py-4 font-sans font-semibold text-[#f1f5f9]">{row.label}</td>
                    <td className="px-6 py-4 text-[#64748b]">{row.traditional}</td>
                    <td className="px-6 py-4 font-medium text-[#a78bfa]">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Blog links */}
          <h2 className="mb-6 font-sans text-2xl font-bold text-[#f1f5f9]">
            Read: AI Engineering in Practice
          </h2>
          <div className="mb-20 grid gap-4 sm:grid-cols-2">
            {[
              { href: '/blog/ai-native-workflow-cursor-copilot-claude', title: 'Inside an AI-Native Workflow: Cursor AI, Copilot & Claude at IBM', cat: 'AI-Native' },
              { href: '/blog/genai-code-stabilization-enterprise', title: 'When (and When Not) to Use GenAI for Production Code', cat: 'GenAI' },
              { href: '/blog/llm-integration-existing-react-app', title: 'Integrating LLMs into an Existing React + Node.js Application', cat: 'LLMs' },
              { href: '/blog/sas-to-react-national-grid-modernization', title: 'From SAS to React: National Grid Modernization with GenAI', cat: 'Case Study' },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-xl border border-[rgba(167,139,250,0.12)] bg-[rgba(167,139,250,0.04)] p-5 no-underline transition hover:border-[rgba(167,139,250,0.35)]"
              >
                <div className="mb-2 font-mono text-[10px] text-[#a78bfa]">{post.cat}</div>
                <div className="font-sans text-sm font-semibold leading-snug text-[#f1f5f9] transition group-hover:text-[#a78bfa]">
                  {post.title}
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[rgba(167,139,250,0.2)] bg-[rgba(167,139,250,0.04)] p-10 text-center">
            <h2 className="mb-3 font-sans text-2xl font-bold text-[#f1f5f9]">
              Hire an AI-Powered MERN Stack Developer
            </h2>
            <p className="mb-2 text-[#94a3b8]">
              React, Node.js, MongoDB — accelerated by Cursor AI, Copilot &amp; Claude.
            </p>
            <p className="mb-8 font-mono text-sm text-[#475569]">
              Available remote. Kochi, India. Responds within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex rounded-xl bg-[#a78bfa] px-7 py-3.5 font-sans font-semibold text-[#080810] no-underline transition hover:opacity-90"
              >
                Email Abin
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl border border-[rgba(167,139,250,0.3)] px-7 py-3.5 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(167,139,250,0.6)]"
              >
                LinkedIn ↗
              </a>
              <Link
                href="/hire-me"
                className="inline-flex rounded-xl border border-[rgba(167,139,250,0.3)] px-7 py-3.5 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(167,139,250,0.6)]"
              >
                Full hire page →
              </Link>
            </div>
          </div>

          {/* Footer links */}
          <div className="mt-16 flex flex-wrap gap-6 border-t border-[rgba(99,102,241,0.1)] pt-10 font-mono text-sm">
            <Link href="/remote-mern-developer" className="text-[#475569] no-underline hover:text-[#94a3b8]">Remote MERN Developer →</Link>
            <Link href="/skills" className="text-[#475569] no-underline hover:text-[#94a3b8]">Full Tech Stack →</Link>
            <Link href="/projects" className="text-[#475569] no-underline hover:text-[#94a3b8]">Case Studies →</Link>
            <Link href="/blog" className="text-[#475569] no-underline hover:text-[#94a3b8]">Engineering Blog →</Link>
          </div>

        </main>
      </div>
    </>
  );
}
