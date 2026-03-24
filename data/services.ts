/**
 * Lucid The Artistry — Services Data
 */

export type Service = {
  slug: string;
  title: string;
  shortDesc: string;
  fullDescription: string[];
  coverImage: string;
  gallery: string[];
  features: string[];
  projectCount: number;
};

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

const IMG = {
  commercial: img("1486406146926-c627a92ad1ab", 1920),
  residential: img("1600596542815-ffad4c1539a9", 1920),
  duplex: img("1613490493576-7fde63acd811", 1920),
  walkthrough: img("1613977257363-707ba3b793b5", 1920),
  tour: img("1618221195710-dd6b41faaea6", 1920),
};

export const services: Service[] = [
  {
    slug: "commercial",
    title: "3D Commercial",
    shortDesc: "Photorealistic commercial spaces — offices, retail, hospitality.",
    fullDescription: [
      "Our commercial rendering service is designed to convey the scale, luxury, and functionality of large-scale developments. We focus heavily on ambient lighting, material reflections, and urban context to ensure your commercial project feels alive.",
      "From multi-story corporate headquarters to boutique retail environments, we provide visuals that assist in securing tenant pre-leases and satisfying municipal planning boards."
    ],
    coverImage: IMG.commercial,
    gallery: [
      img("1497366216548-37526070297c"),
      img("1486406146926-c627a92ad1ab")
    ],
    features: ["Urban Context Modeling", "Nighttime Illumination", "Crowd & Lifestyle Integration", "High-Resolution Output"],
    projectCount: 3,
  },
  {
    slug: "residential",
    title: "Residential",
    shortDesc: "Interior and exterior renders for homes and apartments.",
    fullDescription: [
      "Residential rendering requires a delicate balance of architectural accuracy and emotional warmth. We curate furniture, styling, and lighting to create spaces that potential buyers aspire to live in.",
      "Whether it's a cozy interior living room or a sweeping exterior view of a luxury apartment complex, our residential renders are crafted to evoke a sense of home from the very first glance."
    ],
    coverImage: IMG.residential,
    gallery: [
      img("1600585154340-be6161a56a0c"),
      img("1600607687644-aac4c3eac7f4"),
      img("1540518614846-7eded433c457")
    ],
    features: ["Bespoke Interior Styling", "Atmospheric Lighting", "Photorealistic Materials", "Lifestyle Props"],
    projectCount: 4,
  },
  {
    slug: "duplex",
    title: "Duplex & Villas",
    shortDesc: "Multi-floor luxury residences with detailed visualization.",
    fullDescription: [
      "Luxury duplexes and standalone villas require specialized attention to spatial flow and premium materials. Our visualizations highlight double-height ceilings, bespoke staircases, and seamless indoor-outdoor transitions.",
      "We emphasize grand architectural details and elegant landscaping to reflect the prestige of your high-end developments."
    ],
    coverImage: IMG.duplex,
    gallery: [
      img("1613490493576-7fde63acd811"),
      img("1600566752355-35792bedcfea")
    ],
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
    coverImage: IMG.walkthrough,
    gallery: [
      img("1613977257363-707ba3b793b5"),
      img("1505144808419-1957a94ca61e")
    ],
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
    coverImage: IMG.tour,
    gallery: [
      img("1618221195710-dd6b41faaea6"),
      img("1631049307264-da0ec9d70304")
    ],
    features: ["Interactive Hotspots", "Cross-Device Compatibility", "VR Headset Ready", "Information Overlays"],
    projectCount: 2,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
