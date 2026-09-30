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
    canonical: 'https://www.abinaiengineer.com/skills',
  },
  openGraph: {
    title: 'Technical Skills | Abin PM — Senior MERN Stack & AI-Native Engineer',
    description:
      'React, Next.js, Node.js, TypeScript, AWS, GCP, Cursor AI, LLM Integration, GenAI — full spectrum stack by Abin PM, Senior Full Stack Developer from India.',
    url: 'https://www.abinaiengineer.com/skills',
  },
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-28">
        {/* Page hero */}
        <div className="mx-auto max-w-[1100px] px-6 pb-0 md:px-10">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="text-xs text-sage-dark">Technical Arsenal</span>
          </div>
          <h1 className="mt-4 text-4xl text-ink md:text-5xl">
            Full-Spectrum Stack for Hire
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            10+ years building production systems across frontend, backend, cloud, and AI tooling —
            as a senior MERN stack developer and AI-native engineer for hire from India.
          </p>
          <div className="mt-6 mb-2 flex flex-wrap gap-4 text-sm">
            <span className="text-sage-dark">React · Next.js · Node.js</span>
            <span className="text-sage-dark">Cursor AI · Copilot · Claude</span>
            <span className="text-sage-dark">AWS · GCP · Azure</span>
          </div>
        </div>

        {/* Full skills grid */}
        <Skills />

        {/* CTA strip */}
        <div className="border-t border-border py-20">
          <div className="mx-auto max-w-[1100px] px-6 text-center md:px-10">
            <p className="mb-6 font-serif text-2xl text-ink">
              Need a senior MERN stack developer who also ships with AI?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/hire-me"
                className="btn-primary"
              >
                Hire Me Now
              </a>
              <a
                href="/projects"
                className="btn-secondary"
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
