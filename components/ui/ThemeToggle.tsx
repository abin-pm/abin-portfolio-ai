'use client';

import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light';

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const darkMode = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-md border border-panel-border px-3 py-1.5 text-xs text-muted transition hover:border-accent hover:text-primary"
      aria-label="Toggle dark and light theme"
    >
      {darkMode ? <Moon size={14} /> : <Sun size={14} />}
      {darkMode ? 'Dark' : 'Light'}
    </button>
  );
}
