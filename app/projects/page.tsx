"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { MasonryGrid } from "@/components/sections/MasonryGrid";
import { FilterBar } from "@/components/ui/FilterBar";
import { Footer } from "@/components/sections/Footer";
import { getProjects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const projects = getProjects(filter);

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* Highly Attractive Cinematic Hero Banner */}
      <section className="relative h-[65vh] min-h-[500px] w-full pt-20 overflow-hidden">
        <div className="mx-auto max-w-[1920px] px-4 h-full sm:px-6 lg:px-12">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative h-full w-full overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80"
              alt="Projects archive hero"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-black/40 to-black/20" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="h-px w-8 md:w-16 bg-accent" />
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] text-accent">
                  Portfolio
                </span>
                <div className="h-px w-8 md:w-16 bg-accent" />
              </div>
              <h1 className="font-heading text-6xl font-light text-white md:text-8xl lg:text-[8rem] tracking-tight">
                Selected Works
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Restoring the Exact Original Layout from the Screenshot */}
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-12 pb-32">
        {/* <div className="mb-24 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-24">
          <div className="lg:w-1/2">
            <h1 className="font-heading text-6xl font-light leading-[1.05] tracking-tight text-text-primary md:text-8xl xl:text-[9rem]">
              Archive
            </h1>
          </div>
          <div className="hidden lg:flex items-center justify-center">
             <div className="h-4 w-4 rounded-full border border-accent flex items-center justify-center">
                <div className="h-2 w-2 bg-accent rounded-full" />
             </div>
          </div>
          <div className="max-w-md lg:w-1/3 text-right">
            <p className="text-xl font-light leading-relaxed text-text-muted">
              Explore our curated collection of architectural visualizations, expressing form and light.
            </p>
          </div>
        </div> */}

        <div className="mb-4 flex justify-center">
          <FilterBar active={filter} onFilter={setFilter} />
        </div>

        <MasonryGrid projects={projects} initialCount={projects.length} />
      </div>

      <Footer />
    </main>
  );
}
