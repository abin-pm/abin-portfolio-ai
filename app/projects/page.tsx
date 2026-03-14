import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects | Abin PM — Full Stack & AI Engineer',
  description:
    'Key projects by Abin PM: enterprise React, Next.js, Node.js platforms for IBM, Abercrombie & Fitch, National Grid, Paragon Energy, and more.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neural-bg pt-28">
        <section className="mx-auto max-w-[1100px] px-6 py-20 md:px-10">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-indigo">
            <span className="h-px w-6 bg-indigo" />
            Portfolio
          </div>
          <h1 className="mb-4 font-sans text-4xl font-800 tracking-tight text-[#f1f5f9] md:text-5xl">
            Projects
          </h1>
          <p className="mb-14 max-w-[480px] font-light text-[#94a3b8]">
            Enterprise-scale platforms shipped for global clients across retail, energy, and SaaS.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="relative rounded-xl border border-neural-border bg-neural-surface p-8 transition hover:border-indigo/35"
              >
                {project.aiAssisted && (
                  <span className="absolute right-4 top-4 rounded-full border border-violet/40 bg-violet/10 px-3 py-1 font-mono text-xs text-violet">
                    🤖 AI-Assisted
                  </span>
                )}
                <div className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo">
                  {project.flag} {project.client}
                </div>
                <h2 className="mb-3 font-sans text-xl font-700 text-[#f1f5f9]">
                  {project.title}
                </h2>
                <p className="mb-4 text-sm text-[#94a3b8]">{project.description}</p>
                <ul className="mb-4 list-inside list-disc text-sm text-indigo">
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.aiNote && (
                  <p className="mb-3 font-mono text-xs text-violet">{project.aiNote}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[rgba(99,102,241,0.08)] px-2 py-0.5 font-mono text-xs text-[#94a3b8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex rounded-md bg-indigo px-6 py-3 font-sans font-600 text-white no-underline transition hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
