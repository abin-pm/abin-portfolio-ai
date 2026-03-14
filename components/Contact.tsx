'use client';

import { motion } from 'framer-motion';
import { identity } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function Contact() {
  return (
    <SectionWrapper id="contact" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[720px] text-center">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Let&apos;s Work Together</span>
        </div>
        <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-[#f1f5f9] md:text-5xl">
          Let&apos;s Build Something Exceptional
        </h2>
        <p className="mb-10 text-[#94a3b8]">
          If you&apos;re looking to hire a React developer from India, need a freelance full stack
          developer for your next project, or want an AI-native developer to accelerate your
          delivery — reach out and let&apos;s talk scope.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {[
            { href: `mailto:${identity.email}`, label: `✉️ ${identity.email}` },
            { href: `tel:${identity.phone.replace(/\s/g, '')}`, label: `📞 ${identity.phone}` },
            { href: identity.linkedin, label: '💼 LinkedIn', external: true },
            { href: identity.github, label: '💻 GitHub', external: true },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="card px-6 py-3.5 font-mono text-sm text-[#94a3b8] no-underline"
            >
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <motion.a
          href={`mailto:${identity.email}`}
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6366f1] via-[#a78bfa] to-[#22d3ee] bg-[length:200%_auto] px-8 py-4 font-sans text-sm font-semibold text-white no-underline shadow-[0_0_40px_rgba(99,102,241,0.25)] transition hover:shadow-[0_0_60px_rgba(99,102,241,0.35)]"
          style={{ animation: 'shimmer 3s linear infinite' }}
        >
          Hire Abin as Your Senior React &amp; AI-Native Engineer
        </motion.a>
      </div>
    </SectionWrapper>
  );
}
