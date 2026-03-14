import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';

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
    canonical: 'https://abinaiengineer.com/experience',
  },
  openGraph: {
    title: 'Work Experience | Abin PM — Enterprise React & Full Stack Developer',
    description:
      'IBM India (current) · Emvigo Technologies · Luminescent Software · 9+ years enterprise full stack development. Available for freelance & remote roles.',
    url: 'https://abinaiengineer.com/experience',
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] pt-28">
        {/* Page hero */}
        <div className="mx-auto max-w-[1100px] px-6 pb-0 md:px-10">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] px-4 py-1.5">
            <span className="font-mono text-xs text-[#6366f1]">Career Timeline</span>
          </div>
          <h1 className="mt-4 font-sans text-4xl font-bold tracking-tight text-[#f1f5f9] md:text-5xl">
            9+ Years Enterprise Development
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
            From early-stage startups to Fortune 500 enterprises — enterprise React developer
            and MERN stack engineer with a track record across IBM, Abercrombie &amp; Fitch,
            National Grid, and Paragon Energy. Freelance &amp; remote available.
          </p>
          <div className="mt-6 mb-2 flex flex-wrap gap-6 font-mono text-sm">
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#6366f1] shadow-[0_0_8px_#6366f1]" />
              <span className="text-[#22d3ee]">IBM India — Current</span>
            </span>
            <span className="text-[#94a3b8]">4 Companies · 3 Cloud Platforms</span>
            <span className="text-[#a78bfa]">AI-Native since 2024</span>
          </div>
        </div>

        {/* Full experience timeline */}
        <Experience />

        {/* CTA strip */}
        <div className="border-t border-[rgba(99,102,241,0.1)] py-20">
          <div className="mx-auto max-w-[1100px] px-6 text-center md:px-10">
            <p className="mb-2 font-sans text-xl font-semibold text-[#f1f5f9]">
              Looking for an enterprise React developer with a proven track record?
            </p>
            <p className="mb-8 text-[#94a3b8]">
              Available for freelance contracts and remote full-time roles globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/hire-me"
                className="rounded-xl bg-[#6366f1] px-8 py-3.5 font-sans font-semibold text-white no-underline transition hover:opacity-90"
              >
                Hire Me Now
              </a>
              <a
                href="/projects"
                className="rounded-xl border border-[rgba(99,102,241,0.35)] px-8 py-3.5 font-sans font-semibold text-[#f1f5f9] no-underline transition hover:border-[rgba(99,102,241,0.6)]"
              >
                View Projects →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
