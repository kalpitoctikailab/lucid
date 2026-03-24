"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type VideoCardProps = {
  project: Project;
  index: number;
  className?: string;
  variant?: "default" | "strip";
};

export function VideoCard({
  project,
  index,
  className,
  variant = "default",
}: VideoCardProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const number = String(index + 1).padStart(2, "0");

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative block h-full min-h-[280px] overflow-hidden",
        className
      )}
      data-cursor="play"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          variant === "strip"
            ? "aspect-[4/5] min-h-[240px] sm:min-h-[280px]"
            : "aspect-video min-h-[280px] lg:min-h-[320px]"
        )}
      >
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.videoThumbnail ?? project.coverImage}
            muted
            loop
            playsInline
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        ) : null}
        <img
          src={project.videoThumbnail ?? project.coverImage}
          alt={project.title}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition duration-500",
            hovered && project.video ? "scale-105 opacity-0" : "opacity-100"
          )}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent opacity-90" />
        <div className="absolute right-4 top-4">
          <span className="rounded-full border border-accent/80 bg-bg/80 px-3 py-1 text-[9px] font-medium uppercase tracking-widest text-accent backdrop-blur-sm">
            Walkthrough
          </span>
        </div>
        <div className="absolute right-4 top-14 text-[10px] font-medium text-accent">
          #{number}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
            {project.category}
          </p>
          <h3 className="font-heading text-xl font-light text-white md:text-2xl">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
