/**
 * Lucid The Artistry — Services Data
 */
import { HERO_POSTER, HERO_VIDEO } from "./hero";

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  fullDescription: string[];
  /** Static hero / poster (also used as `poster` when `coverVideo` is set) */
  coverImage: string;
  /** When set, service detail hero uses this video instead of a static image */
  coverVideo?: string;
  gallery: string[];
  features: string[];
  projectCount: number;
};

const COVER = {
  commercial:
    "/COMMERCIAL/3. K10 INDEX VADODARA/EXTERIOR/1. K10 Index Left Corner View-c.jpg",
  residential:
    "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Garden Closeup_Cam-a.jpg",
  duplex:
    "/RESIDENCIAL VILLAS/3. DARSHNAM KINGSVILLE VADODARA/exterior/Darshanam Type2 Unit Cam-b.jpg",
  tour: "/360 output/Satyam Surya Homes Kharghar 360_0003.jpg",
} as const;

export const services: Service[] = [
  {
    slug: "commercial",
    title: "3D Commercial Rendering",
    shortDesc: "Photorealistic commercial spaces — offices, retail, hospitality.",
    fullDescription: [
      "Our commercial rendering service is designed to convey the scale, luxury, and functionality of large-scale developments. We focus heavily on ambient lighting, material reflections, and urban context to ensure your commercial project feels alive.",
      "From multi-story corporate headquarters to boutique retail environments, we provide visuals that assist in securing tenant pre-leases and satisfying municipal planning boards."
    ],
    coverImage: COVER.commercial,
    gallery: [COVER.commercial, COVER.commercial],
    features: ["Urban Context Modeling", "Nighttime Illumination", "Crowd & Lifestyle Integration", "High-Resolution Output"],
    projectCount: 3,
  },
  {
    slug: "residential",
    title: "3D Residential Rendering",
    shortDesc: "Interior and exterior renders for homes and apartments.",
    fullDescription: [
      "Residential rendering requires a delicate balance of architectural accuracy and emotional warmth. We curate furniture, styling, and lighting to create spaces that potential buyers aspire to live in.",
      "Whether it's a cozy interior living room or a sweeping exterior view of a luxury apartment complex, our residential renders are crafted to evoke a sense of home from the very first glance."
    ],
    coverImage: COVER.residential,
    gallery: [COVER.residential, COVER.residential],
    features: ["Bespoke Interior Styling", "Atmospheric Lighting", "Photorealistic Materials", "Lifestyle Props"],
    projectCount: 4,
  },
  {
    slug: "duplex",
    title: "3D Duplex Rendering",
    shortDesc: "Multi-floor luxury residences with detailed visualization.",
    fullDescription: [
      "Luxury duplexes and standalone villas require specialized attention to spatial flow and premium materials. Our visualizations highlight double-height ceilings, bespoke staircases, and seamless indoor-outdoor transitions.",
      "We emphasize grand architectural details and elegant landscaping to reflect the prestige of your high-end developments."
    ],
    coverImage: COVER.duplex,
    gallery: [COVER.duplex, COVER.duplex],
    features: ["Double-Height Volume Emphasis", "Landscaping & Pools", "Complex Section Cutaways", "Premium Material Finishes"],
    projectCount: 2,
  },
  {
    slug: "walkthrough",
    title: "Walkthrough Animations",
    shortDesc: "Cinematic animation through your architectural space.",
    fullDescription: [
      "A static image speaks a thousand words, but a 3D architectural walkthrough tells the complete story. We produce cinematic, 4K animations that guide viewers through the spatial flow of a property.",
      "With bespoke soundtracks and dynamic camera movements, our walkthroughs are the ultimate centerpiece for premium real estate marketing."
    ],
    coverImage: HERO_POSTER,
    coverVideo: HERO_VIDEO,
    gallery: [HERO_POSTER, HERO_POSTER],
    features: ["4K Cinematic Resolution", "Fluid Camera Choreography", "Custom Sound Design", "Day-to-Night Transitions"],
    projectCount: 2,
  },
  {
    slug: "360-tours",
    title: "360° Virtual Tours",
    shortDesc: "Immersive virtual tours for remote property viewing.",
    fullDescription: [
      "Empower your clients to explore properties at their own pace. Using cutting-edge web technologies, we create immersive 360-degree panoramas that users can navigate seamlessly across any device.",
      "These interactive tours boost engagement, retain website visitors longer, and facilitate remote international sales for premium real estate."
    ],
    coverImage: COVER.tour,
    gallery: [COVER.tour, COVER.tour],
    features: ["Interactive Hotspots", "Cross-Device Compatibility", "VR Headset Ready", "Information Overlays"],
    projectCount: 2,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
