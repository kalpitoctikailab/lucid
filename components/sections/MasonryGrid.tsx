"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

type MasonryGridProps = {
  projects: Project[];
  initialCount?: number;
  loadMore?: () => void;
  hasMore?: boolean;
};

const aspectHeightMap = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

function MasonryCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const aspectClass = aspectHeightMap[project.aspectRatio];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block w-full overflow-hidden"
      data-cursor="view"
    >
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Number badge */}
        <div className="absolute right-4 top-4">
          <span className="text-[10px] font-medium tabular-nums text-accent/80">
            {number}
          </span>
        </div>

        {/* Category chip */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-accent/40 bg-black/40 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-widest text-accent backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1 p-5 transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="font-heading text-lg font-medium leading-snug text-white md:text-xl">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center gap-3 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              {project.year} · {project.type}
            </span>
            <span className="ml-auto text-xs text-accent">View →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function MasonryGrid({
  projects,
  initialCount = 15,
  loadMore,
  hasMore = false,
}: MasonryGridProps) {
  const displayProjects = projects.slice(0, initialCount);

  return (
    <div className="mx-auto w-full max-w-[1200px] px-3 py-12 sm:px-0 md:py-16 lg:px-0">
      {/* Mobile: 1 Column */}
      <div className="flex flex-col gap-4 sm:hidden">
        {displayProjects.map((p) => (
          <MasonryCard key={p.id} project={p} index={displayProjects.indexOf(p)} />
        ))}
      </div>

      {/* Tablet: 2 Columns */}
      <div className="hidden sm:flex lg:hidden gap-4 md:gap-6 w-full">
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          {displayProjects.filter((_, i) => i % 2 === 0).map((p) => (
            <MasonryCard key={p.id} project={p} index={displayProjects.indexOf(p)} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          {displayProjects.filter((_, i) => i % 2 === 1).map((p) => (
            <MasonryCard key={p.id} project={p} index={displayProjects.indexOf(p)} />
          ))}
        </div>
      </div>

      {/* Desktop: 3 Columns */}
      <div className="hidden lg:flex gap-6 w-full">
        <div className="flex flex-1 flex-col gap-6">
          {displayProjects.filter((_, i) => i % 3 === 0).map((p) => (
            <MasonryCard key={p.id} project={p} index={displayProjects.indexOf(p)} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-6">
          {displayProjects.filter((_, i) => i % 3 === 1).map((p) => (
            <MasonryCard key={p.id} project={p} index={displayProjects.indexOf(p)} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-6">
          {displayProjects.filter((_, i) => i % 3 === 2).map((p) => (
            <MasonryCard key={p.id} project={p} index={displayProjects.indexOf(p)} />
          ))}
        </div>
      </div>

      {hasMore && loadMore && (
        <div className="mt-16 flex justify-center md:mt-20">
          <button
            type="button"
            onClick={loadMore}
            className="border border-accent px-14 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-bg"
          >
            Load More Projects
          </button>
        </div>
      )}
    </div>
  );
}
