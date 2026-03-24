"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesBar } from "@/components/sections/ServicesBar";
import { StatsRow } from "@/components/sections/StatsRow";
import { Marquee } from "@/components/sections/Marquee";
import { Footer } from "@/components/sections/Footer";
import { getProjects } from "@/data/projects";

export default function HomePage() {
  const allProjects = getProjects().slice(0, 15);

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <HeroBanner />



      <ProjectsSection
        projects={allProjects}
        initialCount={15}
      />

      <ServicesBar />
      <StatsRow />
      <Marquee />
      <Footer />
    </main>
  );
}
