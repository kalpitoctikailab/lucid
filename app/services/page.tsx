"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";

/* ─── Slider data ─────────────────────────────────────────────── */
const slides = [
  {
    image:
      "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad143ae9dc8c2143ead7_service-small1.webp",
    title: "3D Commercial Rendering",
    description:
      "Photorealistic visuals for offices, retail, and hospitality — built to impress at every scale.",
    href: "/services/commercial",
    tint: "rgba(10,10,18,0.55)",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad167a671786732c026c_service-small2.webp",
    title: "3D Duplex Rendering",
    description:
      "Luxury duplex and villa visualizations that highlight spatial flow and premium finishes.",
    href: "/services/duplex",
    tint: "rgba(30,18,8,0.60)",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad151f3f2224e327ddb4_service-small3.webp",
    title: "3D Residential Rendering",
    description:
      "Interior and exterior renders for homes and apartments that make buyers feel at home.",
    href: "/services/residential",
    tint: "rgba(8,20,35,0.60)",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad14b26d8eef50f26b60_service-small4.webp",
    title: "Walkthrough",
    description:
      "Cinematic 4K animations that guide viewers through every corner of your architectural space.",
    href: "/services/walkthrough",
    tint: "rgba(10,30,20,0.60)",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad140c988deab69a716a_service-small5.webp",
    title: "360° Virtual Tours",
    description:
      "Immersive panoramic tours that let clients explore your property from anywhere in the world.",
    href: "/services/360-tours",
    tint: "rgba(10,15,50,0.60)",
  },
];

/* ─── FAQ data ────────────────────────────────────────────────── */
const faqs = [
  {
    question: "What types of projects do you work on?",
    answer:
      "We work across a wide range of digital projects — from brand identities and UI/UX design to full website development, mobile apps, and Web3 experiences. If it lives on a screen, we can help shape it.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. A branding project typically takes 2–4 weeks, while a full website or app can range from 6–16 weeks. We'll give you a clear timeline during the discovery phase.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. We love working with founders who have a clear vision but need help translating it into a polished product. We offer flexible engagement models suited to early-stage budgets.",
  },
  {
    question: "What does your design process look like?",
    answer:
      "We follow a structured process: Discovery → Strategy → Design → Feedback → Delivery. Every stage involves close collaboration with you so there are no surprises at the end.",
  },
  {
    question: "Can you help with an existing product that needs a redesign?",
    answer:
      "Yes. We regularly take on redesign projects. We start with a UX audit to understand what's working and what isn't, then build a roadmap for improvement.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "We offer post-launch support packages for maintenance, updates, and iterative improvements. We're invested in your product's long-term success, not just the handoff.",
  },
];

/* ─── Arrow SVG ───────────────────────────────────────────────── */
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10H16M16 10L10 4M16 10L10 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Service Card ────────────────────────────────────────────── */
function ServiceCard({ slide }: { slide: (typeof slides)[0] }) {
  return (
    <Link
      href={slide.href}
      aria-label={`Learn more about ${slide.title}`}
      className="group relative shrink-0 w-[72vw] h-[calc(72vw*444/350)] sm:w-[300px] sm:h-[381px] lg:w-[350px] lg:h-[444px] rounded-3xl overflow-hidden block"
    >
      {/* Full-bleed image */}
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 300px, 350px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />

        {/* Title + description — top-left */}
      <div className="absolute top-0 left-0 right-0 p-6">
        <h3 className="font-heading text-xl font-semibold text-white leading-snug">
          {slide.title}
        </h3>
        <p className="mt-2 text-[13px] font-light leading-relaxed text-white/75 ">
          {slide.description}
        </p>
      </div>

      {/* Arrow button — bottom-left */}
      <div className="absolute bottom-5 left-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
}

/* ─── FAQ Item ────────────────────────────────────────────────── */
function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5">
          <span className="text-[11px] font-medium tabular-nums tracking-[0.2em] text-white/30 mt-0.5 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-heading text-base font-light text-white/80 group-hover:text-white transition-colors duration-300 leading-snug">
            {faq.question}
          </span>
        </div>
        <span
          className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/40 transition-all duration-300 ${
            open ? "rotate-45 border-white/60 text-white" : "group-hover:border-white/40"
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1V11M1 6H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-80 pb-6" : "max-h-0"
        }`}
      >
        <p className="pl-9 text-sm font-light leading-relaxed text-white/50">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function ServicesPage() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* ── Slider Section ───────────────────────────────────────── */}
      <section className="overflow-hidden pt-32 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8 md:px-12 lg:px-0">

          {/* Heading — mirrors home page h1 scale and weight */}
          <div className="mb-12 md:mb-16">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/50">
              What We Do
            </p>
            <h1 className="font-heading text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
              Services &amp; solutions{" "}
              <span className="italic text-white/50">we offer.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm font-light leading-relaxed tracking-wide text-white/60 md:text-base">
              We work with creative teams and ambitious founders to turn vision
              into product — with intuitive UX, standout visuals, and seamless
              digital experiences that users remember.
            </p>
          </div>

        </div>

        {/* Slider — bleeds past container on the right */}
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8 md:px-12 lg:px-0">
          <div className="overflow-visible">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${current} * (min(350px, 72vw) + 1.5rem)))`,
              }}
            >
              {slides.map((slide) => (
                <ServiceCard key={slide.title} slide={slide} />
              ))}

              {/* End card */}
              <div
                className="group shrink-0 w-[72vw] h-[calc(72vw*444/350)] sm:w-[300px] sm:h-[381px] lg:w-[350px] lg:h-[444px] rounded-2xl border border-white/10 flex flex-col justify-center gap-5 p-8 md:p-10"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
                  And there&apos;s more
                </p>
                <h3 className="font-heading text-3xl font-light text-white leading-tight">
                  Specialized support built for evolving teams.
                </h3>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors duration-300"
                >
                  Get in touch
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous slide"
              className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:border-white/60 hover:text-white transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              onClick={next}
              disabled={current >= total - 1}
              aria-label="Next slide"
              className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:border-white/60 hover:text-white transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ArrowIcon />
            </button>

            {/* Dots */}
            <div
              className="flex items-center gap-2 ml-3"
              role="tablist"
              aria-label="Slide indicators"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 md:px-12 lg:px-0">
        <div className="h-px w-full bg-white/10" />
      </div>

      {/* ── FAQ Section ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8 md:px-12 lg:px-0">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">

            {/* Left */}
            <div className="lg:pt-2">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/50">
                FAQ
              </p>
              <h2 className="font-heading text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                Common questions,{" "}
                <span className="italic text-white/40">answered.</span>
              </h2>
            </div>

            {/* Right — accordion */}
            <div className="border-t border-white/10">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} index={i} />
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
