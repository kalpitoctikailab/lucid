"use client";

import Link from "next/link";
import Image from "next/image";
import { getProjectListingImage, type Project } from "@/data/projects";

type ProjectsPortfolioFeedProps = {
  projects: Project[];
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block w-full" data-cursor="view">
      <div className="relative h-[770px] w-full min-w-0 overflow-hidden">
        <Image
          src={getProjectListingImage(project)}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 580px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <p className="mt-3 text-right text-[11px] font-medium uppercase tracking-[0.25em] text-white/70">
        {project.title}
      </p>
    </Link>
  );
}

export function ProjectsPortfolioFeed({ projects }: ProjectsPortfolioFeedProps) {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-[1200px] xl:px-0 flex flex-col gap-6 sm:gap-8">
        {projects.length === 0 ? (
          <p className="py-16 text-center text-sm uppercase tracking-[0.2em] text-white/50">
            No projects found in this category.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
