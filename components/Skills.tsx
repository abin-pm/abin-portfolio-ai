'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function Skills() {
  return (
    <SectionWrapper id="skills" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-label mb-4">Technical Arsenal</div>
        <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight text-[#f1f5f9] md:text-4xl">
          Full-spectrum stack
        </h2>
        <p className="mb-16 max-w-xl text-[#94a3b8]">
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
              className={`relative rounded-xl p-7 transition-all duration-300 ${
                group.highlight
                  ? 'glass-violet hover:shadow-[0_0_40px_rgba(167,139,250,0.12)] hover:animate-ai-pulse'
                  : 'glass hover:border-[rgba(99,102,241,0.35)]'
              }`}
            >
              {group.highlightLabel && (
                <span className="absolute right-4 top-4 rounded-full border border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.1)] px-2.5 py-0.5 font-mono text-[10px] text-[#a78bfa]">
                  {group.highlightLabel}
                </span>
              )}
              <div className="mb-3 text-2xl">{group.icon}</div>
              <h3 className="mb-5 font-sans text-sm font-semibold uppercase tracking-wider text-[#94a3b8]">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`tag-pill ${group.highlight ? 'tag-pill-violet' : ''}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
