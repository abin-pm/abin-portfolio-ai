'use client';

import { Moon, Sun } from 'lucide-react';

// The `dark` class on <html> is set before paint by the script in app/layout.tsx;
// the icons switch via CSS, so the server markup never has to know the theme.
export function ThemeToggle({ className = '' }: { className?: string }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      // Storage blocked (private mode): the choice just won't persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition hover:border-sage hover:text-ink ${className}`}
    >
      <Moon size={16} className="dark:hidden" aria-hidden />
      <Sun size={16} className="hidden dark:block" aria-hidden />
    </button>
  );
}
