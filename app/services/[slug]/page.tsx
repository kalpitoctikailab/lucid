"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { getProjects } from "@/data/projects";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ProjectsPortfolioFeed } from "@/components/sections/ProjectsPortfolioFeed";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/* ─── Process steps (per-service content) ────────────────────── */
type ProcessStep = {
  step: string;
  heading: string;
  text: string;
  /** Large image shown in the asset slide between steps */
  assetImage: string;
  /** Two portrait images shown side-by-side (overlapping) in the step slide */
  img1: string;
  img2: string;
};

const processSteps: Record<string, ProcessStep[]> = {
  commercial: [
    {
      step: "1. Brief & Vision",
      heading: "You share the vision,\nwe map the story.",
      text: "We begin by studying your architectural drawings, brand guidelines, and project goals. Every commercial render starts with a deep understanding of the space and the audience it needs to impress.",
      assetImage: "/COMMERCIAL/1. Happy Mall/Exterior/S Happy Mall Front_Cam03_v002.jpg",
      img1: "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Front Cam5-a.jpg",
      img2: "/COMMERCIAL/1. Happy Mall/Exterior/Theater Lobby-b.jpg",
    },
    {
      step: "2. Modelling",
      heading: "Precision built\nfrom every line.",
      text: "Our 3D artists construct a detailed model of your commercial space — capturing structural geometry, material specifications, and surrounding context with exacting accuracy.",
      assetImage: "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Front_Cam01-a.jpg",
      img1: "/COMMERCIAL/1. Happy Mall/Exterior/6K Entry cam 02-c.jpg",
      img2: "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Gate_Cam01-a.jpg",
    },
    {
      step: "3. Lighting & Materials",
      heading: "Light defines\nthe atmosphere.",
      text: "We apply photorealistic materials and calibrate lighting — natural, artificial, and ambient — to bring your commercial project to life at any time of day.",
      assetImage: "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Garden Long Cam16-a.jpg",
      img1: "/COMMERCIAL/1. Happy Mall/Exterior/Passage Cam 15-b.jpg",
      img2: "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Garden Cam9-a.jpg",
    },
    {
      step: "4. Final Delivery",
      heading: "Print-ready.\nPresentation-ready.",
      text: "High-resolution renders are delivered in your required formats — ready for investor decks, planning submissions, hoardings, and digital marketing.",
      assetImage: "/COMMERCIAL/5. VS MONOLITH VADODARA/EXTERIOR/Vihav Commercial Top Cam8-a.jpg",
      img1: "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 High 2nd_Cam01-a.jpg",
      img2: "/COMMERCIAL/2. CENTRAL SQUARE BHARUCH/EXTERIOR/Pacnhbatti 505 Shops Closeup_Cam01-a.jpg",
    },
  ],
  residential: [
    {
      step: "1. Brief & Vision",
      heading: "You imagine,\nwe make it real.",
      text: "We listen to your vision and study your drawings to understand the story you want to tell. Every residential render begins with understanding who will live there and what feeling they should experience.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/2. Satyam Surya Front_Cam01-a.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Garden_Cam-a.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Satyam Surya Foyer-a.jpg",
    },
    {
      step: "2. Modelling",
      heading: "Every detail\nbuilt to scale.",
      text: "We construct a precise 3D model of your residential project — from structural forms to interior furniture layouts — ensuring spatial accuracy throughout.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/1. Arcadia111 Corner Cam-a.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 Pool Night_Cam-b.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Foyer_v002.jpg",
    },
    {
      step: "3. Styling & Lighting",
      heading: "Warmth crafted\nin every frame.",
      text: "We curate furniture, materials, and lighting to create spaces that feel aspirational yet liveable — balancing architectural accuracy with emotional warmth.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Living room cam_v003.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Gym cam_v03.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Theatre_01_v002.jpg",
    },
    {
      step: "4. Final Delivery",
      heading: "Perfectly finished,\nready to present.",
      text: "Final renders are delivered in high resolution — optimised for brochures, hoardings, digital campaigns, and sales presentations.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/1. Sculpture Varad Left_Cam02-v01.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Front_Cam02-a.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Garden_Cam02-a.jpg",
    },
  ],
  duplex: [
    {
      step: "1. Brief & Vision",
      heading: "Luxury starts\nwith listening.",
      text: "We study your duplex or villa drawings and understand the premium lifestyle your project represents — before a single polygon is placed.",
      assetImage: "/RESIDENCIAL VILLAS/6. SELENITE VILLA VADODARA/EXTERIOR/1. Selenite Villa Front View_c.jpg",
      img1: "/RESIDENCIAL VILLAS/6. SELENITE VILLA VADODARA/EXTERIOR/Selenite Villa Pool_c.jpg",
      img2: "/RESIDENCIAL VILLAS/6. SELENITE VILLA VADODARA/EXTERIOR/Selenite Villa Garden_c.jpg",
    },
    {
      step: "2. Modelling",
      heading: "Double-height volumes,\nperfectly captured.",
      text: "Our artists model every floor, staircase, and outdoor space with precision — giving full justice to the spatial grandeur of luxury duplex living.",
      assetImage: "/RESIDENCIAL VILLAS/6. SELENITE VILLA VADODARA/EXTERIOR/Selenite Villa Night_c.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Pool Night_Cam-a.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Garden 2nd_Cam-a.jpg",
    },
    {
      step: "3. Materials & Lighting",
      heading: "Premium finishes,\nphotorealistic light.",
      text: "We apply high-end material libraries and craft lighting scenarios that highlight marble, timber, glass, and water features at their finest.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Front Day-c.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/INTERIOR/Aditya Living room cam_c.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/INTERIOR/foyer-c.jpg",
    },
    {
      step: "4. Final Delivery",
      heading: "Prestige delivered\nin every pixel.",
      text: "Ultra-high-resolution renders delivered for luxury brochures, digital campaigns, and international property marketing.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Antilia Top 1st_Cam_c.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Gate 1st Cam-c.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Antilia Back Front_Cam-c.jpg",
    },
  ],
  walkthrough: [
    {
      step: "1. Storyboard",
      heading: "Every frame\nplanned with purpose.",
      text: "We begin with a detailed storyboard — mapping camera paths, key moments, and the emotional arc of your walkthrough before production starts.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Pool Night_Cam-a.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Pool Cam01-a.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Garden_Cam01-a.jpg",
    },
    {
      step: "2. 3D Build",
      heading: "The world\nbuilt in full.",
      text: "We construct a complete 3D environment — architecture, landscaping, interiors, and context — ready for cinematic camera movement.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Front Day-c.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/EXTERIOR/Aditya Antilia Back Corner_Cam-c.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/12. ADITYA ANTILIA AHMEDABAD/INTERIOR/Game Room.jpg",
    },
    {
      step: "3. Animation & Lighting",
      heading: "Motion that\ntells the story.",
      text: "Fluid camera choreography, day-to-night transitions, and atmospheric lighting are layered in to create a cinematic experience that captivates viewers.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Evening Cam-a.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Gate Cam-a.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/INTERIOR/Theatre Room.jpg",
    },
    {
      step: "4. Final Delivery",
      heading: "4K cinematic.\nReady to launch.",
      text: "Your walkthrough is delivered in 4K resolution with a custom soundtrack — ready for YouTube, social media, and sales presentations.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Garden_Cam-a.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya High_Cam01-b2.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/INTERIOR/Banquet Hall Cam 01-a.jpg",
    },
  ],
  "360-tours": [
    {
      step: "1. Site Planning",
      heading: "Every viewpoint\ncarefully chosen.",
      text: "We plan the panoramic hotspots across your property — selecting positions that give the most immersive and informative experience for remote viewers.",
      assetImage: "/360 output/Satyam Surya Homes Kharghar 360_0001.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/2. Satyam Surya Front_Cam01-a.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/1. SATYAM SURYA MANATHAN/EXTERIOR/Satyam Surya Garden_Cam-a.jpg",
    },
    {
      step: "2. 3D Panorama Render",
      heading: "360° of\nphotorealistic detail.",
      text: "Each panoramic node is rendered at ultra-high resolution — capturing every material, light source, and spatial relationship in full spherical detail.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/Arcadia111 Pool Night_Cam-b.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/EXTERIOR/1. Arcadia111 Corner Cam-a.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/10. ARCADIA 111 AHMEDABAD/INTERIOR/Living room cam_v003.jpg",
    },
    {
      step: "3. Interactive Build",
      heading: "Navigate freely,\nexplore deeply.",
      text: "We assemble the panoramas into an interactive tour with hotspot navigation, information overlays, and smooth transitions between spaces.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Garden_Cam01-a.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/EXTERIOR/Festival Vibes Pool Top Cam01.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/5. FESTIVAL VIBES AHEMDABAD/INTERIOR/Foyer cam.jpg",
    },
    {
      step: "4. Final Delivery",
      heading: "Cross-device.\nVR-ready.",
      text: "Your virtual tour is delivered as a web-hosted experience — compatible with desktop, mobile, and VR headsets, ready to embed on your website.",
      assetImage: "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/1. Sculpture Varad Left_Cam02-v01.jpg",
      img1: "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Front_Cam02-a.jpg",
      img2: "/RESIDENCIALV HIGH RISE APPARTMENTS/11. SCULPTURE AHAMEDABAD/EXTERIOR/Sculpture Varad Garden_Cam02-a.jpg",
    },
  ],
};

