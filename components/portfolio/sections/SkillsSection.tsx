'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/portfolio-content';

export function SkillsSection() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-4 md:grid-cols-2">
      {Object.entries(skills).map(([group, values]) => (
        <article key={group} className="panel-card">
          <h2 className="panel-title capitalize">{group}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {values.map((skill) => (
              <span key={skill} className="rounded-md border border-panel-border bg-background px-2 py-1 text-xs text-secondary">
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </motion.section>
  );
}
