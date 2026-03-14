import type { Metadata } from 'next';
import Link from 'next/link';
import { identity } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hire a Senior React & AI-Native Developer from India | Abin PM',
  description:
    'Hire Abin PM — senior React developer & AI-native engineer from India. 9+ years enterprise full stack + Cursor AI, Copilot, Claude. React, Node.js, MERN, freelance & remote available now.',
};

const whyHire = [
  { icon: '🏆', title: '9+ years enterprise', desc: 'IBM, Abercrombie & Fitch, National Grid — not a junior with AI tools' },
  { icon: '🤖', title: 'AI-native since 2024', desc: 'Cursor AI, GitHub Copilot & Claude used daily in production' },
  { icon: '🌍', title: 'Remote-ready', desc: 'Proven US & UK client track record, async-first' },
  { icon: '⚡', title: 'Full stack', desc: 'React frontend to Node.js backend to cloud deployment' },
  { icon: '💰', title: 'India rates + AI speed', desc: 'Enterprise quality at freelance cost — further multiplied by AI tooling' },
];

const comparison = [
  { traditional: 'Weeks per feature', ai: 'Days per feature' },
  { traditional: 'Manual debugging', ai: 'AI-assisted root cause analysis' },
  { traditional: 'Standard output', ai: '3–5× velocity' },
  { traditional: 'One skill set', ai: 'Full stack + AI + Cloud' },
];

const services = [
  'React.js / Next.js Development',
  'Node.js & API Development',
  'MERN Stack Applications',
  'Cloud & AWS Deployment',
  'AI-Powered Feature Development',
  'GenAI Code Stabilization',
];

export default function HireMePage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      {/* Light nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e2e8f0] bg-white/95 px-6 py-4 backdrop-blur-md md:px-10">
        <Link href="/" className="font-sans text-lg font-bold text-[#0f172a] no-underline">
          abin<span className="text-[#6366f1]">.</span>dev
        </Link>
        <Link href="/" className="font-mono text-sm text-[#64748b] no-underline hover:text-[#6366f1]">
          ← Back to site
        </Link>
      </nav>

      <main className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
        {/* H1 */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f1f5f9] px-4 py-1.5 font-mono text-xs text-[#64748b]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Currently Available
        </div>
        <h1 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Hire a Senior React Developer<br />
          <span className="text-[#6366f1]">&amp; AI-Native Engineer from India</span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-[#64748b]">
          9+ years enterprise full stack development with React, Next.js & Node.js. AI-native since
          2024 using Cursor AI, GitHub Copilot & Claude in production at IBM.
        </p>

        {/* Trust strip */}
        <div className="mb-16 flex flex-wrap gap-4 border-y border-[#e2e8f0] py-6">
          {['IBM', 'Abercrombie & Fitch', 'National Grid', 'Paragon Energy'].map((c) => (
            <span key={c} className="rounded-full bg-[#f1f5f9] px-4 py-1.5 font-mono text-sm font-medium text-[#0f172a]">
              {c}
            </span>
          ))}
        </div>

        {/* Why hire */}
        <h2 className="mb-8 font-sans text-2xl font-bold">Why hire Abin?</h2>
        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyHire.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-6">
              <div className="mb-3 text-2xl">{item.icon}</div>
              <h3 className="mb-1 font-sans font-semibold text-[#0f172a]">{item.title}</h3>
              <p className="text-sm text-[#64748b]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <h2 className="mb-6 font-sans text-2xl font-bold">AI-accelerated development</h2>
        <div className="mb-16 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-6">
            <h3 className="mb-4 font-mono text-sm text-[#64748b]">Traditional development</h3>
            <ul className="space-y-2">
              {comparison.map((r) => (
                <li key={r.traditional} className="flex items-center gap-2 text-sm text-[#475569]">
                  <span className="text-[#cbd5e1]">—</span>
                  {r.traditional}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#6366f1]/30 bg-[#6366f1]/5 p-6">
            <h3 className="mb-4 font-mono text-sm text-[#6366f1]">AI-Native dev (Abin)</h3>
            <ul className="space-y-2">
              {comparison.map((r) => (
                <li key={r.ai} className="flex items-center gap-2 text-sm font-medium text-[#0f172a]">
                  <span className="text-[#6366f1]">✓</span>
                  {r.ai}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services */}
        <h2 className="mb-6 font-sans text-2xl font-bold">Services</h2>
        <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s} className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4 font-sans font-medium text-[#0f172a]">
              {s}
            </div>
          ))}
        </div>

        {/* Engagement models */}
        <h2 className="mb-4 font-sans text-2xl font-bold">Engagement models</h2>
        <div className="mb-8 flex flex-wrap gap-4 text-[#64748b]">
          <span className="rounded-lg border border-[#e2e8f0] px-4 py-2">📋 Freelance Contract</span>
          <span className="rounded-lg border border-[#e2e8f0] px-4 py-2">🕐 Part-Time Remote</span>
          <span className="rounded-lg border border-[#e2e8f0] px-4 py-2">💼 Full-Time Remote</span>
        </div>

        {/* Process */}
        <h2 className="mb-6 font-sans text-2xl font-bold">Process</h2>
        <div className="mb-16 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {['Enquire', 'Scope & Quote', 'Build', 'Ship & Support'].map((step, i) => (
            <div key={step} className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 text-center">
              <div className="mb-2 font-sans text-2xl font-bold text-[#6366f1]">{i + 1}</div>
              <div className="font-sans font-semibold text-[#0f172a]">{step}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-[#6366f1]/20 bg-[#6366f1]/5 p-10 text-center">
          <h2 className="mb-3 font-sans text-2xl font-bold text-[#0f172a]">
            Ready to hire a senior React developer & AI-native engineer from India?
          </h2>
          <p className="mb-8 text-[#64748b]">
            Reach out directly — Abin responds within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${identity.email}`} className="inline-flex rounded-xl bg-[#6366f1] px-7 py-3.5 font-sans font-semibold text-white no-underline transition hover:opacity-90">
              Email Abin
            </a>
            <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl border border-[#e2e8f0] bg-white px-7 py-3.5 font-sans font-semibold text-[#0f172a] no-underline transition hover:border-[#6366f1]">
              LinkedIn ↗
            </a>
            <Link href="/projects" className="inline-flex rounded-xl border border-[#e2e8f0] bg-white px-7 py-3.5 font-sans font-semibold text-[#0f172a] no-underline transition hover:border-[#6366f1]">
              View Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
