'use client';

import { useState } from 'react';

const ROW1 = [
  'React.js', 'Next.js', 'Node.js', 'TypeScript',
  'Microservices', 'AWS', 'GraphQL', 'MongoDB',
  'Docker', 'Kubernetes', 'PostgreSQL', 'GCP',
  'Tailwind CSS', 'Redis', 'Elasticsearch', '.NET Core',
  'CI/CD', 'Socket.IO', 'RabbitMQ', 'Kafka',
];

const ROW2 = [
  'Cursor AI', 'GitHub Copilot', 'Claude', 'OpenAI Codex',
  'LLM Integration', 'GenAI', 'AI-Assisted Architecture',
  'GenAI Stabilization', 'AI Code Review', 'v0 by Vercel',
  'Prompt Engineering', 'AI-Assisted Debug',
];

// Triple for seamless -33.333% loop — no jump, no flicker
const r1 = [...ROW1, ...ROW1, ...ROW1];
const r2 = [...ROW2, ...ROW2, ...ROW2];

export function TechTicker() {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <style>{`
        @keyframes tickerForward {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes tickerReverse {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none !important; }
        }
      `}</style>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingBlock: '10px',
          background: 'rgba(6,6,20,0.6)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          borderTop: '1px solid rgba(99,102,241,0.07)',
          borderBottom: '1px solid rgba(99,102,241,0.07)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        {/* Row 1 — scrolls left, indigo tint */}
        <div style={{ overflow: 'hidden', lineHeight: 1 }}>
          <div
            className="ticker-track"
            style={{
              display: 'flex',
              width: 'max-content',
              willChange: 'transform',
              animation: 'tickerForward 45s linear infinite',
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {r1.map((item, i) => (
              <span
                key={i}
                style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(165,180,252,0.75)',
                    paddingInline: '4px',
                  }}
                >
                  {item}
                </span>
                <span
                  style={{
                    fontSize: '7px',
                    marginInline: '16px',
                    color: 'rgba(99,102,241,0.6)',
                    lineHeight: 1,
                  }}
                >
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right, violet tint */}
        <div style={{ overflow: 'hidden', lineHeight: 1 }}>
          <div
            className="ticker-track"
            style={{
              display: 'flex',
              width: 'max-content',
              willChange: 'transform',
              animation: 'tickerReverse 35s linear infinite',
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {r2.map((item, i) => (
              <span
                key={i}
                style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono), monospace',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(196,181,253,0.75)',
                    paddingInline: '4px',
                  }}
                >
                  {item}
                </span>
                <span
                  style={{
                    fontSize: '7px',
                    marginInline: '16px',
                    color: 'rgba(167,139,250,0.6)',
                    lineHeight: 1,
                  }}
                >
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
