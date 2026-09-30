import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity, faq } from '@/lib/data';
import { getFAQPageSchema, getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://www.abinaiengineer.com';

export const metadata: Metadata = {
  title: 'Hire a Senior React & AI-Native Developer from India | Abin PM',
  description:
    'Hire Abin PM — senior React developer & AI-native engineer from India. 10+ years enterprise full stack + Cursor AI, Copilot, Claude. React, Node.js, MERN, freelance & remote available now.',
  alternates: { canonical: '/hire-me' },
};

const whyHire = [
  { icon: '🏆', title: '10+ years enterprise', desc: 'IBM, Abercrombie & Fitch, National Grid — not a junior with AI tools' },
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
  const faqSchema = getFAQPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Hire a React Developer from India', url: `${SITE_URL}/hire-me` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="mx-auto max-w-[1100px] px-6 pt-32 pb-20 md:px-10">
          {/* H1 */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage-border bg-sage-light px-4 py-1.5 text-xs text-sage-dark">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
            Currently Available
          </div>
          <h1 className="mb-6 text-4xl leading-tight md:text-5xl">
            Hire a Senior React Developer<br />
            <span className="text-sage-dark">&amp; AI-Native Engineer from India</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-muted">
            10+ years enterprise full stack development with React, Next.js & Node.js. AI-native since
            2024 using Cursor AI, GitHub Copilot & Claude in production at IBM.
          </p>

          {/* Trust strip */}
          <div className="mb-16 flex flex-wrap gap-4 border-y border-border py-6">
            {['IBM', 'Abercrombie & Fitch', 'National Grid', 'Paragon Energy'].map((c) => (
              <span key={c} className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-ink">
                {c}
              </span>
            ))}
          </div>

          {/* Why hire */}
          <h2 className="mb-8 text-2xl">
            Why Hire a Senior React Developer from India?
          </h2>
          <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyHire.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-cream p-6">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h3 className="mb-1 text-ink">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <h2 className="mb-6 text-2xl">AI-Accelerated React & Node.js Development</h2>
          <div className="mb-16 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-cream p-6">
              <h3 className="mb-4 text-sm text-muted">Traditional development</h3>
              <ul className="space-y-2">
                {comparison.map((r) => (
                  <li key={r.traditional} className="flex items-center gap-2 text-sm text-subtle">
                    <span className="text-muted">—</span>
                    {r.traditional}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-sage/30 bg-sage-light p-6">
              <h3 className="mb-4 text-sm text-sage-dark">AI-Native dev (Abin)</h3>
              <ul className="space-y-2">
                {comparison.map((r) => (
                  <li key={r.ai} className="flex items-center gap-2 text-sm font-medium text-ink">
                    <span className="text-sage-dark">✓</span>
                    {r.ai}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <h2 className="mb-6 text-2xl">React.js, Node.js & MERN Stack Services</h2>
          <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s} className="rounded-xl border border-border bg-cream px-5 py-4 font-sans font-medium text-ink">
                {s}
              </div>
            ))}
          </div>

          {/* Engagement models */}
          <h2 className="mb-4 text-2xl">Freelance, Part-Time & Full-Time Remote Engagement</h2>
          <div className="mb-8 flex flex-wrap gap-4 text-muted">
            <span className="rounded-lg border border-border px-4 py-2">📋 Freelance Contract</span>
            <span className="rounded-lg border border-border px-4 py-2">🕐 Part-Time Remote</span>
            <span className="rounded-lg border border-border px-4 py-2">💼 Full-Time Remote</span>
          </div>
          <p className="mb-16 text-sm text-muted">
            Proven track record with US & UK clients (IBM, Abercrombie & Fitch, National Grid, Paragon Energy). Async-first, timezone-flexible. Starting from a few hours per week to full-time commitment.
          </p>

          {/* Process */}
          <h2 className="mb-6 text-2xl">How to Hire — Simple 4-Step Process</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {['Enquire', 'Scope & Quote', 'Build', 'Ship & Support'].map((step, i) => (
              <div key={step} className="rounded-xl border border-border bg-cream p-5 text-center">
                <div className="mb-2 font-serif text-3xl text-sage-dark">{i + 1}</div>
                <div className="font-sans font-semibold text-ink">{step}</div>
              </div>
            ))}
          </div>

          {/* FAQ section */}
          <h2 className="mb-8 text-2xl">Frequently Asked Questions</h2>
          <div className="mb-16 space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-border bg-cream">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-sans font-semibold text-ink">
                  {item.q}
                  <span className="ml-4 shrink-0 text-sage-dark transition group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-sage/20 bg-sage-light p-10 text-center">
            <h2 className="mb-3 text-2xl text-ink">
              Ready to hire a senior React developer & AI-native engineer from India?
            </h2>
            <p className="mb-8 text-muted">
              Reach out directly — Abin responds within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${identity.email}`} className="btn-primary">
                Email Abin
              </a>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn ↗
              </a>
              <Link href="/projects" className="btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
