"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { HERO_VIDEO, HERO_VIDEO_FALLBACK, HERO_POSTER } from "@/data/hero";

export function HeroBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 80,
    damping: 35,
    mass: 0.8,
  });

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const range = Math.max(rect.height, vh);
      const raw = Math.min(1, Math.max(0, -rect.top / range));
      scrollProgress.set(raw);
    };
    onScroll();
    const unsub = lenis.on("scroll", onScroll);
    return () => unsub();
  }, [lenis, scrollProgress]);

  const mediaY = useTransform(smoothProgress, [0, 1], ["-6%", "14%"]);
  const mediaScale = useTransform(smoothProgress, [0, 1], [1.14, 1.02]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.38], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.5], [0, -40]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    gsap.fromTo(
      overlay,
      { opacity: 1 },
      { opacity: 0, duration: 1.15, ease: "power2.inOut", delay: 0.15 },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-0 h-screen flex items-center justify-center overflow-hidden bg-bg px-4 pt-28 pb-8 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="relative aspect-16/7 w-full max-w-[1200px] overflow-hidden">
        <motion.div
          className="absolute inset-0 -top-[8%] h-[118%] w-full will-change-transform"
          style={{ y: mediaY, scale: mediaScale }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            className="h-full w-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
            <source src={HERO_VIDEO_FALLBACK} type="video/mp4" />
          </video>
        </motion.div>
      </div>

      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-10 bg-bg"
        aria-hidden
      />

      {/* Centered title over video */}
      {/* <motion.div
        className="relative z-20 flex min-h-svh flex-col items-center justify-center px-6 text-center"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-accent">
          3D Architectural Rendering Studio
        </p>
        <h1 className="font-heading text-center text-6xl font-medium leading-[1.05] tracking-tight text-white drop-shadow-2xl md:text-8xl lg:text-[7rem] xl:text-[8rem]">
          Lucid
          <br />
          <span className="font-medium italic text-accent">The Artistry</span>
        </h1>
        <p className="mt-6 max-w-md text-sm font-light leading-relaxed tracking-wide text-white/70 md:text-base">
          Photorealistic renders · 3D walkthroughs · 360° virtual tours
        </p>
        <div className="mt-10 h-px w-16 bg-accent/60" />
      </motion.div> */}
    </section>
  );
}
