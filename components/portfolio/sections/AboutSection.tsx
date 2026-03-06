'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-2">
      <article className="panel-card">
        <h2 className="panel-title">About Me</h2>
        <p className="panel-copy">
          Senior engineer with product intuition, focused on transforming complex business requirements into maintainable, user-friendly web platforms.
        </p>
      </article>
      <article className="panel-card">
        <h3 className="panel-title">Why teams trust my delivery</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm text-secondary">
          <li>Strong ownership from discovery to production reliability.</li>
          <li>Balanced engineering quality with shipping speed.</li>
          <li>Clear communication with product, design, and stakeholders.</li>
        </ul>
      </article>
    </motion.section>
  );
}
