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
        "fixed inset-x-0 top-0 z-50 flex h-20 w-full items-center transition-all duration-500",
        scrolled ? "bg-bg/95 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 sm:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Lucid-logo-White.svg"
            alt="Lucid The Artistry"
            width={180}
            height={48}
            className="h-12 w-auto brightness-0 invert"
          />
        </Link>

        {/* Get a Quote */}
        <Link
          href="/contact#quote"
          className="rounded-full border border-white/70 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-bg"
        >
          Get a Quote →
        </Link>
      </div>
    </header>
  );
}
