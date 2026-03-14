import type { Metadata } from 'next';
import Link from 'next/link';
import { identity, faq } from '@/lib/data';
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://abinaiengineer.com';

export const metadata: Metadata = {
  title: 'Remote MERN Stack Developer for Hire | React, Node.js, MongoDB | Abin PM',
  description:
    'Senior remote MERN stack developer with 9+ years experience. React, Node.js, MongoDB, Express. Proven track record with US & UK clients (IBM, Abercrombie & Fitch, National Grid). Available now.',
  keywords: [
    'remote MERN stack developer',
    'hire MERN developer remote',
    'remote React Node.js developer',
    'MERN stack developer India remote',
    'senior full stack developer remote',
    'freelance MERN developer',
    'remote full stack developer India',
    'hire React Node MongoDB developer',
  ],
  alternates: { canonical: `${SITE_URL}/remote-mern-developer` },
  openGraph: {
    title: 'Remote MERN Stack Developer for Hire | Abin PM',
    description:
      '9+ years MERN stack development. IBM, Abercrombie & Fitch, National Grid, Paragon Energy. Async-first, US/UK timezone overlap. React, Node.js, MongoDB, AWS.',
    url: `${SITE_URL}/remote-mern-developer`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const stack = [
  { label: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices'] },
  { label: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Azure', 'Docker', 'CI/CD'] },
];

const remoteSignals = [
  { icon: '🌍', title: 'US & UK client history', desc: 'IBM (US), Abercrombie & Fitch (US), National Grid (US), Paragon Energy (UK) — all delivered remotely across time zones.' },
  { icon: '⏱️', title: 'Async-first workflow', desc: 'Written communication, Jira/Scrum, Slack — designed for distributed teams where no response doesn\'t mean no progress.' },
  { icon: '🕐', title: 'Flexible timezone', desc: 'Based in Kochi, India (IST). Regular US EST/PST overlap available. UK BST morning sync included.' },
  { icon: '⚡', title: 'AI-accelerated delivery', desc: 'Cursor AI + GitHub Copilot + Claude used daily — output per sprint is materially higher than a traditional developer working the same hours.' },
  { icon: '💬', title: 'Communication-first', desc: 'Proactive updates, detailed PRs, stakeholder-friendly English. No radio silence until the PR is merged.' },
  { icon: '🔒', title: 'Enterprise reliability', desc: 'Every deployment meets the same standards as Fortune 500 production — not portfolio-grade code.' },
];

const hireFaq = faq.filter((_, i) => i < 4);

export default function RemoteMernDeveloperPage() {
  const personSchema = getPersonSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Remote MERN Stack Developer', url: `${SITE_URL}/remote-mern-developer` },
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
            <Link href="/projects" className="font-mono text-sm text-[#94a3b8] no-underline hover:text-[#6366f1]">
              Projects
            </Link>
          </div>
        </nav>

        <main className="mx-auto max-w-[1060px] px-6 py-20 md:px-10">

          {/* Hero */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-mono text-xs text-[#6366f1]">Available for Remote Work</span>
          </div>

          <h1 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Remote MERN Stack Developer<br />
            <span className="text-[#6366f1]">for Hire — React, Node.js & MongoDB</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-[#94a3b8]">
            9+ years building full-stack production systems with React, Node.js, MongoDB and cloud infrastructure.
            Trusted by IBM, Abercrombie &amp; Fitch, National Grid and Paragon Energy — entirely remote.
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex rounded-xl bg-[#6366f1] px-7 py-3.5 font-sans font-semibold text-white no-underline transition hover:opacity-90"
            >
              Get in touch →
            </a>
            <Link
              href="/projects"
              className="inline-flex rounded-xl border border-[rgba(99,102,241,0.35)] px-7 py-3.5 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(99,102,241,0.6)]"
            >
              View case studies →
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

          {/* Why remote works */}
          <h2 className="mb-8 font-sans text-2xl font-bold text-[#f1f5f9]">
            Why Hire a Remote MERN Developer from India?
          </h2>
          <div className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {remoteSignals.map((item) => (
              <div key={item.title} className="rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] p-6">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h3 className="mb-1 font-sans font-semibold text-[#f1f5f9]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* MERN Stack */}
          <h2 className="mb-8 font-sans text-2xl font-bold text-[#f1f5f9]">
            Full MERN Stack Technical Depth
          </h2>
          <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((group) => (
              <div key={group.label} className="rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] p-6">
                <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#6366f1]">{group.label}</div>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="font-mono text-sm text-[#94a3b8]">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Remote availability */}
          <h2 className="mb-6 font-sans text-2xl font-bold text-[#f1f5f9]">
            Remote Engagement Models
          </h2>
          <div className="mb-20 grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Freelance Contract', desc: 'Per-project or hourly. Scope → quote → build → ship. Clear deliverables and weekly updates.' },
              { title: 'Part-Time Remote', desc: '10–20 hours/week. Structured sprints with async-first communication. Ideal for ongoing product work.' },
              { title: 'Full-Time Remote', desc: 'Embedded as a senior engineer in your team. Full sprint participation, PR reviews, stakeholder sync.' },
            ].map((model) => (
              <div key={model.title} className="rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] p-6">
                <h3 className="mb-2 font-sans font-semibold text-[#f1f5f9]">{model.title}</h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{model.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="mb-8 font-sans text-2xl font-bold text-[#f1f5f9]">
            Common Questions About Hiring a Remote MERN Developer
          </h2>
          <div className="mb-20 space-y-4">
            {hireFaq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-sans font-semibold text-[#f1f5f9]">
                  {item.q}
                  <span className="ml-4 shrink-0 text-[#6366f1] transition group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-[#94a3b8]">{item.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.04)] p-10 text-center">
            <h2 className="mb-3 font-sans text-2xl font-bold text-[#f1f5f9]">
              Hire a Senior Remote MERN Stack Developer
            </h2>
            <p className="mb-8 text-[#94a3b8]">
              Kochi, India (IST). Available for US/UK timezone overlap. Responds within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex rounded-xl bg-[#6366f1] px-7 py-3.5 font-sans font-semibold text-white no-underline transition hover:opacity-90"
              >
                Email Abin
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl border border-[rgba(99,102,241,0.35)] px-7 py-3.5 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(99,102,241,0.6)]"
              >
                LinkedIn ↗
              </a>
              <Link
                href="/hire-me"
                className="inline-flex rounded-xl border border-[rgba(99,102,241,0.35)] px-7 py-3.5 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(99,102,241,0.6)]"
              >
                Full hire page →
              </Link>
            </div>
          </div>

          {/* Footer links */}
          <div className="mt-16 flex flex-wrap gap-6 border-t border-[rgba(99,102,241,0.1)] pt-10 font-mono text-sm">
            <Link href="/ai-mern-stack-developer" className="text-[#475569] no-underline hover:text-[#94a3b8]">AI MERN Stack Developer →</Link>
            <Link href="/skills" className="text-[#475569] no-underline hover:text-[#94a3b8]">Full Tech Stack →</Link>
            <Link href="/experience" className="text-[#475569] no-underline hover:text-[#94a3b8]">Work Experience →</Link>
            <Link href="/blog" className="text-[#475569] no-underline hover:text-[#94a3b8]">Engineering Blog →</Link>
          </div>

        </main>
      </div>
    </>
  );
}
