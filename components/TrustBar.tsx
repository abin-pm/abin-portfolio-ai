'use client';

import { SectionWrapper } from '@/components/SectionWrapper';

const clients = ['IBM', 'Abercrombie & Fitch', 'National Grid', 'Paragon Energy', 'Go Lyv', 'Refinu'];

const props = [
  'Enterprise-Proven — 9+ years Fortune 500',
  'AI-Native — Cursor AI, Copilot & Claude daily',
  'Remote-Ready — US/UK timezone flexible',
  'Full Stack — React to cloud backend',
];

export function TrustBar() {
  return (
    <SectionWrapper className="border-y border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.02)] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-[1100px] space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#475569]">
          <span className="text-[#475569]">Worked with:</span>
          {clients.map((c) => (
            <span key={c} className="text-[#94a3b8]">{c}</span>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 font-mono text-xs text-[#94a3b8]">
          {props.map((p) => (
            <span key={p} className="flex items-center gap-2">
              <span className="text-[#6366f1]">✓</span>
              {p}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
