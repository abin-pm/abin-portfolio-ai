import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-slate-300/90">{description}</p> : null}
    </header>
  );
}
