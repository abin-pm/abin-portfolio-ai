import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Skills | Senior MERN Stack Developer for Hire | Abin PM',
  description:
    'Skills of Abin PM, senior full stack engineer: React, Next.js, TypeScript, Node.js, NestJS, .NET Core, GraphQL, PostgreSQL, MongoDB, AWS, Azure, GCP and AI-assisted development.',
  keywords: [
    'senior MERN stack developer for hire',
    'Node.js microservices developer',
    'React developer skills',
    'full stack developer tech stack',
    'Next.js and .NET Core developer',
    'remote React developer skills',
    'LLM integration developer',
  ],
  alternates: {
    canonical: 'https://www.abinaiengineer.com/skills',
  },
  openGraph: {
    // Pages that set openGraph drop the root file-based image, so reference it explicitly.
    images: ['/opengraph-image'],
    title: 'Technical Skills | Abin PM, Senior Full Stack Engineer',
    description:
      'React, Next.js, Node.js, .NET Core, GraphQL, PostgreSQL, AWS, Azure and GCP: what Abin PM has used in production.',
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
            <span className="text-xs text-sage-dark">Skills</span>
          </div>
          <h1 className="mt-4 text-4xl text-ink md:text-5xl">
            Full stack skills, from React to the cloud
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Everything here I&apos;ve used on real client projects over the last ten years. If you
            need something that isn&apos;t listed, ask; I&apos;ll tell you honestly how close it is.
          </p>
          <div className="mt-6 mb-2 flex flex-wrap gap-4 text-sm">
            <span className="text-sage-dark">React · Next.js · Node.js</span>
            <span className="text-sage-dark">.NET Core · GraphQL · PostgreSQL</span>
            <span className="text-sage-dark">AWS · GCP · Azure</span>
          </div>
        </div>

        {/* Full skills grid */}
        <Skills />

        {/* CTA strip */}
        <div className="border-t border-border py-20">
          <div className="mx-auto max-w-[1100px] px-6 text-center md:px-10">
            <p className="mb-6 font-serif text-2xl text-ink">
              Need a senior full stack developer for a project or a role?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/hire-me"
                className="btn-primary"
              >
                Hire me
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
