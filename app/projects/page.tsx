"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { ProjectsPortfolioFeed } from "@/components/sections/ProjectsPortfolioFeed";
import { FilterBar } from "@/components/ui/FilterBar";
import { Footer } from "@/components/sections/Footer";
import { getProjects } from "@/data/projects";
import { getProjectsPageHeroImage } from "@/data/projectsPageHero";
import { motion } from "framer-motion";
import Image from "next/image";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [filter, setFilter] = useState(categoryParam ?? "All");

  // Sync filter when URL param changes (e.g. back/forward navigation)
  useEffect(() => {
    setFilter(categoryParam ?? "All");
  }, [categoryParam]);

  const projects = getProjects(filter);
  const heroImage = getProjectsPageHeroImage(filter);

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* Cinematic Hero Banner */}
      <section className="relative z-0 flex items-center justify-center overflow-hidden bg-bg px-4 pt-20 pb-6 sm:px-6 sm:pt-24 md:pt-28 lg:px-8" style={{ minHeight: "60vh" }}>
        <div className="relative w-full max-w-[1200px] overflow-hidden" style={{ aspectRatio: "16/7" }}>
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative h-full w-full overflow-hidden"
          >
            <Image
              key={heroImage}
              src={heroImage}
              alt="Projects archive hero"
              fill
              sizes="100vw"
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center sm:p-8"
            >
              <div className="flex items-center gap-4 mb-4 sm:gap-6 sm:mb-6">
                <div className="h-px w-6 bg-accent sm:w-16" />
                <span className="text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] text-accent">
                  Portfolio
                </span>
                <div className="h-px w-6 bg-accent sm:w-16" />
              </div>
              <h1 className="font-heading text-3xl font-light text-white sm:text-5xl md:text-6xl lg:text-[8rem] tracking-tight">
                {filter !== "All" ? filter : "Selected Works"}
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 pb-32">
        <div className="mb-4 flex justify-center">
          <FilterBar active={filter} onFilter={setFilter} />
        </div>

        <ProjectsPortfolioFeed projects={projects} />
      </div>

      <Footer />
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense>
      <ProjectsContent />
    </Suspense>
  );
}
