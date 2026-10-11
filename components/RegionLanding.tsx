import Link from 'next/link';
import type { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { identity } from '@/lib/data';
import { getBreadcrumbSchema } from '@/lib/json-ld';

const SITE_URL = 'https://www.abinaiengineer.com';

export type RegionFAQ = { q: string; a: string };

export type RegionLandingProps = {
  path: string;
  breadcrumb: string;
  badge: string;
  title: ReactNode;
  titleAccent: ReactNode;
  intro: ReactNode;
  workHeading: string;
  /** Shown under the work heading, e.g. to say plainly there's no past client in the region. */
  workNote?: ReactNode;
  work: { href: string; client: string; what: string }[];
  timezones: { place: string; diff: string; overlap: string }[];
  hoursNote: ReactNode;
  options: { title: string; desc: string }[];
  faqHeading: string;
  faq: RegionFAQ[];
  ctaHeading: string;
};

/** Region links shown at the bottom of every region page (the current one is skipped). */
export const REGION_PAGES = [
  { href: '/remote-developer-relocation', label: 'All regions & relocation' },
  { href: '/remote-developer-usa', label: 'Remote Developer for the US' },
  { href: '/remote-developer-europe', label: 'Remote Developer for Europe' },
  { href: '/full-stack-developer-dubai', label: 'Developer for Dubai & UAE' },
  { href: '/remote-developer-asia-pacific', label: 'Developer for Asia-Pacific' },
];

export function faqSchema(faq: RegionFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

// Shared layout for the region hiring pages (US, Europe, Dubai, Asia-Pacific, and the hub).
// Each page owns its copy; this keeps structure, schema and styling consistent.
export function RegionLanding(props: RegionLandingProps) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: props.breadcrumb, url: `${SITE_URL}${props.path}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(props.faq)) }} />

      <div className="min-h-screen bg-cream text-ink">
        <Navbar />

        <main className="mx-auto max-w-[1060px] px-6 pt-32 pb-20 md:px-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
            <span className="text-xs text-sage-dark">{props.badge}</span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight md:text-5xl">
            {props.title}<br />
            <span className="text-sage-dark">{props.titleAccent}</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted">{props.intro}</p>

          <div className="mb-16 flex flex-wrap gap-4">
            <a href={`mailto:${identity.email}`} className="btn-primary">
              Email me about a role or project →
            </a>
            <Link href="/projects" className="btn-secondary">
              See my work →
            </Link>
          </div>

          <h2 className="mb-3 text-2xl text-ink">{props.workHeading}</h2>
          {props.workNote && <p className="mb-6 max-w-2xl text-sm text-muted">{props.workNote}</p>}
          <div className={`mb-16 grid gap-4 sm:grid-cols-2 ${props.workNote ? '' : 'mt-6'}`}>
            {props.work.map((w) => (
              <Link
                key={w.href + w.client}
                href={w.href}
                className="group rounded-xl border border-border bg-surface p-6 no-underline transition hover:border-border-strong"
              >
                <div className="mb-2 font-sans font-semibold text-ink transition group-hover:text-sage-dark">{w.client}</div>
                <p className="text-sm leading-relaxed text-muted">{w.what}</p>
              </Link>
            ))}
          </div>

          <h2 className="mb-3 text-2xl text-ink">Working hours</h2>
          <p className="mb-6 max-w-2xl text-sm text-muted">{props.hoursNote}</p>
          <div className="mb-16 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface text-left text-xs uppercase tracking-widest text-subtle">
                  <th className="px-5 py-3">Where you are</th>
                  <th className="px-5 py-3">Difference from India</th>
                  <th className="px-5 py-3">Shared hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {props.timezones.map((t) => (
                  <tr key={t.place} className="bg-cream">
                    <td className="px-5 py-3 font-semibold text-ink">{t.place}</td>
                    <td className="px-5 py-3 text-muted">{t.diff}</td>
                    <td className="px-5 py-3 text-muted">{t.overlap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mb-6 text-2xl text-ink">How we could work together</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-3">
            {props.options.map((o) => (
              <div key={o.title} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="mb-2 text-ink">{o.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{o.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-2xl text-ink">What I work with</h2>
          <p className="mb-16 max-w-2xl leading-relaxed text-muted">
            React, Next.js and TypeScript, including micro frontends and GraphQL BFFs. Node.js,
            NestJS, Express and .NET Core for APIs. PostgreSQL, SQL Server, MySQL, MongoDB and
            Elasticsearch. AWS, Azure and GCP with Docker and CI/CD. Jest, Playwright and WCAG
            accessibility. The full list is on the{' '}
            <Link href="/skills" className="text-sage-dark underline-offset-4 hover:underline">skills page</Link>.
          </p>

          <h2 className="mb-8 text-2xl text-ink">{props.faqHeading}</h2>
          <div className="mb-16 space-y-4">
            {props.faq.map((item) => (
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
            <h2 className="mb-3 text-2xl text-ink">{props.ctaHeading}</h2>
            <p className="mb-8 text-muted">Send me the role or the project. I reply within 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${identity.email}`} className="btn-primary">Email me</a>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn ↗
              </a>
              <Link href="/hire-me" className="btn-secondary">How hiring me works →</Link>
            </div>
          </div>

          <nav aria-label="Other regions" className="mt-16 flex flex-wrap gap-6 border-t border-border pt-10 text-sm">
            {REGION_PAGES.filter((r) => r.href !== props.path).map((r) => (
              <Link key={r.href} href={r.href} className="text-subtle no-underline hover:text-muted">
                {r.label} →
              </Link>
            ))}
          </nav>
        </main>
        <Footer />
      </div>
    </>
  );
}
