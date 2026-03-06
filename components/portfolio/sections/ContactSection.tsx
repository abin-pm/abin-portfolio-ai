'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-2">
      <article className="panel-card">
        <h2 className="panel-title">Let&apos;s build together</h2>
        <p className="panel-copy">Open to high-impact senior engineering roles and product-minded teams.</p>
        <div className="mt-4 space-y-2 text-sm text-secondary">
          <a href="mailto:abin@example.com" className="inline-flex items-center gap-2 hover:text-accent"><Mail size={14} /> abin@example.com</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent"><MessageCircle size={14} /> LinkedIn</a>
        </div>
      </article>
      <article className="panel-card">
        <h3 className="panel-title">Recruiter quick summary</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm text-secondary">
          <li>8+ years of full-stack product engineering.</li>
          <li>Strong in Next.js, TypeScript, architecture, and UX-driven delivery.</li>
          <li>Track record of measurable business outcomes and scalable systems.</li>
        </ul>
      </article>
    </motion.section>
  );
}
