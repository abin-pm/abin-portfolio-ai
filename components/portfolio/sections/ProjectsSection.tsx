'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/lib/portfolio-content';

export function ProjectsSection() {
  return (
    <motion.section initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </motion.section>
  );
}
