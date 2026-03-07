'use client';

import { motion } from 'framer-motion';
import type { TechItem } from '@/lib/site-data';

export function TechCard({ item }: { item: TechItem }) {
  const Icon = item.icon;

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="rounded-xl border border-slate-800 bg-slate-900/80 p-5"
    >
      <Icon className="h-6 w-6 text-sky-400" aria-hidden="true" />
      <h3 className="mt-4 text-sm font-semibold text-slate-100">{item.name}</h3>
    </motion.article>
  );
}
