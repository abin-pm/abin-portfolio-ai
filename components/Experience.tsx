'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-neural-bg px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-indigo">
          <span className="h-px w-6 bg-indigo" />
          Career Timeline
        </div>
        <h2 className="mb-4 font-sans text-3xl font-800 tracking-tight md:text-4xl">
          Work Experience
        </h2>
        <p className="mb-14 max-w-[480px] font-light text-[#94a3b8]">
          9+ years across startups, agencies, and enterprise tech giants.
        </p>

        <div className="relative pl-6">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo/50 to-transparent"
            style={{ transformOrigin: 'top' }}
          />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pb-14 last:pb-0"
            >
              <span
                className={`absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-indigo ${
                  job.current ? 'bg-indigo shadow-[0_0_12px_#6366f1]' : 'bg-neural-bg'
                }`}
              />
              <div className="font-mono text-xs text-indigo">{job.period}</div>
              <h3 className="mt-2 font-sans text-xl font-700 text-[#f1f5f9]">{job.company}</h3>
              <div className="text-sm text-[#94a3b8]">
                {job.role} · {job.location}
              </div>
              <ul className="mt-4 list-none space-y-2">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-sm text-[#94a3b8] before:absolute before:left-0 before:content-['▸'] before:text-indigo"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              {job.aiRole && (
                <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-violet">
                  <span>AI tools used:</span>
                  <span>Cursor AI · GitHub Copilot · Claude</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
