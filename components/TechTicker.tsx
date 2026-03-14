'use client';

import { techTicker, aiTickerRow } from '@/lib/data';

export function TechTicker() {
  return (
    <div className="border-y border-neural-border bg-neural-surface py-0">
      {/* Row 1 — tech stack, scroll left */}
      <div className="overflow-hidden py-3.5">
        <div
          className="flex w-max gap-8 whitespace-nowrap font-mono text-sm font-600 uppercase tracking-wide text-[#94a3b8]"
          style={{ animation: 'ticker 28s linear infinite' }}
        >
          {[...techTicker, ...techTicker].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-4">
              {item}
              <span className="text-indigo/60">✦</span>
            </span>
          ))}
        </div>
      </div>
      {/* Row 2 — AI tools, scroll right, violet */}
      <div className="overflow-hidden border-t border-neural-border py-3.5">
        <div
          className="flex w-max gap-8 whitespace-nowrap font-mono text-sm font-600 uppercase tracking-wide text-violet"
          style={{ animation: 'ticker 36s linear infinite reverse' }}
        >
          {[...aiTickerRow, ...aiTickerRow].map((item, i) => (
            <span key={`ai-${item}-${i}`} className="flex items-center gap-4">
              {item}
              <span className="text-violet/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
