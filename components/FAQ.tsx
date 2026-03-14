'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faq } from '@/lib/data';
import { SectionWrapper } from '@/components/SectionWrapper';

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const contentId = `faq-answer-${index}`;

  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      className="rounded-xl border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] overflow-hidden"
    >
      <summary
        className="flex cursor-pointer list-none items-center justify-between px-6 py-4 font-sans font-semibold text-[#f1f5f9] transition hover:bg-[rgba(99,102,241,0.05)]"
        aria-expanded={open}
        aria-controls={contentId}
      >
        {item.q}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 shrink-0 text-[#6366f1]"
        >
          <ChevronDown size={18} />
        </motion.span>
      </summary>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="border-t border-[rgba(99,102,241,0.1)] px-6 py-5 text-sm leading-relaxed text-[#94a3b8]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </details>
  );
}

export function FAQ() {
  return (
    <SectionWrapper id="faq" className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-[720px]">
        <div className="section-label mb-4">FAQ</div>
        <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight text-[#f1f5f9] md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-[#94a3b8]">
          Everything hiring managers and clients need to know.
        </p>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
