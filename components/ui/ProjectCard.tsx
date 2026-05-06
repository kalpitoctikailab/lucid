"use client";

import Link from "next/link";
import Image from "next/image";
import { getProjectListingImage, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  className?: string;
  variant?: "default" | "bento" | "strip";
};

const aspectMap = {
  portrait: "aspect-[3/4] min-h-[280px]",
  landscape: "aspect-[16/10] min-h-[220px]",
  square: "aspect-square min-h-[260px]",
} as const;

/** Uniform height for strip grid below hero */
const stripAspect = "aspect-[4/5] min-h-[240px] sm:min-h-[280px]";

export function ProjectCard({
  project,
  index,
  className,
  variant = "default",
}: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const aspectClass =
    variant === "strip" ? stripAspect : aspectMap[project.aspectRatio];
  const isBento = variant === "bento";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative block h-full min-h-[200px] overflow-hidden",
        className
      )}
      data-cursor="view"
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden",
          aspectClass,
          isBento && "min-h-[320px] lg:min-h-0"
        )}
      >
        <Image
          src={getProjectListingImage(project)}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-[1.06]"
        />
        {/* Always-on bottom gradient for readability */}
        <div
          className="absolute inset-0 bg-linear-to-t from-bg via-bg/35 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/45" />

        <div className="absolute right-4 top-4">
          <span className="text-[10px] font-medium tabular-nums text-accent/90">
            {number}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
            {project.category}
          </p>
          <h3 className="font-heading text-xl font-light leading-snug text-white md:text-2xl">
            {project.title}
          </h3>
          <span className="mt-2 inline-block text-xs text-accent opacity-0 transition group-hover:opacity-100">
            View project →
          </span>
        </div>
      </div>
    </Link>
  );
}
