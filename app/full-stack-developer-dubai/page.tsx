import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity } from '@/lib/data';
import { getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://www.abinaiengineer.com';
const PATH = '/full-stack-developer-dubai';

export const metadata: Metadata = {
  title: 'Full Stack Developer for Dubai & UAE: Remote or Relocation | Abin PM',
  description:
    'Senior React, Next.js, Node.js and .NET developer for Dubai and UAE companies. Remote, freelance or relocation to Dubai. Already delivered portals for a Dubai client.',
  keywords: [
    'full stack developer Dubai',
    'hire React developer Dubai',
    'Next.js developer UAE',
    'freelance web developer Dubai',
    'remote developer for UAE company',
    '.NET developer Dubai',
    'senior software engineer relocate to Dubai',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Full Stack Developer for Dubai & UAE | Abin PM',
    description:
      'React, Next.js, Node.js and .NET. Remote, freelance or on-site in Dubai. 1.5 hours from UAE time.',
    url: PATH,
  },
  twitter: { card: 'summary_large_image' },
};

const relevantWork = [
  {
    href: '/projects/first-group',
    client: 'The First Group, Dubai',
    what: "An owners' investment portal on NopCommerce and a content portal on Umbraco 7, in C# and ASP.NET MVC.",
  },
  {
    href: '/projects/abercrombie',
    client: 'Abercrombie & Fitch',
    what: 'Product catalog, product pages and wishlist rebuilt as React micro frontends on a GraphQL BFF.',
  },
  {
    href: '/projects/loreal',
    client: "L'Oréal",
    what: 'Dashboards, KPI cards and charts for a retail analytics app used by thousands of staff.',
  },
  {
    href: '/projects/golyv',
    client: 'Go Lyv',
    what: 'Event creation and ticket sales on Next.js, GraphQL and AWS AppSync.',
  },
];

const options = [
  { title: 'Freelance or contract', desc: 'A defined project at a fixed price, or hourly or monthly for ongoing work. I invoice from India.' },
  { title: 'Full-time remote', desc: 'I join your team as a senior engineer and work UAE hours from Kochi.' },
  { title: 'Relocation to Dubai', desc: 'For the right full-time role I am open to moving to Dubai, through your normal employment visa process.' },
];

const dubaiFaq = [
  {
    q: 'Can you work UAE hours from India?',
    a: "Yes, easily. Dubai is UTC+4 and India is UTC+5:30, so I'm only 1.5 hours ahead. A 9 to 6 day in Dubai is 10:30 to 7:30 for me. Since the UAE moved to a Saturday and Sunday weekend, our working weeks line up too.",
  },
  {
    q: 'Are you open to relocating to Dubai?',
    a: "Yes, for a full-time role that's a good fit. Relocation would go through the employer's usual employment visa process. Kochi to Dubai is about a four-hour flight, so visiting for interviews or kickoff meetings is straightforward too.",
  },
  {
    q: 'Have you worked with Dubai companies before?',
    a: "Yes. At Luminescent Software I built two portals for The First Group in Dubai: an owners' investment portal on NopCommerce and a content portal on Umbraco 7 that their team could update without a developer.",
  },
  {
    q: 'What kind of Dubai projects are a good fit?',
    a: "Web platforms with real users and real data: e-commerce, booking and ticketing, customer and owner portals, internal dashboards, and replacing old .NET or Java systems with React and Next.js. I don't have Arabic or right-to-left UI experience on a shipped project yet, so I'll tell you that up front if your product needs it.",
  },
];

export default function DubaiPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Full Stack Developer for Dubai & UAE', url: `${SITE_URL}${PATH}` },
  ]);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dubaiFaq.map((item) => ({
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
            <span className="text-xs text-sage-dark">Available for UAE roles and projects</span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight md:text-5xl">
            Full Stack Developer for Dubai &amp; the UAE<br />
            <span className="text-sage-dark">remote, freelance or relocation</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted">
            I&apos;m a senior full stack engineer at IBM with 10+ years of React, Next.js, Node.js and
            .NET work. I&apos;ve built for a Dubai company before, I&apos;m only 1.5 hours ahead of
            UAE time, and I&apos;m open to moving to Dubai for the right full-time role.
          </p>

          <div className="mb-16 flex flex-wrap gap-4">
            <a href={`mailto:${identity.email}`} className="btn-primary">
              Email me about a role or project →
            </a>
            <Link href="/projects" className="btn-secondary">
              See my work →
            </Link>
          </div>

          <h2 className="mb-6 text-2xl text-ink">Work that&apos;s relevant to UAE companies</h2>
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
            Dubai runs on Gulf Standard Time (UTC+4) all year, and India is UTC+5:30. A 9:00 to 18:00
            day in Dubai is 10:30 to 19:30 in Kochi, so we share the whole day for calls, stand-ups
            and reviews. There&apos;s no daylight saving on either side, so the gap never changes.
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
            React, Next.js and TypeScript on the frontend. Node.js, NestJS, Express and .NET Core for
            APIs, including GraphQL and BFF layers. PostgreSQL, SQL Server, MySQL and MongoDB. AWS,
            Azure and GCP, with Docker and CI/CD. The full list is on the{' '}
            <Link href="/skills" className="text-sage-dark underline-offset-4 hover:underline">skills page</Link>.
          </p>

          <h2 className="mb-8 text-2xl text-ink">Questions from UAE employers and clients</h2>
          <div className="mb-16 space-y-4">
            {dubaiFaq.map((item) => (
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
            <h2 className="mb-3 text-2xl text-ink">Hiring a developer in Dubai?</h2>
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
            <Link href="/remote-developer-europe" className="text-subtle no-underline hover:text-muted">Remote Developer for Europe →</Link>
            <Link href="/remote-mern-developer" className="text-subtle no-underline hover:text-muted">Remote MERN Developer →</Link>
            <Link href="/experience" className="text-subtle no-underline hover:text-muted">Work Experience →</Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
