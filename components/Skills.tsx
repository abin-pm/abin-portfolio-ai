'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function Skills() {
  return (
    <SectionWrapper id="skills" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-label mb-4">Technical Arsenal</div>
        <h2 className="mb-3 text-3xl text-ink md:text-4xl">
          Full-spectrum stack
        </h2>
        <p className="mb-16 max-w-xl text-muted">
          From pixel-perfect UIs to cloud-native distributed backends — every layer covered.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`card p-7 ${group.highlight ? 'card-violet-hover' : ''}`}
            >
              {group.highlightLabel && (
                <span className="absolute right-4 top-4 z-10 rounded-full border border-border-strong bg-sage-light px-2.5 py-0.5 text-[10px] text-sage-dark">
                  {group.highlightLabel}
                </span>
              )}
              <div className="relative z-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sage-light text-xl" aria-hidden>
                  {group.icon}
                </div>
                <h3 className="mb-5 text-sm uppercase tracking-wider text-muted">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
