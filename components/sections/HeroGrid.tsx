"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { featuredProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function HeroGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // 1. Black screen → Logo fades in center
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      // 2. Logo slides up and fades (navbar takes over)
      tl.to(
        logoRef.current,
        {
          y: -200,
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "power2.in",
        },
        "+=0.3"
      );

      // 3. Grid lines draw in (we'll use a simple reveal - grid fades in)
      tl.fromTo(
        gridRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.3"
      );

      // 4. Project images fade + scale into cells (stagger 0.06s)
      tl.fromTo(
        cellsRef.current.filter(Boolean),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // 5. Scroll hint pulses
      tl.fromTo(
        scrollHintRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  const heroProjects = featuredProjects.slice(0, 6);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col bg-bg"
    >
      {/* Centered logo (fades in, then slides up and out) */}
      <div
        ref={logoRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <Link href="/" className="font-heading text-4xl font-light tracking-tight text-text-primary md:text-5xl">
          LUCID
        </Link>
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-accent">
          The Artistry
        </p>
      </div>

      {/* Hero grid */}
      <div
        ref={gridRef}
        className="relative grid h-screen grid-cols-3 grid-rows-2 gap-0.5 p-0.5 opacity-0"
      >
        {heroProjects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => {
              cellsRef.current[i] = el;
            }}
            className={cn(
              "group relative overflow-hidden",
              i === 0 && "col-span-2 row-span-2",
              i === 1 && "col-span-1 row-span-1",
              i === 2 && "col-span-1 row-span-1",
              i === 3 && "col-span-1 row-span-1",
              i === 4 && "col-span-1 row-span-1",
              i === 5 && "col-span-1 row-span-1"
            )}
            data-cursor="view"
          >
            <Link href={`/projects/${project.slug}`} className="block h-full w-full">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 flex items-end bg-black/0 p-6 opacity-0 transition-all duration-500 group-hover:bg-black/50 group-hover:opacity-100">
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {project.category}
                  </p>
                  <h3 className="font-heading text-xl font-light text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Scroll to explore */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-pulse text-xs font-medium uppercase tracking-widest text-text-muted"
      >
        Scroll to explore ↓
      </div>
    </section>
  );
}
