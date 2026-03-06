'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/portfolio-content';

export function ExperienceSection() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      {experiences.map((item) => (
        <article key={item.role} className="panel-card">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="panel-title">{item.role}</h2>
            <span className="text-xs text-muted">{item.duration}</span>
          </div>
          <p className="mt-1 text-sm text-accent">{item.company}</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-secondary">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </motion.section>
  );
}
