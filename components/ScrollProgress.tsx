'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const current = window.scrollY;
      const fullHeight = document.body.scrollHeight - window.innerHeight;
      const next = fullHeight > 0 ? (current / fullHeight) * 100 : 0;
      setProgress(next);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return <div className="fixed left-0 top-0 z-50 h-1 bg-vscode-blue transition-all" style={{ width: `${progress}%` }} />;
}
