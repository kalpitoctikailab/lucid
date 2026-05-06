/**
 * Home page portfolio — category order, hero images, and inline clips.
 * Category card images use generated thumbnails (`getProjectListingImage`) when available.
 */

import { HERO_VIDEO, HERO_POSTER } from "./hero";
import {
  getFirstProjectSlug,
  getProjectBySlug,
  getProjectListingImage,
} from "./projects";

export type HomeCategoryCard = {
  title: string;
  image: string;
  /** Where the card links */
  href: string;
};

/** Shown under each inline video. */
export const HOME_PORTFOLIO_INLINE_VIDEO_LABEL = "Video";

/** Inline clips between portfolio rows (three slots — two rows above cinematic, one below). */
export const homePortfolioInlineVideos: readonly {
  src: string;
  poster: string;
}[] = [
  { src: HERO_VIDEO, poster: HERO_POSTER },
  { src: HERO_VIDEO, poster: HERO_POSTER },
  { src: HERO_VIDEO, poster: HERO_POSTER },
];

function projectHref(category: string): string {
  const slug = getFirstProjectSlug(category);
  return slug ? `/projects/${slug}` : "/projects";
}

/** Thumbnail (or cover) for the first project in this filter category; `fallback` if none. */
function cardImageForCategory(projectCategory: string, fallback: string): string {
  const slug = getFirstProjectSlug(projectCategory);
  if (!slug) return fallback;
  const p = getProjectBySlug(slug);
  if (!p) return fallback;
  return getProjectListingImage(p);
}

/**
 * Home portfolio grid — six category cards (Walkthrough & Product Rendering omitted).
 */
export const homePortfolioCategories: HomeCategoryCard[] = [
  {
    title: "Residential High Rise Appartment",
    image: cardImageForCategory(
      "Residential High Rise",
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/2. Satyam Surya Front_Cam01-a.jpg"
    ),
    href: projectHref("Residential High Rise"),
  },
  {
    title: "Commercial",
    image: cardImageForCategory(
      "Commercial",
      "/COMMERCIAL/10. BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Corner 04-c.jpg"
    ),
    href: projectHref("Commercial"),
  },
  {
    title: "Residential Low Rise Appartment",
    image: cardImageForCategory(
      "Residential Low Rise",
      "/RESIDENCE LOW RISE APPARTMENT/Royal Luxuria BHARUCH/EXTERIOR/Bholav Front Cam-a.jpg"
    ),
    href: projectHref("Residential Low Rise"),
  },
  {
    title: "Residential Villas",
    image: cardImageForCategory(
      "Residential Villas",
      "/RESIDENCIAL VILLAS/6. SELENITE VILLA VADODARA/EXTERIOR/1. Selenite Villa Front View_c.jpg"
    ),
    href: projectHref("Residential Villas"),
  },
  {
    title: "360 degree Virtual",
    image: cardImageForCategory(
      "Virtual Tour",
      "/360 output/Satyam Surya Homes Kharghar 360_0001.jpg"
    ),
    href: projectHref("Virtual Tour"),
  },
  {
    title: "Farmhouse",
    image: cardImageForCategory(
      "Farmhouse",
      "/FARMHOUSE/3. VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens 2nd Club House01-c.jpg"
    ),
    href: projectHref("Farmhouse"),
  },
];
