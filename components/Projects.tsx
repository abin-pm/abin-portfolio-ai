'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

const MAX_TAGS = 6;

// Homepage card: kept short on purpose — the full story lives on /projects/<id>.
function ProjectCard({ project, index = 0 }: { project: (typeof projects)[0]; index?: number }) {
  const extraTags = project.tags.length - MAX_TAGS;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`card relative flex flex-col ${project.aiAssisted ? 'card-violet' : ''}`}
    >
      {/* Flat cover block — stands in for a project screenshot */}
      <div className={`relative flex flex-col justify-between border-b border-border bg-sage-light h-40 p-6`}>
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
          <span className={`font-serif text-ink text-3xl`}>{project.client}</span>
          <span className="text-2xl" aria-hidden>{project.flag}</span>
        </div>
      </div>
      <div className={`flex flex-1 flex-col p-7`}>
      {(project.period || project.company) && (
        <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-subtle">
          {[project.company, project.period].filter(Boolean).join(' · ')}
        </p>
      )}
      <h3 className="mb-3 text-xl text-ink">
        {project.title}
      </h3>
      <p className="mb-4 line-clamp-3 text-sm text-muted">
        {project.description}
      </p>
      <ul className="mb-4 space-y-1">
        {project.impact.slice(0, 3).map((item) => (
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
        {project.tags.slice(0, MAX_TAGS).map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
        {extraTags > 0 && <span className="tag-pill !bg-surface">+{extraTags} more</span>}
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

  return (
    <SectionWrapper id="projects" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-label mb-4">Selected Work</div>
        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          Enterprise Projects Delivered Globally
        </h2>
        <p className="mb-16 max-w-xl text-muted">
          Featured work for L&apos;Oréal, Abercrombie &amp; Fitch, National Grid and Paragon Energy —
          {' '}{projects.length} production platforms in total across retail, e-commerce, energy and SaaS.
        </p>

        {/* Featured — larger cards */}
        <div className="mb-6 grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="btn-secondary"
          >
            View all {projects.length} projects →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
