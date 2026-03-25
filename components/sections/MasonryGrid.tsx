"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
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
      className={`group relative block w-full ${aspectClass} perspective-distant`}
      style={{ cursor: "pointer" }}
      data-cursor="view"
    >
      {/* Inner flipper */}
      <div
        className="relative h-full w-full transform-3d transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:transform-[rotateX(180deg)]"
      >
        {/* ── FRONT ── */}
        <div className="absolute inset-0 overflow-hidden backface-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
          {/* Title on front */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-heading text-xl font-light leading-snug text-white drop-shadow-md">
              {project.title}
            </h3>
          </div>
          {/* Number badge */}
          <span className="absolute right-4 top-4 font-heading text-lg italic text-white/50">
            {number}
          </span>
        </div>

        {/* ── BACK ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden backface-hidden transform-[rotateX(180deg)]">
          {/* Second project image as full background */}
          <Image
            src={project.images[1] ?? project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <span className="rounded-full border border-white/30 px-4 py-1.5 text-[9px] font-medium uppercase tracking-[0.25em] text-white/80">
              {project.category}
            </span>
            <h3 className="font-heading text-2xl font-light text-white leading-snug">
              {project.title}
            </h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
              {project.type} · {project.year}
            </p>
            <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white text-sm">
              →
            </div>
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
    <div className="mx-auto w-full max-w-[1100px] px-3 py-12 sm:px-0 md:py-16 lg:px-0">
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

      {/* Desktop: 2 Columns */}
      <div className="hidden lg:flex gap-6 w-full">
        <div className="flex flex-1 flex-col gap-6">
          {displayProjects.filter((_, i) => i % 2 === 0).map((p) => (
            <MasonryCard key={p.id} project={p} index={displayProjects.indexOf(p)} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-6">
          {displayProjects.filter((_, i) => i % 2 === 1).map((p) => (
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
