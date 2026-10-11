import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity } from '@/lib/data';
import { getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://www.abinaiengineer.com';
const PATH = '/remote-developer-europe';

export const metadata: Metadata = {
  title: 'Remote Full Stack Developer for European Companies | React, Node.js | Abin PM',
  description:
    'Senior remote React, Next.js and Node.js developer for companies in Europe and the UK. Past work for L’Oréal, SuperSonic Imagine and Paragon Energy. Remote, freelance or relocation.',
  keywords: [
    'remote full stack developer Europe',
    'hire remote React developer Europe',
    'freelance Next.js developer Europe',
    'remote Node.js contractor EU',
    'senior developer relocate to Europe',
    'remote developer CET time zone',
    'React developer for UK company',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Remote Full Stack Developer for European Companies | Abin PM',
    description:
      'React, Next.js and Node.js for European and UK teams. Remote, freelance or relocation. Most of your working day overlaps with mine.',
    url: PATH,
  },
  twitter: { card: 'summary_large_image' },
};

const relevantWork = [
  {
    href: '/projects/loreal',
    client: "L'Oréal (France)",
    what: 'Version 2 of the Retail Gold analytics UI: eight modules of dashboards, KPI cards and charts in Next.js.',
  },
  {
    href: '/projects/supersonic-imagine',
    client: 'SuperSonic Imagine (France)',
    what: 'Corporate website in Next.js on Strapi, so the content team can publish without a developer.',
  },
  {
    href: '/projects/paragon',
    client: 'Paragon Energy (UK)',
    what: 'Asset platform for 200,000+ smart meters. Reporting went from 96 hours to under 2.',
  },
  {
    href: '/projects/golyv',
    client: 'Go Lyv (UK)',
    what: 'Event and ticketing platform on Next.js, GraphQL and AWS AppSync. I led the frontend team.',
  },
];

const options = [
  { title: 'Freelance or B2B contract', desc: 'I invoice you directly for a fixed-price project or hourly or monthly work. No local entity needed on your side.' },
  { title: 'Full-time remote', desc: 'Directly, or through an employer-of-record service if you hire that way. I work your core hours from India.' },
  { title: 'Relocation to Europe', desc: 'For the right full-time role I am open to moving, through your normal work-permit process.' },
];

const europeFaq = [
  {
    q: 'How much of the European working day do we share?',
    a: "Most of it. India is 4.5 hours ahead of Central European Time in winter and 3.5 hours ahead in summer. A 9:00 to 17:00 day in Berlin, Paris or Amsterdam is 13:30 to 21:30 in Kochi in winter, which I can work. For the UK the gap is 5.5 hours in winter and 4.5 in summer.",
  },
  {
    q: 'Have you worked with European companies?',
    a: "Yes. Through IBM I'm working on L'Oréal's Retail Gold analytics app. At Emvigo I built SuperSonic Imagine's corporate website for the French company, and worked on Paragon Energy and Go Lyv for UK clients, leading the frontend team on both.",
  },
  {
    q: 'Do you have accessibility experience?',
    a: 'Yes. On the Abercrombie & Fitch micro frontends, WCAG accessibility was part of every feature I built, alongside analytics, A/B tests and Playwright tests. That matters if you sell online in the EU, where the European Accessibility Act has applied since June 2025.',
  },
  {
    q: 'Are you open to relocating to Europe?',
    a: "Yes, for a full-time role that's a good fit. It would go through the employer's usual work-permit process. Starting remotely and relocating later is also fine with me.",
  },
];

export default function EuropePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Remote Developer for Europe', url: `${SITE_URL}${PATH}` },
  ]);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: europeFaq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="mx-auto max-w-[1060px] px-6 pt-32 pb-20 md:px-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
            <span className="text-xs text-sage-dark">Available for European roles and projects</span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight md:text-5xl">
            Remote Full Stack Developer<br />
            <span className="text-sage-dark">for companies in Europe and the UK</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted">
            I&apos;m a senior React, Next.js and Node.js engineer at IBM with 10+ years of experience,
            much of it for clients in France and the UK. I work remotely across European hours, take
            freelance projects, and I&apos;m open to relocating for the right full-time role.
          </p>

          <div className="mb-16 flex flex-wrap gap-4">
            <a href={`mailto:${identity.email}`} className="btn-primary">
              Email me about a role or project →
            </a>
            <Link href="/projects" className="btn-secondary">
              See my work →
            </Link>
          </div>

          <h2 className="mb-6 text-2xl text-ink">Work for European and UK clients</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-2">
            {relevantWork.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className="group rounded-xl border border-border bg-surface p-6 no-underline transition hover:border-border-strong"
              >
                <div className="mb-2 font-sans font-semibold text-ink transition group-hover:text-sage-dark">{w.client}</div>
                <p className="text-sm leading-relaxed text-muted">{w.what}</p>
              </Link>
            ))}
          </div>

          <h2 className="mb-4 text-2xl text-ink">Working hours</h2>
          <p className="mb-16 max-w-2xl leading-relaxed text-muted">
            I&apos;m on India Standard Time (UTC+5:30). That&apos;s 3.5 to 4.5 hours ahead of Central
            Europe and 4.5 to 5.5 hours ahead of the UK, depending on daylight saving. My afternoon
            and evening cover your working day, and my morning gives me focused time before your
            day starts.
          </p>

          <h2 className="mb-6 text-2xl text-ink">How we could work together</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-3">
            {options.map((o) => (
              <div key={o.title} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="mb-2 text-ink">{o.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{o.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-2xl text-ink">What I work with</h2>
          <p className="mb-16 max-w-2xl leading-relaxed text-muted">
            React, Next.js and TypeScript, micro frontends and GraphQL BFFs on the frontend side.
            Node.js, NestJS and .NET Core for APIs. PostgreSQL, MongoDB and Elasticsearch. AWS,
            Azure and GCP with Docker and CI/CD. Jest, Playwright and WCAG accessibility for quality.
            The full list is on the{' '}
            <Link href="/skills" className="text-sage-dark underline-offset-4 hover:underline">skills page</Link>.
          </p>

          <h2 className="mb-8 text-2xl text-ink">Questions from European employers and clients</h2>
          <div className="mb-16 space-y-4">
            {europeFaq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-border bg-surface">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-sans font-semibold text-ink">
                  {item.q}
                  <span className="ml-4 shrink-0 text-sage-dark transition group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-surface p-10 text-center">
            <h2 className="mb-3 text-2xl text-ink">Hiring a remote developer in Europe?</h2>
            <p className="mb-8 text-muted">
              Send me the role or the project. I reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${identity.email}`} className="btn-primary">Email me</a>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn ↗
              </a>
              <Link href="/hire-me" className="btn-secondary">How hiring me works →</Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-6 border-t border-border pt-10 text-sm">
            <Link href="/full-stack-developer-dubai" className="text-subtle no-underline hover:text-muted">Developer for Dubai &amp; UAE →</Link>
            <Link href="/remote-mern-developer" className="text-subtle no-underline hover:text-muted">Remote MERN Developer →</Link>
            <Link href="/experience" className="text-subtle no-underline hover:text-muted">Work Experience →</Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
