/**
 * Home page portfolio — category order, hero images, and inline clips.
 * Replace `image` paths with your own files under `public/home-portfolio/categories/`
 * when ready; current paths use existing project renders as placeholders.
 */

import { HERO_VIDEO, HERO_POSTER } from "./hero";
import { getFirstProjectSlug } from "./projects";

export type HomeCategoryCard = {
  title: string;
  image: string;
  /** Where the card links */
  href: string;
};

/** Shown under each inline video (not "Walkthrough"). */
export const HOME_PORTFOLIO_INLINE_VIDEO_LABEL = "Video";

/** Four inline clips (2 + 2 groups around the cinematic block). Edit `src` / `poster` per slot. */
export const homePortfolioInlineVideos: readonly {
  src: string;
  poster: string;
}[] = [
  { src: HERO_VIDEO, poster: HERO_POSTER },
  { src: HERO_VIDEO, poster: HERO_POSTER },
  { src: HERO_VIDEO, poster: HERO_POSTER },
  { src: HERO_VIDEO, poster: HERO_POSTER },
];

function projectHref(category: string): string {
  const slug = getFirstProjectSlug(category);
  return slug ? `/projects/${slug}` : "/projects";
}

/**
 * Category sequence for the home portfolio grid (eight cards).
 */
export const homePortfolioCategories: HomeCategoryCard[] = [
  {
    title: "Residential High Rise Appartment",
    image:
      "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/2. Satyam Surya Front_Cam01-a.jpg",
    href: projectHref("Residential High Rise"),
  },
  {
    title: "Commercial",
    image:
      "/COMMERCIAL/10. BLISS EMPIRE VADODARA/EXTERIOR/P_Commercial Corner 04-c.jpg",
    href: projectHref("Commercial"),
  },
  {
    title: "Residential Low Rise Appartment",
    image:
      "/RESIDENCE LOW RISE APPARTMENT/Royal Luxuria BHARUCH/EXTERIOR/Bholav Front Cam-a.jpg",
    href: projectHref("Residential Low Rise"),
  },
  {
    title: "Residential Villas",
    image:
      "/RESIDENCIAL VILLAS/6. SELENITE VILLA VADODARA/EXTERIOR/1. Selenite Villa Front View_c.jpg",
    href: projectHref("Residential Villas"),
  },
  {
    title: "Walkthrough",
    image:
      "/COMMERCIAL/3. K10 INDEX VADODARA/EXTERIOR/6K_K10 Index Remp Entry View-c.jpg",
    href: projectHref("Walkthrough"),
  },
  {
    title: "360 degree Virtual",
    image:
      "/360 output/Satyam Surya Homes Kharghar 360_0001.jpg",
    href: projectHref("Virtual Tour"),
  },
  {
    title: "Farmhouse",
    image:
      "/FARMHOUSE/3. VEDANTA GREENS HALOL/EXTERIOR/6K_Vedanta Greens 2nd Club House01-c.jpg",
    href: projectHref("Farmhouse"),
  },
  {
    title: "Product Rendering",
    image: "/COMMERCIAL/4. CITY GOLD BHARUCH/EXTERIOR/Dungari Comercial Left_Cam02-v01.jpg",
    href: projectHref("Cutsection"),
  },
];
