import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Experience | Enterprise React Developer Freelance | Abin PM',
  description:
    'Career timeline of Abin PM — 10+ years enterprise full stack development. IBM India (current), Emvigo Technologies, and more. React, Node.js, MERN, cloud. Freelance & remote available.',
  keywords: [
    'enterprise React developer freelance',
    'React developer Kochi Kerala',
    'senior full stack developer experience',
    'IBM React developer India',
    'freelance Node.js developer India',
    'MERN stack developer career',
  ],
  alternates: {
    canonical: 'https://www.abinaiengineer.com/experience',
  },
  openGraph: {
    title: 'Work Experience | Abin PM — Enterprise React & Full Stack Developer',
    description:
      'IBM India (current) · Emvigo Technologies · Luminescent Software · 10+ years enterprise full stack development. Available for freelance & remote roles.',
    url: 'https://www.abinaiengineer.com/experience',
  },
};

const PROOF_CARDS = [
  {
    metric: '96h → 2h',
    label: 'Operational turnaround cut',
    context: 'Paragon Energy · 200k+ smart meters · UK energy sector',
    href: '/projects/paragon',
    cta: 'See Paragon case study →',
    accent: 'indigo' as const,
  },
  {
    metric: 'SAS → Web',
    label: 'Legacy platform modernised',
    context: 'National Grid USA · React + Node.js · AI-assisted migration',
    href: '/projects/national-grid',
    cta: 'See National Grid case study →',
    accent: 'violet' as const,
  },
  {
    metric: 'Fortune 500',
    label: 'Enterprise clients delivered',
    context: 'IBM · Abercrombie & Fitch · National Grid · micro-frontend scale',
    href: '/projects',
    cta: 'View all case studies →',
    accent: 'cyan' as const,
  },
];

const accentMap = {
  indigo: {
    border: 'border-border-strong',
    bg: 'bg-surface',
    metric: 'text-sage-dark',
    cta: 'text-sage-dark hover:text-sage-dark',
  },
  violet: {
    border: 'border-border-strong',
    bg: 'bg-surface',
    metric: 'text-sage-dark',
    cta: 'text-sage-dark hover:text-sage-dark',
  },
  cyan: {
    border: 'border-border-strong',
    bg: 'bg-surface',
    metric: 'text-sage-dark',
    cta: 'text-sage-dark hover:text-sage-dark',
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-28">

        {/* ── Page hero ── */}
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">

          {/* Label + availability */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
              <span className="text-xs text-sage-dark">Career Timeline</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
              <span className="text-xs text-sage-dark">Available now — open to new projects</span>
            </span>
          </div>

          {/* H1 + primary CTA side by side on desktop */}
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="text-4xl text-ink md:text-5xl">
              10+ Years Enterprise<br />Development
            </h1>
            {/* Primary CTA — dominant, single action */}
            <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
              <Link
                href="/hire-me"
                className="btn-primary"
                aria-label="Hire Abin PM — go to hire page"
              >
                Hire Me Now
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/projects" className="text-xs text-subtle hover:text-muted">
                View case studies →
              </Link>
            </div>
          </div>

          <p className="mb-3 max-w-2xl text-lg text-muted">
            From early-stage startups to Fortune 500 enterprises — enterprise React developer
            and MERN stack engineer with a proven track record across IBM, Abercrombie &amp; Fitch,
            National Grid, and Paragon Energy. Freelance &amp; remote available.
          </p>

          <div className="mb-10 flex flex-wrap gap-5 text-sm">
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-sage" />
              <span className="text-sage-dark">IBM India — Current</span>
            </span>
            <span className="text-muted">4 Companies · 3 Cloud Platforms</span>
            <span className="text-sage-dark">AI-Native since 2024</span>
          </div>

          {/* ── Proof / outcome cards ── */}
          <div className="mb-16 grid gap-4 sm:grid-cols-3" aria-label="Key client outcomes">
            {PROOF_CARDS.map((card) => {
              const a = accentMap[card.accent];
              return (
                <div
                  key={card.metric}
                  className={`flex flex-col gap-2 rounded-xl border ${a.border} ${a.bg} p-5`}
                >
                  <span className={`font-serif text-3xl ${a.metric}`}>{card.metric}</span>
                  <span className="font-sans text-sm font-semibold text-ink">{card.label}</span>
                  <span className="text-[11px] leading-relaxed text-subtle">{card.context}</span>
                  <Link
                    href={card.href}
                    className={`mt-auto text-[11px] ${a.cta} transition`}
                  >
                    {card.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Full experience timeline ── */}
        <Experience />

        {/* ── Bottom section: CTA + inline contact ── */}
        <div className="border-t border-border">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

              {/* Left — copy + CTA */}
              <div className="flex flex-col justify-center">
                <p className="mb-2 font-serif text-3xl text-ink">
                  Looking for an enterprise React developer?
                </p>
                <p className="mb-6 text-muted">
                  10+ years building production systems for Fortune 500 companies. Available for
                  freelance contracts and remote full-time roles globally — can start within days.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/hire-me"
                    className="btn-primary"
                  >
                    Hire Me Now
                  </Link>
                  <Link
                    href="/projects"
                    className="btn-secondary"
                  >
                    View Case Studies →
                  </Link>
                </div>
              </div>

              {/* Right — quick contact form */}
              <div>
                <p className="mb-4 font-sans font-semibold text-ink">
                  Or send a quick message
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
