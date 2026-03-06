'use client';

import { useEffect, useState } from 'react';

export function TypingCode({ phrases }: { phrases: string[] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let i = 0;
    const interval = setInterval(() => {
      setTyped(phrase.slice(0, i + 1));
      i += 1;
      if (i >= phrase.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTyped('');
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 1200);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [phraseIndex, phrases]);

  return (
    <p className="font-mono text-sm text-accent md:text-base">
      <span>{typed}</span>
      <span className="animate-pulse">|</span>
    </p>
  );
}
