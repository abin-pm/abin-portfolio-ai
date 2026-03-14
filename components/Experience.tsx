'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { experience, education } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function Experience() {
  return (
    <SectionWrapper id="experience" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="section-label mb-4">Career Timeline</div>
        <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight text-[#f1f5f9] md:text-4xl">
          9+ Years of Enterprise Development
        </h2>
        <p className="mb-16 max-w-xl text-[#94a3b8]">
          From early-stage startups to Fortune 500 enterprises — building production software that scales.
        </p>

        <div className="relative pl-8">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(99,102,241,0.5)] to-transparent"
          />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative mb-14 last:mb-0"
            >
              {/* Dot */}
              <span
                className={`absolute -left-[33px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#6366f1] ${
                  job.current ? 'bg-[#6366f1] shadow-[0_0_12px_#6366f1]' : 'bg-[#080810]'
                }`}
              />

              {/* Header */}
              <div className="mb-1 font-mono text-xs text-[#6366f1]">{job.period}</div>
              <h3
                className={`font-sans text-xl font-bold ${
                  job.current ? 'text-gradient' : 'text-[#f1f5f9]'
                }`}
              >
                {job.company}
                {job.current && (
                  <span className="ml-3 inline-flex animate-pulse items-center rounded-full bg-[rgba(34,211,238,0.1)] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#22d3ee]">
                    CURRENT
                  </span>
                )}
              </h3>
              <div className="mb-4 text-sm text-[#94a3b8]">
                {job.role} · {job.location}
              </div>

              {/* Tech stack pills */}
              <div className="mb-4 flex flex-wrap gap-2">
                {job.techStack.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="mb-4 space-y-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="relative pl-5 text-sm text-[#94a3b8] before:absolute before:left-0 before:text-[#6366f1] before:content-['▸']">
                    {b}
                  </li>
                ))}
              </ul>

              {/* View detail link */}
              <Link
                href={`/experience/${job.slug}`}
                className="mb-4 inline-flex items-center gap-1.5 rounded-lg border border-[rgba(99,102,241,0.2)] px-4 py-1.5 font-mono text-xs text-[#6366f1] no-underline transition hover:border-[rgba(99,102,241,0.5)] hover:bg-[rgba(99,102,241,0.06)]"
              >
                Full role details →
              </Link>

              {/* AI tools strip */}
              {job.aiRole && (
                <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-xs text-[#a78bfa]">
                  <span className="text-[#475569]">AI tools:</span>
                  <span>Cursor AI · GitHub Copilot · Claude</span>
                </div>
              )}

              {/* IBM assignment nested card */}
              {job.assignment && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="card card-violet ml-4 mt-4 border-l-4 border-l-[#a78bfa] p-6"
                >
                  <div className="relative z-10">
                  <div className="mb-1 font-mono text-[10px] text-[#a78bfa]">ASSIGNMENT</div>
                  <div className="mb-0.5 font-sans font-semibold text-[#f1f5f9]">
                    {job.assignment.client}
                  </div>
                  <div className="mb-3 font-mono text-xs text-[#94a3b8]">
                    {job.assignment.project} · {job.assignment.period}
                  </div>
                  <p className="mb-4 text-sm text-[#94a3b8]">{job.assignment.description}</p>
                  <ul className="space-y-1.5">
                    {job.assignment.contributions.map((c, k) => (
                      <li key={k} className="relative pl-5 text-sm text-[#94a3b8] before:absolute before:left-0 before:text-[#a78bfa] before:content-['▸']">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link
                      href="/projects/national-grid"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[rgba(167,139,250,0.25)] px-4 py-1.5 font-mono text-xs text-[#a78bfa] no-underline transition hover:border-[rgba(167,139,250,0.5)]"
                    >
                      View case study →
                    </Link>
                  </div>
                  </div>{/* end z-10 */}
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative mt-16"
          >
            <span className="absolute -left-[33px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[rgba(99,102,241,0.5)] bg-[#080810]" />
            <div className="card p-6">
              <div className="relative z-10">
              <div className="mb-1 font-mono text-xs text-[#6366f1]">2013</div>
              <div className="mb-0.5 flex items-center gap-2 font-sans text-lg font-bold text-[#f1f5f9]">
                🎓 {education.degree}
              </div>
              <div className="font-sans text-sm text-[#94a3b8]">
                {education.field} · {education.university}
              </div>
              </div>{/* end z-10 */}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
