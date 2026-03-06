'use client';

import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';
import type { NavItem, SectionId } from '@/lib/portfolio-content';

export function Sidebar({ items, active, onSelect }: { items: NavItem[]; active: SectionId; onSelect: (id: SectionId) => void }) {
  return (
    <aside className="h-full border-r border-panel-border bg-panel/60">
      <div className="flex items-center gap-2 border-b border-panel-border px-4 py-3 text-xs uppercase tracking-[0.2em] text-muted">
        <FolderOpen size={14} /> Explorer
      </div>
      <nav className="space-y-1 p-2">
        {items.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className="relative w-full rounded-md px-3 py-2 text-left text-sm text-secondary transition hover:bg-background"
              aria-current={selected ? 'page' : undefined}
            >
              {selected ? <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-md border border-accent/60" /> : null}
              <span className="relative">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
