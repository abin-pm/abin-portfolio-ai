'use client';

import { useEffect, useState } from 'react';

type TypingRoleProps = {
  phrases: string[];
};

export function TypingRole({ phrases }: TypingRoleProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(current.slice(0, displayed.length + 1));
          if (displayed.length + 1 === current.length) {
            setDeleting(true);
          }
        } else {
          setDisplayed(current.slice(0, Math.max(0, displayed.length - 1)));
          if (displayed.length === 0) {
            setDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      deleting ? 50 : displayed.length === current.length ? 1200 : 90
    );

    return () => clearTimeout(timeout);
  }, [deleting, displayed, phraseIndex, phrases]);

  return (
    <p className="text-base text-vscode-purple md:text-lg" aria-live="polite">
      {displayed}
      <span className="ml-1 inline-block h-5 w-2 animate-blink bg-vscode-blue align-middle" />
    </p>
  );
}
