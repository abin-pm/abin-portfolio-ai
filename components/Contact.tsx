'use client';

import { motion } from 'framer-motion';
import { identity } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-neural-bg px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-4 flex justify-center font-mono text-xs uppercase tracking-[0.2em] text-indigo">
          <span className="flex items-center gap-3">
            <span className="h-px w-6 bg-indigo" />
            Let&apos;s Build Something
          </span>
        </div>
        <h2 className="mb-4 font-sans text-4xl font-800 tracking-tight md:text-5xl">
          Got a project
          <br />
          <span className="text-transparent [-webkit-text-stroke:1px_rgba(241,245,249,0.3)]">
            in mind?
          </span>
        </h2>
        <p className="mb-10 text-[#94a3b8]">
          Whether it&apos;s a greenfield product, a modernization project, or a tricky bug — I&apos;m
          ready.
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${identity.email}`}
            className="rounded-md border border-neural-border px-6 py-3.5 font-mono text-sm text-[#94a3b8] no-underline transition hover:border-indigo/35 hover:text-indigo"
          >
            ✉️ {identity.email}
          </a>
          <a
            href={`tel:${identity.phone.replace(/\s/g, '')}`}
            className="rounded-md border border-neural-border px-6 py-3.5 font-mono text-sm text-[#94a3b8] no-underline transition hover:border-indigo/35 hover:text-indigo"
          >
            📞 {identity.phone}
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neural-border px-6 py-3.5 font-mono text-sm text-[#94a3b8] no-underline transition hover:border-indigo/35 hover:text-indigo"
          >
            💼 LinkedIn
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neural-border px-6 py-3.5 font-mono text-sm text-[#94a3b8] no-underline transition hover:border-indigo/35 hover:text-indigo"
          >
            💻 GitHub
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
