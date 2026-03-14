'use client';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function SectionWrapper({ children, id, className = '' }: Props) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
