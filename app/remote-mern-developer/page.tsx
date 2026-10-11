import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity, faq } from '@/lib/data';
import { getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://www.abinaiengineer.com';

export const metadata: Metadata = {
  title: 'Remote MERN Stack Developer for Hire | React, Node.js, MongoDB | Abin PM',
  description:
    'Senior remote MERN stack developer with 10+ years of React and Node.js work for US, UK, European and Dubai clients. Freelance or full-time remote, open to relocation.',
  keywords: [
    'remote MERN stack developer',
    'hire MERN developer remote',
    'remote React Node.js developer',
    'MERN stack developer India remote',
    'senior full stack developer remote',
    'freelance MERN developer',
    'remote full stack developer India',
    'hire React Node MongoDB developer',
    'remote React developer Europe',
    'remote full stack developer Dubai',
  ],
  alternates: { canonical: `${SITE_URL}/remote-mern-developer` },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Remote MERN Stack Developer for Hire | Abin PM',
    description:
      'React, Node.js, MongoDB and AWS, 10+ years. Remote work for US, UK, European and Dubai clients, with good time zone overlap.',
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
  { icon: '🌍', title: 'Clients in the US, Europe and the UAE', desc: "Abercrombie & Fitch and National Grid in the US, L'Oréal and SuperSonic Imagine in France, Paragon Energy and Go Lyv in the UK, The First Group in Dubai. All from India." },
  { icon: '⏱️', title: 'Comfortable working async', desc: 'Clear written updates, Jira tickets that say what changed, and pull requests that explain themselves.' },
  { icon: '🕐', title: 'Good time zone overlap', desc: 'India (IST) is 1.5 hours ahead of Dubai and 3.5 to 4.5 hours ahead of Central Europe. I have also worked with US teams on their mornings.' },
  { icon: '⚡', title: 'AI tools on routine work', desc: 'Cursor, Copilot and Claude for drafting and refactoring, with every change still reviewed and tested.' },
  { icon: '💬', title: 'Regular communication', desc: 'I flag problems early and tell you what I am working on, so you are not left guessing.' },
  { icon: '✈️', title: 'Remote now, relocation possible', desc: 'For a full-time role I am open to moving to Dubai/UAE or Europe.' },
];

const hireFaq = faq.filter((_, i) => i < 4);

export default function RemoteMernDeveloperPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Remote MERN Stack Developer', url: `${SITE_URL}/remote-mern-developer` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="mx-auto max-w-[1060px] px-6 pt-32 pb-20 md:px-10">

          {/* Hero */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
            <span className="text-xs text-sage-dark">Available for remote work</span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight md:text-5xl">
            Remote MERN Stack Developer<br />
            <span className="text-sage-dark">React, Node.js &amp; MongoDB</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted">
            I&apos;ve spent 10+ years building React and Node.js apps for companies in the US, the UK,
            France and Dubai, nearly all of it remotely from India. I take freelance projects and
            full-time remote roles.
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
            {['IBM', "L'Oréal", 'Abercrombie & Fitch', 'National Grid', 'Paragon Energy', 'Go Lyv'].map((c) => (
              <span key={c} className="rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-muted">
                {c}
              </span>
            ))}
          </div>

          {/* Why remote works */}
          <h2 className="mb-8 text-2xl text-ink">
            What working with me remotely is like
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
            The MERN stack and what sits around it
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
            Ways to work together
          </h2>
          <div className="mb-20 grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Freelance contract', desc: 'Fixed price or hourly. We agree the scope, I send a quote, then build and ship with weekly updates.' },
              { title: 'Part-time remote', desc: '10 to 20 hours a week on an ongoing product, working in your sprints.' },
              { title: 'Full-time remote', desc: 'I join your team as a senior engineer: sprints, code reviews and stakeholder calls.' },
            ].map((model) => (
              <div key={model.title} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="mb-2 text-ink">{model.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{model.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="mb-8 text-2xl text-ink">
            Questions about hiring a remote MERN developer
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
              Kochi, India (IST, UTC+5:30). I work with Dubai, European, UK and US hours, and reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="btn-primary"
              >
                Email me
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
            <Link href="/blog" className="text-subtle no-underline hover:text-muted">Blog →</Link>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
