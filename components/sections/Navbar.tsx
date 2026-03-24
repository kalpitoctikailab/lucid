"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/brochures", label: "Brochures" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex h-20 w-full items-center justify-center transition-all duration-500",
          scrolled ? "bg-bg/95 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/lucid-logo.svg"
              alt="Lucid The Artistry"
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-text-primary/90 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#quote"
              className="rounded-full border border-accent px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              Get Quote →
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-text-primary transition-transform",
                mobileOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-text-primary transition-opacity",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-text-primary transition-transform",
                mobileOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
        style={{ transition: "visibility 0.3s, opacity 0.3s" }}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-2xl font-light text-text-primary"
              onClick={() => setMobileOpen(false)}
              style={{
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#quote"
            className="mt-4 rounded-full border border-accent px-8 py-3 text-sm font-medium uppercase tracking-widest text-accent"
            onClick={() => setMobileOpen(false)}
          >
            Get Quote →
          </Link>
        </nav>
      </div>
    </>
  );
}
