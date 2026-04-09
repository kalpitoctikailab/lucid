"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { HomePortfolioFeed } from "@/components/sections/HomePortfolioFeed";
import { ServicesBar } from "@/components/sections/ServicesBar";
import { StatsRow } from "@/components/sections/StatsRow";
import { Marquee } from "@/components/sections/Marquee";
import { Footer } from "@/components/sections/Footer";
import { getProjects } from "@/data/projects";
import { HERO_VIDEO, HERO_POSTER } from "@/data/hero";

export default function HomePage() {
  const allProjects = getProjects();

  // Use the hero video as the cinematic section video source
  const cinematicProject = {
    ...allProjects[0],
    video: HERO_VIDEO,
    videoThumbnail: HERO_POSTER,
  };

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <HeroBanner />

      <HomePortfolioFeed
        projects={allProjects}
        cinematicProject={cinematicProject}
      />

      {/* <ServicesBar />
      <StatsRow />
      <Marquee /> */}
      <Footer />
    </main>
  );
}