/* ─── Default fallback steps ──────────────────────────────────── */
const defaultSteps = processSteps.residential;

/* ─── Process Section ─────────────────────────────────────────── */
function ProcessSection({ slug }: { slug: string }) {
  const steps = processSteps[slug] ?? defaultSteps;
  const sectionRef = useRef<HTMLDivElement>(null);

  // Total slides: 1 intro + (1 asset + 1 step) × steps.length
  const totalSlides = 1 + steps.length * 2;

  // Horizontal scroll driven by vertical scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(totalSlides - 1) * 100}vw`]
  );

  return (
    // Outer wrapper: tall enough to drive the scroll
    <div
      ref={sectionRef}
      style={{ height: `${totalSlides * 100}svh` }}
      className="relative"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-svh overflow-hidden bg-bg">

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10 z-10">
          <motion.div
            className="absolute inset-y-0 left-0 bg-white/60"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Section label — top-left */}
        <div className="absolute top-10 left-6 sm:left-10 z-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
            Our Process
          </p>
        </div>

        {/* Horizontal strip */}
        <motion.div
          className="flex h-full"
          style={{ x, width: `${totalSlides * 100}vw` }}
        >
          {/* Intro — 6% of total strip (original); responsive padding + type scale only */}
          <div className="relative flex h-full w-[6%] shrink-0 min-w-0 flex-col justify-center bg-bg px-2 py-10 sm:px-3 sm:py-12 md:px-4 md:py-0 lg:px-5 xl:px-6">
            <div className="max-w-3xl">
              <h2 className="font-heading text-2xl font-light leading-[1.05] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl whitespace-pre-line mb-4 sm:mb-6">
                Built with vision{"\n"}Finished with care
              </h2>
              <p className="text-xs font-light leading-relaxed text-white/60 sm:text-sm md:text-base max-w-md">
                At Lucid The Artistry, every project follows a clear and refined process. Ensuring precision, transparency, and peace of mind from start to finish.
              </p>
            </div>
          </div>

          {/* For each step: asset slide + step slide */}
          {steps.map((step, i) => (
            <div key={i} className="contents">
              {/* Asset slide (full-width image) */}
              <div className="relative flex h-full w-screen shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src={step.assetImage}
                  alt={`Process step ${i + 1} asset`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Step slide */}
              <div className="relative flex h-full w-screen shrink-0 items-center">
                {/* Left: two overlapping portrait images */}
                <div className="relative w-1/2 h-full flex items-center justify-center px-6 sm:px-10 lg:px-16">
                  <div className="relative w-full max-w-md">
                    {/* Large image (top-left) */}
                    <div className="relative w-[280px] h-[350px] overflow-hidden">
                      <Image
                        src={step.img1}
                        alt={`${step.step} image 1`}
                        fill
                        sizes="280px"
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Small image (overlapping bottom-right) */}
                    <div className="absolute bottom-0 right-0 w-[200px] h-[250px] overflow-hidden translate-x-8 translate-y-4">
                      <Image
                        src={step.img2}
                        alt={`${step.step} image 2`}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: step text */}
                <div className="relative z-10 flex h-full w-1/2 flex-col justify-center px-6 sm:px-10 lg:px-16">
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
                    {step.step}
                  </p>
                  <h3 className="font-heading text-4xl font-light leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl whitespace-pre-line mb-6">
                    {step.heading}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-white/60 max-w-md">
                    {step.text}
                  </p>
                </div>

                {/* Step counter — bottom right */}
                <div className="absolute bottom-10 right-10 text-[11px] font-medium tabular-nums tracking-[0.2em] text-white/25">
                  {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Project Grid (projects-page style) ─────────────────────── */
function ProjectGrid({ slug }: { slug: string }) {
  /** Service slug → portfolio categories (same grid layout as main projects page). */
  const categoryMap: Record<string, string[]> = {
    commercial: ["Commercial"],
    residential: ["Residential High Rise", "Residential Low Rise"],
    duplex: ["Farmhouse"],
    walkthrough: ["Walkthrough"],
    "360-tours": ["Virtual Tour"],
  };

  const categories = categoryMap[slug] ?? [];
  const allProjects = getProjects();
  const matched = allProjects.filter((p) => categories.includes(p.category));
  const filtered =
    slug === "commercial" ? matched : matched.slice(0, 8);

  if (filtered.length === 0) return null;

  return (
    <ProjectsPortfolioFeed projects={filtered} />
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = getServiceBySlug(slug);

  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!service || !mounted) return null;

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative z-0 h-screen flex items-center justify-center overflow-hidden bg-bg px-4 pt-28 pb-8 sm:px-8 md:px-12 lg:px-16">
        <div className="relative aspect-16/7 w-full max-w-[1200px] overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 -top-[10%] h-[120%] w-full"
        >
          {service.coverVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={service.coverImage}
              src={service.coverVideo}
            />
          ) : (
            <Image
              src={service.coverImage}
              alt={service.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 flex flex-col justify-end p-8 pb-16 md:p-16 "
        >
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/60">
            Our Services
          </p>
          <h1 className="font-heading text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[3rem] max-w-5xl">
            {service.title}
          </h1>
        </motion.div>
        </div>
      </section>

      {/* ── Process (vertical scroll → horizontal) ───────────────── */}
      <ProcessSection slug={slug} />

      {/* ── Project Grid ─────────────────────────────────────────── */}
      <ProjectGrid slug={slug} />

      <Footer />
    </main>
  );
}
