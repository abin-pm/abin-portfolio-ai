import { ReactNode } from 'react';

type SectionTitleProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children?: ReactNode;
};

export function SectionTitle({ id, title, eyebrow, children }: SectionTitleProps) {
  return (
    <header id={id} className="scroll-mt-28 space-y-3">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-vscode-green">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold text-vscode-blue md:text-3xl">{title}</h2>
      {children ? <p className="max-w-2xl text-sm text-vscode-text/80 md:text-base">{children}</p> : null}
    </header>
  );
}
