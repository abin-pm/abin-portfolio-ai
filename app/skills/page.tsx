import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Skills | Senior MERN Stack Developer for Hire | Abin PM',
  description:
    'Full technical arsenal of Abin PM — Senior MERN Stack Developer & AI-Native Engineer from India. React, Next.js, Node.js, TypeScript, AWS, GCP, Cursor AI, LLM Integration, and more.',
  keywords: [
    'senior MERN stack developer for hire',
    'Node.js microservices developer',
    'React developer skills',
    'full stack developer tech stack',
    'AI-native developer India',
    'Cursor AI developer',
    'LLM integration developer',
  ],
  alternates: {
    canonical: 'https://abinaiengineer.com/skills',
  },
  openGraph: {
    title: 'Technical Skills | Abin PM — Senior MERN Stack & AI-Native Engineer',
    description:
      'React, Next.js, Node.js, TypeScript, AWS, GCP, Cursor AI, LLM Integration, GenAI — full spectrum stack by Abin PM, Senior Full Stack Developer from India.',
    url: 'https://abinaiengineer.com/skills',
  },
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] pt-28">
        {/* Page hero */}
        <div className="mx-auto max-w-[1100px] px-6 pb-0 md:px-10">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] px-4 py-1.5">
            <span className="font-mono text-xs text-[#6366f1]">Technical Arsenal</span>
          </div>
          <h1 className="mt-4 font-sans text-4xl font-bold tracking-tight text-[#f1f5f9] md:text-5xl">
            Full-Spectrum Stack for Hire
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
            9+ years building production systems across frontend, backend, cloud, and AI tooling —
            as a senior MERN stack developer and AI-native engineer for hire from India.
          </p>
          <div className="mt-6 mb-2 flex flex-wrap gap-4 font-mono text-sm">
            <span className="text-[#22d3ee]">React · Next.js · Node.js</span>
            <span className="text-[#a78bfa]">Cursor AI · Copilot · Claude</span>
            <span className="text-[#6366f1]">AWS · GCP · Azure</span>
          </div>
        </div>

        {/* Full skills grid */}
        <Skills />

        {/* CTA strip */}
        <div className="border-t border-[rgba(99,102,241,0.1)] py-20">
          <div className="mx-auto max-w-[1100px] px-6 text-center md:px-10">
            <p className="mb-6 font-sans text-xl font-semibold text-[#f1f5f9]">
              Need a senior MERN stack developer who also ships with AI?
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
