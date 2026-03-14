'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faq } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="bg-neural-bg px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[700px]">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-indigo">
          <span className="h-px w-6 bg-indigo" />
          FAQ
        </div>
        <h2 className="mb-4 font-sans text-3xl font-800 tracking-tight md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 font-light text-[#94a3b8]">
          Quick answers for hiring managers and clients.
        </p>

        <div className="space-y-2">
          {faq.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-neural-border bg-neural-surface overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-sans font-600 text-[#f1f5f9] transition hover:bg-indigo/5"
              >
                {item.q}
                <span className="text-indigo">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-neural-border px-6 py-4 text-sm text-[#94a3b8]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
