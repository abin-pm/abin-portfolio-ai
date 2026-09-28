'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { experience, education } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

/** Render **bold text** markdown-style within a bullet string */
function BulletText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="experience" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1100px]">

        <div className="relative pl-8">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage/40 to-transparent"
          />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <span
                className={`absolute -left-[33px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-sage ${
                  job.current ? 'bg-sage' : 'bg-cream'
                }`}
              />

              {/* Period + company chip */}
              <div className="mb-0.5 text-xs text-sage-dark">{job.period}</div>
              <h3
                className={` text-xl ${
                  job.current ? 'text-sage-dark' : 'text-ink'
                }`}
              >
                {job.company}
                {job.current && (
                  <span className="ml-3 inline-flex animate-pulse items-center rounded-full bg-sage-light px-2.5 py-0.5 text-[10px] font-medium text-sage-dark">
                    CURRENT
                  </span>
                )}
              </h3>
              <div className="mb-4 text-sm text-muted">
                {job.role} · {job.location}
              </div>

              {/* Key outcome callout */}
              {job.keyOutcome && (
                <div className="mb-4 flex items-start gap-2.5 rounded-lg border border-border bg-surface px-4 py-2.5">
                  <span className="mt-0.5 shrink-0 text-sage-dark">▶</span>
                  <span className="text-xs leading-relaxed text-muted">
                    <span className="font-semibold text-ink">Key outcome: </span>
                    {job.keyOutcome}
                  </span>
                </div>
              )}

              {/* Tech stack pills */}
              <div className="mb-4 flex flex-wrap gap-2">
                {job.techStack.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>

              {/* Bullets — concise, metric-forward */}
              <ul className="mb-4 space-y-2">
                {job.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-sm text-muted before:absolute before:left-0 before:text-sage-dark before:content-['▸']"
                  >
                    <BulletText text={b} />
                  </li>
                ))}
              </ul>

              {/* AI tools strip */}
              {job.aiRole && (
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-subtle">AI stack:</span>
                  {['Cursor AI', 'GitHub Copilot', 'Claude'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-strong bg-surface px-2.5 py-0.5 text-sage-dark"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Role detail CTA — contextual per company */}
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/experience/${job.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-1.5 text-xs text-sage-dark no-underline transition hover:border-sage hover:bg-surface"
                  aria-label={`Full role details and outcomes for ${job.company}`}
                >
                  {job.slug === 'ibm'
                    ? 'IBM role — GenAI stabilization & enterprise delivery →'
                    : job.slug === 'emvigo'
                    ? 'Emvigo role — Paragon, Go Lyv, UK clients →'
                    : job.slug === 'luminescent'
                    ? 'Luminescent role — real-time platform delivery →'
                    : `${job.company.split(' ')[0]} role details →`}
                </Link>

                {/* Case study shortcut where available */}
                {job.caseStudySlug && (
                  <Link
                    href={`/projects/${job.caseStudySlug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-1.5 text-xs text-sage-dark no-underline transition hover:border-sage hover:bg-surface"
                    aria-label={`Case study for ${job.caseStudySlug} project`}
                  >
                    {job.slug === 'ibm' ? 'National Grid case study →' : 'Paragon case study →'}
                  </Link>
                )}
              </div>

              {/* IBM assignment nested card */}
              {job.assignment && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="card card-violet ml-4 mt-5 border-l-4 border-l-sage p-6"
                >
                  <div className="relative z-10">
                    <div className="mb-1 text-[10px] text-sage-dark">ASSIGNMENT</div>
                    <div className="mb-0.5 font-sans font-semibold text-ink">
                      {job.assignment.client}
                    </div>
                    <div className="mb-3 text-xs text-muted">
                      {job.assignment.project} · {job.assignment.period}
                    </div>
                    <p className="mb-4 text-sm text-muted">{job.assignment.description}</p>
                    <ul className="mb-4 space-y-1.5">
                      {job.assignment.contributions.map((c, k) => (
                        <li
                          key={k}
                          className="relative pl-5 text-sm text-muted before:absolute before:left-0 before:text-sage-dark before:content-['▸']"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/projects/national-grid"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-4 py-1.5 text-xs text-sage-dark no-underline transition hover:border-sage"
                      aria-label="Case study: National Grid SAS to React migration"
                    >
                      Case study: National Grid SAS → React migration →
                    </Link>
                  </div>
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
            className="relative mt-12"
          >
            <span className="absolute -left-[33px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-sage bg-cream" />
            <div className="card p-6">
              <div className="relative z-10">
                <div className="mb-1 text-xs text-sage-dark">{education.year}</div>
                <div className="mb-0.5 flex items-center gap-2 font-sans text-lg font-bold text-ink">
                  🎓 {education.degree}
                </div>
                <div className="font-sans text-sm text-muted">
                  {education.field} · {education.university}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
