"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { HERO_VIDEO, HERO_VIDEO_FALLBACK } from "@/data/hero";
import Image from "next/image";
import Link from "next/link";

type PanoramaInstance = {
  dispose?: () => void;
  add?: (spot: InfospotInstance) => void;
};
type InfospotInstance = {
  position: { set: (x: number, y: number, z: number) => void };
  addEventListener: (event: string, cb: () => void) => void;
};
type ViewerInstance = {
  add: (panorama: PanoramaInstance) => void;
  setPanorama: (panorama: PanoramaInstance) => void;
  dispose?: () => void;
};
type PanolensShape = {
  ImagePanorama: new (src: string) => PanoramaInstance;
  Infospot: new (scale: number, imageSrc?: string) => InfospotInstance;
  DataImage?: { Arrow?: string };
  Viewer: new (options: Record<string, unknown>) => ViewerInstance;
};

type HotspotPixelConfig = {
  x: number;
  y: number;
  targetSceneIndex: number;
};
type SceneEntry = {
  src: string;
  sceneNumber: number;
};

const EQUIRECT_WIDTH = 8000;
const EQUIRECT_HEIGHT = 4000;
const HOTSPOTS_BY_PROJECT: Record<string, Record<number, HotspotPixelConfig[]>> = {
  "satyam-surya": {
    0: [{ x: 1000, y: 2575, targetSceneIndex: 1 }, { x: 500, y: 2200, targetSceneIndex: 2 }],
    1: [{ x: 300, y: 2575, targetSceneIndex: 2 }, { x: 5000, y: 2575, targetSceneIndex: 0 }],
    2: [{ x: 4500, y: 2250, targetSceneIndex: 0 }, { x: 3700, y: 2575, targetSceneIndex: 1 }, { x: 400, y: 2600, targetSceneIndex: 3 }],
    3: [{ x: 4400, y: 2250, targetSceneIndex: 0 }, { x: 4000, y: 2250, targetSceneIndex: 1 }, { x: 4200, y: 2600, targetSceneIndex: 2 }, { x: 7000, y: 2200, targetSceneIndex: 4 }],
    4: [{ x: 4100, y: 2250, targetSceneIndex: 0 }, { x: 3700, y: 2250, targetSceneIndex: 1 }, { x: 3000, y: 2600, targetSceneIndex: 3 }, { x: 7000, y: 2200, targetSceneIndex: 5 }],
    5: [{ x: 3000, y: 2200, targetSceneIndex: 4 }, { x: 7000, y: 2200, targetSceneIndex: 6 }, { x: 4500, y: 2200, targetSceneIndex: 19}],
    6: [{ x: 3000, y: 2200, targetSceneIndex: 5 }, { x: 1500, y: 2200, targetSceneIndex: 7 }, { x: 250, y: 2200, targetSceneIndex: 8 }, { x: 7200, y: 2200, targetSceneIndex: 9 }, { x: 5500, y: 2200, targetSceneIndex: 10 }],
    7: [{ x: 5000, y: 2200, targetSceneIndex: 6 }, { x: 1000, y: 2200, targetSceneIndex: 18}, ],
    8: [{ x: 4500, y: 2200, targetSceneIndex: 6 }, { x: 0, y: 2200, targetSceneIndex: 16}],
    9: [{ x: 3200, y: 2200, targetSceneIndex: 6 }, { x: 6500, y: 2200, targetSceneIndex: 14 }],
    10: [{ x: 1300, y: 2200, targetSceneIndex: 6 }, { x: 5000, y: 2200, targetSceneIndex: 11 }],
    11: [{ x: 1000, y: 2200, targetSceneIndex: 10 }, { x: 5500, y: 2200, targetSceneIndex: 13 }, { x: 6800, y: 2200, targetSceneIndex: 12 }],
    12: [{ x: 4000, y: 2200, targetSceneIndex: 13 }, { x: 2700, y: 2200, targetSceneIndex: 11 }],
    13: [{ x: 0, y: 2200, targetSceneIndex: 12 }, { x: 1600, y: 2200, targetSceneIndex: 11 }],
    14: [{ x: 2500, y: 2200, targetSceneIndex: 9 }, { x: 4500, y: 2200, targetSceneIndex: 15 }],
    15: [{ x: 0, y: 2200, targetSceneIndex: 14 }],
    16: [{ x: 4100, y: 2200, targetSceneIndex: 8 }, { x: 6000, y: 2200, targetSceneIndex: 17 }],
    17: [{ x: 3500, y: 2200, targetSceneIndex: 8 }, { x: 2000, y: 2200, targetSceneIndex: 16}],
    18: [{ x: 5200, y: 2200, targetSceneIndex: 7 }],
    19: [{ x: 1000, y: 2200, targetSceneIndex: 5 }, { x: 6200, y: 2200, targetSceneIndex: 20 }],
    20: [{ x: 1500, y: 2200, targetSceneIndex: 5 }, { x: 2200, y: 2200, targetSceneIndex: 19 }],
  },
};

