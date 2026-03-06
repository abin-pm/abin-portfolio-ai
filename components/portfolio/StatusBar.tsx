'use client';

import { Activity, CheckCircle2, GitBranch, MapPin } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function StatusBar({ theme, onToggleTheme }: { theme: 'dark' | 'light'; onToggleTheme: () => void }) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-panel-border bg-panel px-3 py-2 text-xs text-secondary">
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center gap-1"><GitBranch size={12} /> main</span>
        <span className="inline-flex items-center gap-1"><CheckCircle2 size={12} /> Ready to hire</span>
        <span className="inline-flex items-center gap-1"><MapPin size={12} /> Kerala, India</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1"><Activity size={12} /> Optimized for recruiters</span>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </footer>
  );
}
