import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Experience | Enterprise React Developer Freelance | Abin PM',
  description:
    'Career timeline of Abin PM — 9+ years enterprise full stack development. IBM India (current), Emvigo Technologies, and more. React, Node.js, MERN, cloud. Freelance & remote available.',
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
      'IBM India (current) · Emvigo Technologies · Luminescent Software · 9+ years enterprise full stack development. Available for freelance & remote roles.',
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
    context: 'National Grid USA · React + .NET Core · AI-assisted migration',
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
    border: 'border-[rgba(99,102,241,0.25)]',
    bg: 'bg-[rgba(99,102,241,0.05)]',
    metric: 'text-[#6366f1]',
    cta: 'text-[#6366f1] hover:text-[#818cf8]',
  },
  violet: {
    border: 'border-[rgba(167,139,250,0.25)]',
    bg: 'bg-[rgba(167,139,250,0.05)]',
    metric: 'text-[#a78bfa]',
    cta: 'text-[#a78bfa] hover:text-[#c4b5fd]',
  },
  cyan: {
    border: 'border-[rgba(34,211,238,0.25)]',
    bg: 'bg-[rgba(34,211,238,0.05)]',
    metric: 'text-[#22d3ee]',
    cta: 'text-[#22d3ee] hover:text-[#67e8f9]',
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] pt-28">

        {/* ── Page hero ── */}
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">

          {/* Label + availability */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] px-4 py-1.5">
              <span className="font-mono text-xs text-[#6366f1]">Career Timeline</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,211,238,0.3)] bg-[rgba(34,211,238,0.05)] px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-[#22d3ee]">Available now — open to new projects</span>
            </span>
          </div>

          {/* H1 + primary CTA side by side on desktop */}
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="font-sans text-4xl font-bold tracking-tight text-[#f1f5f9] md:text-5xl">
              9+ Years Enterprise<br />Development
            </h1>
            {/* Primary CTA — dominant, single action */}
            <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
              <Link
                href="/hire-me"
                className="inline-flex items-center gap-2 rounded-xl bg-[#6366f1] px-7 py-3.5 font-sans font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] transition hover:opacity-90 hover:shadow-[0_0_45px_rgba(99,102,241,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]"
                aria-label="Hire Abin PM — go to hire page"
              >
                Hire Me Now
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/projects" className="font-mono text-xs text-[#475569] hover:text-[#94a3b8]">
                View case studies →
              </Link>
            </div>
          </div>

          <p className="mb-3 max-w-2xl text-lg text-[#94a3b8]">
            From early-stage startups to Fortune 500 enterprises — enterprise React developer
            and MERN stack engineer with a proven track record across IBM, Abercrombie &amp; Fitch,
            National Grid, and Paragon Energy. Freelance &amp; remote available.
          </p>

          <div className="mb-10 flex flex-wrap gap-5 font-mono text-sm">
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#6366f1] shadow-[0_0_8px_#6366f1]" />
              <span className="text-[#22d3ee]">IBM India — Current</span>
            </span>
            <span className="text-[#94a3b8]">4 Companies · 3 Cloud Platforms</span>
            <span className="text-[#a78bfa]">AI-Native since 2024</span>
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
                  <span className={`font-sans text-2xl font-bold ${a.metric}`}>{card.metric}</span>
                  <span className="font-sans text-sm font-semibold text-[#f1f5f9]">{card.label}</span>
                  <span className="font-mono text-[11px] leading-relaxed text-[#475569]">{card.context}</span>
                  <Link
                    href={card.href}
                    className={`mt-auto font-mono text-[11px] ${a.cta} transition`}
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
        <div className="border-t border-[rgba(99,102,241,0.1)]">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

              {/* Left — copy + CTA */}
              <div className="flex flex-col justify-center">
                <p className="mb-2 font-sans text-2xl font-bold text-[#f1f5f9]">
                  Looking for an enterprise React developer?
                </p>
                <p className="mb-6 text-[#94a3b8]">
                  9+ years building production systems for Fortune 500 companies. Available for
                  freelance contracts and remote full-time roles globally — can start within days.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/hire-me"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#6366f1] px-7 py-3.5 font-sans font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]"
                  >
                    Hire Me Now
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-xl border border-[rgba(99,102,241,0.3)] px-7 py-3.5 font-sans font-semibold text-[#f1f5f9] transition hover:border-[rgba(99,102,241,0.6)] hover:bg-[rgba(99,102,241,0.06)]"
                  >
                    View Case Studies →
                  </Link>
                </div>
              </div>

              {/* Right — quick contact form */}
              <div>
                <p className="mb-4 font-sans font-semibold text-[#f1f5f9]">
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
