'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-neural-bg px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-indigo">
          <span className="h-px w-6 bg-indigo" />
          Selected Work
        </div>
        <h2 className="mb-4 font-sans text-3xl font-800 tracking-tight md:text-4xl">
          Key Projects
        </h2>
        <p className="mb-14 max-w-[480px] font-light text-[#94a3b8]">
          Enterprise-scale platforms shipped for global clients across retail, energy, and SaaS.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-xl border border-neural-border bg-neural-surface p-8 transition hover:-translate-y-1 hover:border-indigo/35"
            >
              {project.aiAssisted && (
                <span className="absolute right-4 top-4 rounded-full border border-violet/40 bg-violet/10 px-3 py-1 font-mono text-xs text-violet">
                  🤖 AI-Assisted
                </span>
              )}
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo">
                {project.flag} {project.client}
              </div>
              <h3 className="mb-3 font-sans text-xl font-700 text-[#f1f5f9]">{project.title}</h3>
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
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-indigo px-6 py-3 font-sans font-600 text-white transition hover:opacity-90"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
