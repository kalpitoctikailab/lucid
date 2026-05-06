"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import type { Project } from "@/data/projects";
import {
  HOME_PORTFOLIO_INLINE_VIDEO_LABEL,
  type HomeCategoryCard,
  homePortfolioCategories,
  homePortfolioInlineVideos,
} from "@/data/homePortfolio";

// ─── Category image card (home portfolio) ────────────────────────────────────
function CategoryImageCard({ card }: { card: HomeCategoryCard }) {
  return (
    <Link
      href={card.href}
      className="group block w-full"
      data-cursor="view"
    >
      <div className="relative h-[770px] w-full min-w-0 overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 580px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <p className="mt-3 text-right text-[11px] font-medium uppercase tracking-[0.25em] text-white/70">
        {card.title}
      </p>
    </Link>
  );
}

// ─── Inline Video Card (click to play) — static src/poster from homePortfolio ──
function InlineVideoCard({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div className="w-full cursor-pointer" onClick={toggle}>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {src ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src={poster}
            alt={label}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        )}
        {/* subtle dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Play button */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/50 bg-black/30 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
              <svg
                className="ml-1.5 h-7 w-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <p className="mt-3 text-right text-[11px] font-medium uppercase tracking-[0.25em] text-white/70">
        {label}
      </p>
    </div>
  );
}

// ─── 2 category cards + 1 inline video ───────────────────────────────────────
function PortfolioGroup({
  left,
  right,
  video,
}: {
  left: HomeCategoryCard;
  right: HomeCategoryCard;
  video: { src: string; poster: string };
}) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <CategoryImageCard card={left} />
        <CategoryImageCard card={right} />
      </div>
      <InlineVideoCard
        src={video.src}
        poster={video.poster}
        label={HOME_PORTFOLIO_INLINE_VIDEO_LABEL}
      />
    </div>
  );
}

// ─── Cinematic Section ───────────────────────────────────────────────────────
// Phases:
//  IDLE    → section not yet reached (video at small scale, still playing)
//  GROWING → entered section; scale / radius follow scroll (video already playing)
function CinematicSection({ project }: { project: Project }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [phase, setPhase] = useState<"idle" | "growing">("idle");
  const phaseRef = useRef<"idle" | "growing">("idle");

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !project.video) return;
    el.play().catch(() => {});
  }, [project.video]);

  // Drives scale animation — measured against the full 300vh wrapper
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Entry trigger — fires when wrapper top crosses 50% of viewport
  const { scrollYProgress: entryProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 0.99", "start 0.5"],
  });

  const beginGrowingPhase = useCallback(() => {
    if (phaseRef.current !== "idle") return;
    phaseRef.current = "growing";
    setPhase("growing");
  }, []);

  useMotionValueEvent(entryProgress, "change", (v) => {
    if (v >= 1) beginGrowingPhase();
  });

  // Refresh / scroll-restore / Strict Mode: entryProgress may already be >= 1 before any "change" event
  useEffect(() => {
    let cancelled = false;
    let rafOuter = 0;
    let rafInner = 0;
    rafOuter = requestAnimationFrame(() => {
      rafInner = requestAnimationFrame(() => {
        if (cancelled) return;
        if (phaseRef.current === "idle" && entryProgress.get() >= 1) {
          beginGrowingPhase();
        }
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafOuter);
      cancelAnimationFrame(rafInner);
    };
  }, [entryProgress, beginGrowingPhase]);

  const scale = useTransform(scrollYProgress, [0.0, 0.65], [0.42, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.0, 0.65], [14, 0]);

  const isGrowing = phase === "growing";

  return (
    // Full-width wrapper — NOT inside any max-w container so sticky works vs viewport
    <div ref={wrapperRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen bg-bg flex items-center justify-center overflow-hidden">
        {/* Inner box constrains video to 1200px */}
        <div className="relative w-full max-w-[1200px] px-4 sm:px-8 md:px-12 lg:px-0">

          {/* Video */}
          <motion.div
            className="relative w-full overflow-hidden"
            style={{
              scale: isGrowing ? scale : 0.42,
              borderRadius: isGrowing ? borderRadius : 14,
            }}
          >
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              {project.video ? (
                <video
                  ref={videoRef}
                  src={project.video}
                  poster={project.videoThumbnail ?? project.coverImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={project.videoThumbnail ?? project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>
          </motion.div>

          {/* Text — starts below video, slides up to overlap it */}
          <div
            className="pointer-events-none absolute bottom-0 left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16 z-10 flex flex-col items-start px-6 py-6 sm:px-8 sm:py-8"
            
          >
           
            <h2 className="text-4xl font-light leading-[1.1] text-white sm:text-5xl md:text-xl">
              The intersection of <br />accuracy and artistry.
              <br />
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
type Props = {
  cinematicProject: Project;
};

const [c0, c1, c2, c3, c4, c5] = homePortfolioCategories;

export function HomePortfolioFeed({ cinematicProject }: Props) {
  const [v0, v1, v2] = homePortfolioInlineVideos;

  return (
    <section className="bg-bg pt-10 pb-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 md:px-12 lg:px-0 flex flex-col gap-16 sm:gap-20">

        <PortfolioGroup left={c0} right={c1} video={v0} />
        <PortfolioGroup left={c2} right={c3} video={v1} />

      </div>

      {/* ── Cinematic Section — full-width so sticky works, video constrained inside ── */}
      <CinematicSection project={cinematicProject} />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 md:px-12 lg:px-0 flex flex-col gap-16 pt-20 sm:gap-20 sm:pt-28">

        <PortfolioGroup left={c4} right={c5} video={v2} />

      </div>
    </section>
  );
}
