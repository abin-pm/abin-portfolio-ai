import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity, faq } from '@/lib/data';
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://www.abinaiengineer.com';

export const metadata: Metadata = {
  title: 'Remote MERN Stack Developer for Hire | React, Node.js, MongoDB | Abin PM',
  description:
    'Senior remote MERN stack developer with 10+ years experience. React, Node.js, MongoDB, Express. Proven track record with US & UK clients (IBM, Abercrombie & Fitch, National Grid). Available now.',
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
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Remote MERN Stack Developer for Hire | Abin PM',
    description:
      '10+ years MERN stack development. IBM, Abercrombie & Fitch, National Grid, Paragon Energy. Async-first, US/UK timezone overlap. React, Node.js, MongoDB, AWS.',
    url: `${SITE_URL}/remote-mern-developer`,
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
  { icon: '🔒', title: 'Enterprise reliability', desc: 'Every deployment meets the same standards as enterprise production — not portfolio-grade code.' },
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

      <div className="min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="mx-auto max-w-[1060px] px-6 pt-32 pb-20 md:px-10">

          {/* Hero */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
            <span className="text-xs text-sage-dark">Available for Remote Work</span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight md:text-5xl">
            Remote MERN Stack Developer<br />
            <span className="text-sage-dark">for Hire — React, Node.js & MongoDB</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted">
            10+ years building full-stack production systems with React, Node.js, MongoDB and cloud infrastructure.
            Trusted by IBM, Abercrombie &amp; Fitch, National Grid and Paragon Energy — entirely remote.
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href={`mailto:${identity.email}`}
              className="btn-primary"
            >
              Get in touch →
            </a>
            <Link
              href="/projects"
              className="btn-secondary"
            >
              View case studies →
            </Link>
          </div>

          {/* Client logos */}
          <div className="mb-20 flex flex-wrap gap-3 border-y border-border py-6">
            {['IBM', 'Abercrombie & Fitch', 'National Grid', 'Paragon Energy'].map((c) => (
              <span key={c} className="rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-muted">
                {c}
              </span>
            ))}
          </div>

          {/* Why remote works */}
          <h2 className="mb-8 text-2xl text-ink">
            Why Hire a Remote MERN Developer from India?
          </h2>
          <div className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {remoteSignals.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-surface p-6">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h3 className="mb-1 text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* MERN Stack */}
          <h2 className="mb-8 text-2xl text-ink">
            Full MERN Stack Technical Depth
          </h2>
          <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((group) => (
              <div key={group.label} className="rounded-xl border border-border bg-surface p-6">
                <div className="mb-3 text-xs uppercase tracking-widest text-sage-dark">{group.label}</div>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Remote availability */}
          <h2 className="mb-6 text-2xl text-ink">
            Remote Engagement Models
          </h2>
          <div className="mb-20 grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Freelance Contract', desc: 'Per-project or hourly. Scope → quote → build → ship. Clear deliverables and weekly updates.' },
              { title: 'Part-Time Remote', desc: '10–20 hours/week. Structured sprints with async-first communication. Ideal for ongoing product work.' },
              { title: 'Full-Time Remote', desc: 'Embedded as a senior engineer in your team. Full sprint participation, PR reviews, stakeholder sync.' },
            ].map((model) => (
              <div key={model.title} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="mb-2 text-ink">{model.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{model.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="mb-8 text-2xl text-ink">
            Common Questions About Hiring a Remote MERN Developer
          </h2>
          <div className="mb-20 space-y-4">
            {hireFaq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-border bg-surface">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-sans font-semibold text-ink">
                  {item.q}
                  <span className="ml-4 shrink-0 text-sage-dark transition group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-border bg-surface p-10 text-center">
            <h2 className="mb-3 text-2xl text-ink">
              Hire a Senior Remote MERN Stack Developer
            </h2>
            <p className="mb-8 text-muted">
              Kochi, India (IST). Available for US/UK timezone overlap. Responds within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="btn-primary"
              >
                Email Abin
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn ↗
              </a>
              <Link
                href="/hire-me"
                className="btn-secondary"
              >
                Full hire page →
              </Link>
            </div>
          </div>

          {/* Footer links */}
          <div className="mt-16 flex flex-wrap gap-6 border-t border-border pt-10 text-sm">
            <Link href="/ai-mern-stack-developer" className="text-subtle no-underline hover:text-muted">AI MERN Stack Developer →</Link>
            <Link href="/skills" className="text-subtle no-underline hover:text-muted">Full Tech Stack →</Link>
            <Link href="/experience" className="text-subtle no-underline hover:text-muted">Work Experience →</Link>
            <Link href="/blog" className="text-subtle no-underline hover:text-muted">Engineering Blog →</Link>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
