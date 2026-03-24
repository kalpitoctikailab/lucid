"use client";

import { MasonryGrid } from "@/components/sections/MasonryGrid";
import type { Project } from "@/data/projects";

type ProjectsSectionProps = {
  projects: Project[];
  initialCount: number;
  loadMore?: () => void;
  hasMore?: boolean;
};

export function ProjectsSection({
  projects,
  initialCount,
  loadMore,
  hasMore,
}: ProjectsSectionProps) {
  return (
    <section id="work" className="relative bg-bg">
      <MasonryGrid
        projects={projects}
        initialCount={initialCount}
        loadMore={loadMore}
        hasMore={hasMore}
      />
    </section>
  );
}
