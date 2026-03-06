'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/lib/portfolio-content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group rounded-lg border border-panel-border bg-panel p-5"
    >
      <h3 className="text-lg font-semibold text-accent">{project.title}</h3>
      <p className="mt-2 text-sm text-secondary">{project.summary}</p>
      <p className="mt-2 text-xs text-primary/80">{project.impact}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded bg-background px-2 py-1 text-xs text-muted">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm">
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
          <Github size={14} /> GitHub
        </a>
        <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
          <ExternalLink size={14} /> Live Demo
        </a>
      </div>
    </motion.article>
  );
}
