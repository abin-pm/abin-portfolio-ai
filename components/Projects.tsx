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
      className={`card relative flex flex-col ${project.aiAssisted ? 'card-violet' : ''}`}
    >
      {/* Flat cover block — stands in for a project screenshot */}
      <div className={`relative flex flex-col justify-between border-b border-border bg-sage-light ${large ? 'h-40 p-6' : 'h-28 p-5'}`}>
        <div className="flex items-start justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sage-dark">
            {project.category}
          </span>
          {project.aiAssisted && (
            <span className="rounded-full border border-sage-border bg-surface px-3 py-1 text-[10px] text-sage-dark">
              🤖 AI-Assisted
            </span>
          )}
        </div>
        <div className="flex items-end justify-between gap-3">
          <span className={`font-serif text-ink ${large ? 'text-3xl' : 'text-2xl'}`}>{project.client}</span>
          <span className="text-2xl" aria-hidden>{project.flag}</span>
        </div>
      </div>
      <div className={`flex flex-1 flex-col ${large ? 'p-7' : 'p-5'}`}>
      {(project.period || project.company) && (
        <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-subtle">
          {[project.company, project.period].filter(Boolean).join(' · ')}
        </p>
      )}
      <h3 className={`mb-3 text-ink ${large ? 'text-xl' : 'text-base'}`}>
        {project.title}
      </h3>
      <p className={`mb-4 text-muted ${large ? 'text-sm' : 'line-clamp-3 text-sm'}`}>
        {project.description}
      </p>
      <ul className="mb-4 space-y-1">
        {project.impact.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-sage-dark">
            <span className="mt-px shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      {project.aiNote && (
        <p className="mb-3 text-xs text-sage-dark">{project.aiNote}</p>
      )}
      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>
      <Link
        href={`/projects/${project.id}`}
        className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink no-underline transition hover:text-sage-dark"
      >
        Read case study <span aria-hidden>→</span>
      </Link>
      </div>
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
        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          Enterprise Projects Delivered Globally
        </h2>
        <p className="mb-16 max-w-xl text-muted">
          {projects.length} production platforms across retail, energy, events, and civic tech.
        </p>

        {/* Featured — larger cards */}
        <div className="mb-6 grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} large index={i} />
          ))}
        </div>

        {/* More projects */}
        <h3 className="mb-6 mt-12 text-lg text-muted">More Projects</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="btn-secondary"
          >
            View all {projects.length} projects in detail →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
