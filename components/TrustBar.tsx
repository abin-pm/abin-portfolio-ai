'use client';

import { SectionWrapper } from '@/components/SectionWrapper';

const items = [
  'Enterprise-Proven — 9+ years Fortune 500',
  'AI-Native — Cursor AI, Copilot & Claude daily',
  'Remote-Ready — US/UK timezone flexible',
];

export function TrustBar() {
  return (
    <SectionWrapper className="border-y border-neural-border bg-neural-surface px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-8 font-mono text-sm text-[#94a3b8]">
        {items.map((text) => (
          <span key={text} className="flex items-center gap-2">
            <span className="text-indigo">✓</span>
            {text}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
