'use client';

import type { NavItem, SectionId } from '@/lib/portfolio-content';

export function TopTabs({ items, active, onSelect }: { items: NavItem[]; active: SectionId; onSelect: (id: SectionId) => void }) {
  return (
    <div className="flex overflow-x-auto border-b border-panel-border bg-panel/80">
      {items.map((item) => {
        const selected = item.id === active;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`border-r border-panel-border px-4 py-2 text-xs transition ${selected ? 'bg-background text-primary' : 'text-muted hover:text-primary'}`}
          >
            {item.tab}
          </button>
        );
      })}
    </div>
  );
}
