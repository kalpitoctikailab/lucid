/**
 * `/projects` listing hero — background image per filter category.
 *
 * Add images under `public/` (e.g. `public/projects-hero/high-rise.jpg`) and set paths below
 * as `/projects-hero/high-rise.jpg`. Keys must match `categories` in `data/projects.ts`.
 *
 * Omitted categories fall back to `All`, then to `HERO_POSTER`.
 */
import { HERO_POSTER } from "./hero";

export const projectsPageHeroByCategory: Partial<Record<string, string>> = {
  All: "/RESIDENCIALV HIGH RISE APPARTMENTS/7 AURA BHARUCH/EXTERIOR/Kosamadi 612 Water Body_Cam01-a.jpg",
  "Residential High Rise": "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Garden Closeup_Cam-a.jpg",
  "Residential Low Rise": "/RESIDENCE LOW RISE APPARTMENT/VRUNDAVAN BLISS VADODARA/EXTERIOR/Bhavik Sheth Bapod High_Cam-v01.jpg",
  Commercial: "/COMMERCIAL/3. K10 INDEX VADODARA/EXTERIOR/1. K10 Index Left Corner View-c.jpg",
  "Residential Villas": "/RESIDENCIAL VILLAS/3. DARSHNAM KINGSVILLE VADODARA/exterior/Darshanam Type2 Unit Cam-b.jpg",
  "Virtual Tour": "/360 output/Satyam Surya Homes Kharghar 360_0003.jpg",
  Farmhouse: "/FARMHOUSE/2. ABHLOD FARM HALOL/EXTERIOR/1. 6K_Abhilod Farmhouse Club Pool_Cam-c copy.jpg",
};

export function getProjectsPageHeroImage(categoryFilter: string): string {
  return (
    projectsPageHeroByCategory[categoryFilter] ??
    projectsPageHeroByCategory["All"] ??
    HERO_POSTER
  );
}
