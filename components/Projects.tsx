'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

function ProjectCard({
  project,
  large = false,
  index = 0,
}: {
  project: (typeof projects)[0];
  large?: boolean;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`card relative ${project.aiAssisted ? 'card-violet' : ''} ${large ? 'p-8' : 'p-6'}`}
    >
      {project.aiAssisted && (
        <span className="absolute right-4 top-4 z-10 rounded-full border border-[rgba(167,139,250,0.4)] bg-[rgba(167,139,250,0.1)] px-3 py-1 font-mono text-[10px] text-[#a78bfa]">
          🤖 AI-Assisted
        </span>
      )}
      <div className="relative z-10">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-xl">{project.flag}</span>
        <span className="font-mono text-xs text-[#6366f1]">{project.client}</span>
        <span className="rounded bg-[rgba(99,102,241,0.1)] px-2 py-0.5 font-mono text-[10px] text-[#475569]">
          {project.category}
        </span>
      </div>
      <h3 className={`mb-3 font-sans font-bold text-[#f1f5f9] ${large ? 'text-xl' : 'text-base'}`}>
        {project.title}
      </h3>
      <p className={`mb-4 text-[#94a3b8] ${large ? 'text-sm' : 'line-clamp-3 text-sm'}`}>
        {project.description}
      </p>
      <ul className="mb-4 space-y-1">
        {project.impact.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-[#22d3ee]">
            <span className="mt-px shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      {project.aiNote && (
        <p className="mb-3 font-mono text-xs text-[#a78bfa]">{project.aiNote}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>
      </div>{/* end z-10 */}
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-label mb-4">Selected Work</div>
        <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight text-[#f1f5f9] md:text-4xl">
          Enterprise Projects Delivered Globally
        </h2>
        <p className="mb-16 max-w-xl text-[#94a3b8]">
          6 production platforms across retail, energy, events, and civic tech.
        </p>

        {/* Featured — larger cards */}
        <div className="mb-6 grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} large index={i} />
          ))}
        </div>

        {/* More projects */}
        <h3 className="mb-6 mt-12 font-sans text-lg font-semibold text-[#94a3b8]">More Projects</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-[rgba(99,102,241,0.35)] bg-transparent px-6 py-3 font-mono text-sm text-[#94a3b8] transition hover:border-[rgba(99,102,241,0.6)] hover:text-[#f1f5f9]"
          >
            View all 6 projects in detail →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
