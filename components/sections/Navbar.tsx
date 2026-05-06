"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-16 w-full items-center transition-all duration-500 sm:h-20 md:h-24",
        scrolled ? "bg-bg/95 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/lucid-logo.svg"
            alt="Lucid The Artistry"
            width={180}
            height={64}
            className="h-10 w-auto brightness-0 invert sm:h-12 md:h-16"
          />
        </Link>

        {/* Get a Quote */}
        <Link
          href="/contact#quote"
          className="rounded-full border border-white/70 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-bg sm:px-5 sm:py-2.5 sm:text-xs"
        >
          Get a Quote →
        </Link>
      </div>
    </header>
  );
}
