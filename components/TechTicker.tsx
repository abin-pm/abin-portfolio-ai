'use client';

import { techTicker, aiTickerRow } from '@/lib/data';

const SEP = '✦';

export function TechTicker() {
  const row1 = [...techTicker, ...techTicker];
  const row2 = [...aiTickerRow, ...aiTickerRow];

  return (
    <div className="relative border-y border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.02)] py-0 overflow-hidden">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#080810] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#080810] to-transparent" />

      {/* Row 1 — tech stack, forward */}
      <div className="overflow-hidden py-3">
        <div
          className="flex w-max gap-6 whitespace-nowrap font-mono text-xs uppercase tracking-wide text-[#94a3b8]"
          style={{ animation: 'ticker 28s linear infinite' }}
        >
          {row1.map((item, i) => (
            <span key={`r1-${i}`} className="flex items-center gap-6">
              {item}
              <span className="text-[rgba(99,102,241,0.5)]">{SEP}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — AI tools, reverse */}
      <div className="overflow-hidden border-t border-[rgba(99,102,241,0.08)] py-3">
        <div
          className="flex w-max gap-6 whitespace-nowrap font-mono text-xs uppercase tracking-wide text-[#a78bfa]"
          style={{ animation: 'ticker 36s linear infinite reverse' }}
        >
          {row2.map((item, i) => (
            <span key={`r2-${i}`} className="flex items-center gap-6">
              {item}
              <span className="text-[rgba(167,139,250,0.5)]">{SEP}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
