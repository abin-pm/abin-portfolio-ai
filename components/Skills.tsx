'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-neural-bg px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-indigo">
          <span className="h-px w-6 bg-indigo" />
          Technical Arsenal
        </div>
        <h2 className="mb-4 font-sans text-3xl font-800 tracking-tight md:text-4xl">
          What I Build With
        </h2>
        <p className="mb-14 max-w-[480px] font-light text-[#94a3b8]">
          A full-spectrum stack from pixel-perfect UIs to cloud-native distributed backends.
        </p>

        <div className="grid gap-px rounded-xl border border-neural-border bg-neural-border md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-xl p-8 transition hover:-translate-y-0.5 ${
                group.highlight
                  ? 'border border-violet/30 bg-violet/5 hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]'
                  : 'bg-neural-surface hover:bg-[rgba(99,102,241,0.06)]'
              }`}
            >
              {group.highlightLabel && (
                <span className="mb-3 inline-block rounded-full bg-violet/20 px-2.5 py-0.5 font-mono text-xs text-violet">
                  {group.highlightLabel}
                </span>
              )}
              <div className="mb-4 text-2xl">{group.icon}</div>
              <h3 className="mb-4 font-sans text-sm font-700 uppercase text-[#94a3b8]">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded border px-2.5 py-1 font-mono text-xs ${
                      group.highlight
                        ? 'border-violet/35 text-violet'
                        : 'border-neural-border text-[#94a3b8]'
                    }`}
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
