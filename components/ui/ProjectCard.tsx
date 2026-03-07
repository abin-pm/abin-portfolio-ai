'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type ProjectLike = {
  title: string;
  description?: string;
  problem?: string;
  solution?: string;
  tech?: string[];
  technologies?: string[];
  image?: string;
  github?: string;
  live?: string;
};

export function ProjectCard({ project }: { project: ProjectLike }) {
  const description = project.description ?? `${project.problem ?? ''} ${project.solution ?? ''}`.trim();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70"
    >
      {project.image ? (
        <div className="relative h-48 w-full">
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      ) : null}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
        <p className="mt-3 text-sm text-slate-300">{description}</p>
        <p className="mt-3 text-xs text-slate-400">{(project.tech ?? project.technologies ?? []).join(' • ')}</p>
        <div className="mt-5 flex gap-4 text-sm">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300">
              GitHub
            </a>
          ) : null}
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300">
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
