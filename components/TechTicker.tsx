'use client';

import { techTicker, aiTickerRow } from '@/lib/data';

const SEP = '✦';

// Triple-duplicate for a fully seamless loop with no visible gap
function makeRow<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

const row1 = makeRow(techTicker);
const row2 = makeRow(aiTickerRow);

export function TechTicker() {
  return (
    <div className="relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(99,102,241,0.6)] to-transparent" />
      {/* Bottom glow line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.4)] to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(99,102,241,0.04)] via-[rgba(99,102,241,0.02)] to-[rgba(167,139,250,0.04)]" />

      {/* Left + right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#080810] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#080810] to-transparent" />

      {/* ── Row 1: tech stack, forward ── */}
      <div className="overflow-hidden py-4">
        <div
          className="flex w-max items-center gap-8 whitespace-nowrap"
          style={{ animation: 'ticker 36s linear infinite' }}
        >
          {row1.map((item, i) => (
            <span key={`r1-${i}`} className="flex items-center gap-8">
              <span
                className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#94a3b8] transition-colors"
                style={{
                  textShadow: i % 5 === 0 ? '0 0 12px rgba(99,102,241,0.6)' : undefined,
                  color: i % 5 === 0 ? '#c7d2fe' : undefined,
                }}
              >
                {item}
              </span>
              <span
                className="text-[8px]"
                style={{ color: 'rgba(99,102,241,0.55)', textShadow: '0 0 6px rgba(99,102,241,0.4)' }}
              >
                {SEP}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-8 h-px bg-gradient-to-r from-transparent via-[rgba(99,102,241,0.15)] to-transparent" />

      {/* ── Row 2: AI tools, reverse + violet ── */}
      <div className="overflow-hidden py-4">
        <div
          className="flex w-max items-center gap-8 whitespace-nowrap"
          style={{ animation: 'ticker 22s linear infinite reverse' }}
        >
          {row2.map((item, i) => (
            <span key={`r2-${i}`} className="flex items-center gap-8">
              <span
                className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{
                  color: i % 3 === 0 ? '#c4b5fd' : '#a78bfa',
                  textShadow: '0 0 14px rgba(167,139,250,0.45)',
                }}
              >
                {item}
              </span>
              <span
                className="text-[8px]"
                style={{ color: 'rgba(167,139,250,0.6)', textShadow: '0 0 8px rgba(167,139,250,0.5)' }}
              >
                {SEP}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Row 3: tech stack again, slower, cyan accent ── */}
      <div className="overflow-hidden border-t border-[rgba(99,102,241,0.06)] py-3">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap"
          style={{ animation: 'ticker 52s linear infinite' }}
        >
          {makeRow([...techTicker].reverse()).map((item, i) => (
            <span key={`r3-${i}`} className="flex items-center gap-10">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.1em]"
                style={{
                  color: i % 4 === 0 ? '#67e8f9' : 'rgba(148,163,184,0.45)',
                  textShadow: i % 4 === 0 ? '0 0 10px rgba(34,211,238,0.35)' : undefined,
                }}
              >
                {item}
              </span>
              <span style={{ color: 'rgba(34,211,238,0.25)', fontSize: '7px' }}>{SEP}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