function pixelToSpherePosition(x: number, y: number, radius = 5000) {
  const u = x / EQUIRECT_WIDTH;
  const v = y / EQUIRECT_HEIGHT;
  const theta = (u - 0.5) * 2 * Math.PI;
  const phi = (0.5 - v) * Math.PI;
  const cosPhi = Math.cos(phi);

  return {
    x: radius * Math.sin(theta) * cosPhi,
    y: radius * Math.sin(phi),
    z: -radius * Math.cos(theta) * cosPhi,
  };
}

function getSceneNumberFromSrc(src: string, fallback: number) {
  const fileName = src.split("/").pop() ?? "";
  const match = fileName.match(/_(\d+)\.(jpg|jpeg|png|webp)$/i);
  if (!match) return fallback;
  return Number.parseInt(match[1], 10);
}

function Panorama360Section({
  projectSlug,
  images,
}: {
  projectSlug: string;
  images: string[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<ViewerInstance | null>(null);
  const panoramasRef = useRef<PanoramaInstance[]>([]);
  const [viewerError, setViewerError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageList = useMemo<SceneEntry[]>(
    () =>
      images
        .filter(Boolean)
        .map((src, idx) => ({
          src,
          sceneNumber: getSceneNumberFromSrc(src, idx + 1),
        }))
        .sort((a, b) => a.sceneNumber - b.sceneNumber),
    [images]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [projectSlug]);

  useEffect(() => {
    let disposed = false;

    const mountViewer = async () => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";

      try {
        setViewerError(null);
        const panolensModule = (await import("panolens")) as unknown as
          | PanolensShape
          | { default: PanolensShape };
        const PANOLENS =
          "default" in panolensModule ? panolensModule.default : panolensModule;

        if (imageList.length === 0) {
          throw new Error("No panorama images provided.");
        }

        const panoramas = imageList.map((scene) => new PANOLENS.ImagePanorama(scene.src));
        panoramas.forEach((panorama, sceneIndex) => {
          const sceneHotspots = HOTSPOTS_BY_PROJECT[projectSlug]?.[sceneIndex] ?? [];
          sceneHotspots.forEach((spot) => {
            if (spot.targetSceneIndex < 0 || spot.targetSceneIndex >= imageList.length) return;
            const position = pixelToSpherePosition(spot.x, spot.y);
            const infospot = new PANOLENS.Infospot(650, PANOLENS.DataImage?.Arrow);
            infospot.position.set(position.x, position.y, position.z);
            infospot.addEventListener("click", () => {
              const nextPanorama = panoramas[spot.targetSceneIndex];
              if (nextPanorama) {
                viewer.setPanorama(nextPanorama);
              }
              setActiveIndex(spot.targetSceneIndex);
            });
            panorama.add?.(infospot);
          });
        });

        let viewer: ViewerInstance;
        try {
          viewer = new PANOLENS.Viewer({
            container: containerRef.current,
            autoRotate: true,
            autoRotateSpeed: 0.2,
            controlBar: true,
          });
        } catch {
          // Panolens can throw in some runtimes when building control bar internals.
          // Fallback keeps the panorama tour usable instead of crashing the page.
          viewer = new PANOLENS.Viewer({
            container: containerRef.current,
            autoRotate: true,
            autoRotateSpeed: 0.2,
            controlBar: false,
          });
        }

        panoramas.forEach((panorama) => viewer.add(panorama));
        panoramasRef.current = panoramas;
        viewerRef.current = viewer;
        viewer.setPanorama(panoramas[0]);
      } catch {
        if (!disposed) {
          setViewerError("Unable to load 360 viewer right now.");
        }
      }
    };

    mountViewer();

    return () => {
      disposed = true;
      try {
        viewerRef.current?.dispose?.();
      } catch {
        // Ignore Panolens teardown errors.
      } finally {
        viewerRef.current = null;
        panoramasRef.current = [];
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
      }
    };
  }, [imageList, projectSlug]);

  useEffect(() => {
    const viewer = viewerRef.current;
    const panoramas = panoramasRef.current;
    const panorama = panoramas[activeIndex];
    if (!viewer || !panorama) return;
    viewer.setPanorama(panorama);
  }, [activeIndex]);

  return (
    <section className="mx-auto max-w-300 px-4 sm:px-6 lg:px-12 py-8 md:py-12">
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
        360 Panorama
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {imageList.map((src, idx) => {
          const fileName = src.src.split("/").pop() ?? `Scene ${src.sceneNumber}`;
          return (
            <button
              key={src.src}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`rounded border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                activeIndex === idx
                  ? "border-white/60 bg-white/15 text-white"
                  : "border-white/20 bg-black/30 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {`Scene ${src.sceneNumber}`}
              <span className="ml-2 hidden text-[9px] normal-case tracking-normal text-white/50 md:inline">
                {fileName}
              </span>
            </button>
          );
        })}
      </div>
      <div className="panorama-viewer-shell relative h-svh w-full overflow-hidden rounded-sm bg-black">
        <div ref={containerRef} className="h-full w-full" />
        {viewerError ? (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-white/70">
            {viewerError}
          </div>
        ) : null}
      </div>
      <style jsx global>{`
        .panorama-viewer-shell button,
        .panorama-viewer-shell [role="button"],
        .panorama-viewer-shell select,
        .panorama-viewer-shell option,
        .panorama-viewer-shell ul,
        .panorama-viewer-shell li,
        .panorama-viewer-shell div[aria-label*="control" i],
        .panorama-viewer-shell div[aria-label*="mode" i] {
          background: #000 !important;
          color: #fff !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
        }
      `}</style>
    </section>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  title,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
        aria-label="Close"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute left-5 top-5 text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-white hover:text-white hover:scale-110"
          aria-label="Previous image"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Next */}
      {index < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-white hover:text-white hover:scale-110"
          aria-label="Next image"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 3L13 9L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative max-h-[90vh] max-w-[90vw] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full max-h-[90vh] max-w-[90vw]">
          <Image
            src={images[index]}
            alt={`${title} — ${index + 1}`}
            fill
            sizes="90vw"
            className="select-none object-contain"
            draggable={false}
            priority
          />
        </div>
      </motion.div>


    </motion.div>
  );
}

// ─── Progressive Image Component ─────────────────────────────────────────────
// Loads a tiny blur placeholder first, then lazy-loads the full resolution image
function ProgressiveImage({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className || ""}`} onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        sizes="(max-width: 1024px) 100vw, 1200px"
        className={`h-auto w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />

      {/* Loading spinner overlay */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/60" />
        </div>
      )}
    </div>
  );
}

// ─── Smart Masonry Gallery ────────────────────────────────────────────────────
// Measures each image's natural dimensions, then builds rows intelligently:
//  - Wide images (landscape) can span 2 cols or share a row with portrait
//  - Portrait/square images fill remaining space
//  - Images render at their TRUE aspect ratio — no cropping ever

type ImgMeta = { src: string; idx: number; aspect: number }; // aspect = width/height

function SmartMasonryGallery({ images, title }: { images: string[]; title: string }) {
  const [metas, setMetas] = useState<ImgMeta[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Measure every image once on mount
  useEffect(() => {
    let cancelled = false;
    const results: ImgMeta[] = new Array(images.length);
    let loaded = 0;

    images.forEach((src, idx) => {
      const img = new window.Image();
      img.onload = () => {
        if (cancelled) return;
        const aspect = img.naturalWidth / img.naturalHeight;
        results[idx] = { src, idx, aspect };
        loaded++;
        if (loaded === images.length) setMetas([...results]);
      };
      img.onerror = () => {
        if (cancelled) return;
        results[idx] = { src, idx, aspect: 1.5 }; // default landscape on error
        loaded++;
        if (loaded === images.length) setMetas([...results]);
      };
      img.src = src;
    });

    return () => { cancelled = true; };
  }, [images]);

  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const next = () => setLightboxIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i));

  // Classify images: wide (landscape), tall (portrait), square
  const isWide = (aspect: number) => aspect >= 1.3;
  const isTall = (aspect: number) => aspect < 0.8;
  const isSquare = (aspect: number) => aspect >= 0.8 && aspect < 1.3;

  // Build rows greedily — each row is an array of { item, colSpan }
  type RowItem = { item: ImgMeta; colSpan: number };
  type Row = RowItem[];

  function buildRows(items: ImgMeta[]): Row[] {
    const rows: Row[] = [];
    let i = 0;

    while (i < items.length) {
      const a = items[i];
      const b = items[i + 1];
      const c = items[i + 2];

      if (!a) break;

      const aWide = isWide(a.aspect);
      const aTall = isTall(a.aspect);
      const bWide = b ? isWide(b.aspect) : false;
      const bTall = b ? isTall(b.aspect) : false;

      // Strategy:
      // - Wide images prefer 2 cols (out of 3-col grid)
      // - Tall/square prefer 1 col
      // - Try to fill rows to ~3 cols total

      if (aWide) {
        // Wide image — try to pair with a tall/square
        if (b && (bTall || isSquare(b.aspect))) {
          // wide(2) + tall/square(1) = 3 cols
          rows.push([
            { item: a, colSpan: 2 },
            { item: b, colSpan: 1 },
          ]);
          i += 2;
        } else if (b && bWide) {
          // two wide images — each gets 1.5 cols (use 2-col grid, each span-1)
          rows.push([
            { item: a, colSpan: 1 },
            { item: b, colSpan: 1 },
          ]);
          i += 2;
        } else {
          // single wide — full width
          rows.push([{ item: a, colSpan: 3 }]);
          i += 1;
        }
      } else if (aTall || isSquare(a.aspect)) {
        // Tall or square — try to group with others
        if (b && bWide) {
          // tall/square(1) + wide(2) = 3 cols
          rows.push([
            { item: a, colSpan: 1 },
            { item: b, colSpan: 2 },
          ]);
          i += 2;
        } else if (b && c && (bTall || isSquare(b.aspect)) && (isTall(c.aspect) || isSquare(c.aspect))) {
          // three tall/square — each gets 1 col
          rows.push([
            { item: a, colSpan: 1 },
            { item: b, colSpan: 1 },
            { item: c, colSpan: 1 },
          ]);
          i += 3;
        } else if (b && (bTall || isSquare(b.aspect))) {
          // two tall/square — each gets 1.5 cols (use 2-col grid)
          rows.push([
            { item: a, colSpan: 1 },
            { item: b, colSpan: 1 },
          ]);
          i += 2;
        } else {
          // single tall/square — full width
          rows.push([{ item: a, colSpan: 3 }]);
          i += 1;
        }
      } else {
        // Fallback (shouldn't hit)
        rows.push([{ item: a, colSpan: 3 }]);
        i += 1;
      }
    }

    return rows;
  }

  // Show skeleton while measuring
  if (metas.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        {images.map((_, i) => (
          <div
            key={i}
            className="w-full bg-surface/30 animate-pulse rounded"
            style={{ height: i % 3 === 0 ? "400px" : i % 3 === 1 ? "600px" : "500px" }}
          />
        ))}
      </div>
    );
  }

  const rows = buildRows(metas);

  return (
    <>
      <div className="flex flex-col gap-3 md:gap-4">
        {rows.map((row, rowIdx) => {
          // Determine grid columns based on total colSpan
          const totalSpan = row.reduce((sum, r) => sum + r.colSpan, 0);
          // On mobile: always 1 column. On sm+: use the actual multi-column layout
          const gridCols =
            totalSpan === 3 ? "grid-cols-1 sm:grid-cols-3" :
            totalSpan === 2 ? "grid-cols-1 sm:grid-cols-2" :
            "grid-cols-1";

          return (
            <div key={rowIdx} className={`grid ${gridCols} gap-3 md:gap-4`}>
              {row.map(({ item, colSpan }, itemIdx) => {
                // On mobile all items are full width; on sm+ use actual colSpan
                const spanClass =
                  colSpan === 3 ? "col-span-1 sm:col-span-3" :
                  colSpan === 2 ? "col-span-1 sm:col-span-2" :
                  "col-span-1";

                return (
                  <motion.div
                    key={item.idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-6%" }}
                    transition={{
                      duration: 0.75,
                      delay: itemIdx * 0.08,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className={`${spanClass} group cursor-zoom-in overflow-hidden rounded-sm`}
                  >
                    <ProgressiveImage
                      src={item.src}
                      alt={`${title} — image ${item.idx + 1}`}
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      onClick={() => setLightboxIndex(item.idx)}
                    />
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          title={title}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

// ─── Video Hero (same style as HeroBanner) ───────────────────────────────────
function ProjectVideoHero({ videoSrc, poster }: { videoSrc?: string; poster: string }) {
  const sectionRef = useRef<HTMLElement>(null);
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

  return (
    <section
      ref={sectionRef}
      className="relative z-0 flex items-center justify-center overflow-hidden bg-bg px-4 pt-24 pb-0 sm:px-8 md:px-12 lg:px-16"
      style={{ height: "calc(100svh - 0px)" }}
    >
      <div className="relative w-full max-w-300 overflow-hidden" style={{ aspectRatio: "16/7" }}>
        <motion.div
          className="absolute inset-0 -top-[8%] h-[118%] w-full will-change-transform"
          style={{ y: mediaY, scale: mediaScale }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            className="h-full w-full object-cover"
          >
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
            <source src={HERO_VIDEO} type="video/mp4" />
            <source src={HERO_VIDEO_FALLBACK} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);
  const { prev, next } = getAdjacentProjects(slug);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;
  if (!project) return null;

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* ── 1. Video Hero Banner ── */}
      <ProjectVideoHero
        videoSrc={project.video}
        poster={project.videoThumbnail ?? project.coverImage}
      />

      {/* ── 2. Main Image + Text Split ── */}
      <section className="mx-auto max-w-300 px-4 sm:px-6 lg:px-0 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left — main cover image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              {/* <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-text-muted">
                {project.category}
              </p> */}
              <h1 className="font-heading text-4xl leading-12 font-light tracking-tight text-white md:text-5xl lg:text-4xl">
                <span style={{ fontFamily: "MistralMN, cursive" }} className="text-8xl">We</span>
                <br />
                <span className="font-bold">DON&apos;T JUST</span>
                <br />
                <span className="font-bold">VISUALIZE SPACES;</span>
                <br />
                <span className="font-bold">WE BRING THEM TO LIFE.</span>
              </h1>
            </div>

            <div className="h-px w-16 bg-white/20" />

            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">
                <span className="text-text-muted">PROJECT : </span>
                {project.title}
              </p>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">
                <span className="text-text-muted">CGI: </span>
                LUCID THE ARTISTRY
              </p>
              {/* {project.location && (
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">
                  <span className="text-text-muted">LOCATION: </span>
                  {project.location}
                </p>
              )}
              {project.year && (
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">
                  <span className="text-text-muted">YEAR: </span>
                  {project.year}
                </p>
              )}
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">
                <span className="text-text-muted">TYPE: </span>
                {project.type}
              </p> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Gallery ── */}
      <section className="mx-auto max-w-300 px-4 sm:px-6 lg:px-0 pb-16 md:pb-24">
        <SmartMasonryGallery images={project.images} title={project.title} />
      </section>

      {project.category === "Virtual Tour" ? (
        <Panorama360Section projectSlug={project.slug} images={project.images} />
      ) : null}

      {/* ── 4. Previous / Next Navigation ── */}
      {(prev || next) && (
        <section className="mx-auto max-w-300 px-4 sm:px-6 lg:px-12 py-16 border-t border-white/10">
          <div className="flex items-start justify-between gap-8">

            {/* Previous */}
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex flex-col gap-3 max-w-[45%]"
              >
                <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-text-muted transition-colors group-hover:text-accent">
                  <svg width="32" height="10" viewBox="0 0 32 10" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
                    <path d="M0 5H30M30 5L26 1M30 5L26 9" stroke="currentColor" strokeWidth="1.5" transform="scale(-1,1) translate(-32,0)" />
                    <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.5" />
                    <polyline points="4,1 0,5 4,9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                  <span>Previous</span>
                </div>
                <p className="text-sm font-light text-white/80 group-hover:text-white transition-colors leading-snug">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div className="max-w-[45%]" />
            )}

            {/* Next */}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-3 max-w-[45%] items-end text-right"
              >
                <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-text-muted transition-colors group-hover:text-accent">
                  <span>Next</span>
                  <svg width="32" height="10" viewBox="0 0 32 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <line x1="0" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="1.5" />
                    <polyline points="24,1 28,5 24,9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <p className="text-sm font-light text-white/80 group-hover:text-white transition-colors leading-snug">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="max-w-[45%]" />
            )}

          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
