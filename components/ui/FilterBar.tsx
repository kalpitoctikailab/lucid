"use client";

import { categories, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type FilterBarProps = {
  active: string;
  onFilter: (category: string) => void;
};

export function FilterBar({ active, onFilter }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-8">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onFilter(cat)}
          className={cn(
            "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors",
            active === cat
              ? "border-accent bg-accent text-bg"
              : "border-border text-text-muted hover:border-accent-dim hover:text-accent"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
