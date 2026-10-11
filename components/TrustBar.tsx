'use client';

import { SectionWrapper } from '@/components/SectionWrapper';

const clients = ['IBM', "L'Oréal", 'Abercrombie & Fitch', 'National Grid', 'Paragon Energy', 'SuperSonic Imagine', 'The First Group'];

const props = [
  { icon: '🏢', text: '10+ years|Enterprise work for global brands' },
  { icon: '🌍', text: 'Remote or on-site|US, UK, Europe and UAE clients' },
  { icon: '🧩', text: 'Full stack|React frontends to cloud backends' },
  { icon: '🤖', text: 'AI-assisted|Faster drafts, code I still review' },
];

export function TrustBar() {
  return (
    <SectionWrapper className="bg-sage-band px-6 py-14 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-sage-border">
          {props.map(({ icon, text }) => {
            const [label, caption] = text.split('|');
            return (
              <div key={text} className="flex flex-col items-center px-4 text-center">
                <span className="mb-3 text-2xl grayscale" aria-hidden>{icon}</span>
                <span className="font-serif text-2xl text-ink md:text-3xl">{label}</span>
                <span className="mt-1.5 text-xs text-muted">{caption}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-sage-border pt-8 text-xs uppercase tracking-[0.14em] text-muted">
          <span className="text-subtle">Worked with</span>
          {clients.map((c) => (
            <span key={c} className="font-semibold text-ink/70">{c}</span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
