"use client";

import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Linkedin", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

const pageLinks = [
  { label: "Project", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative min-h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden bg-bg">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/FARMHOUSE/1. LUSH MEADOW EKTA NAGAR/Kathanpur Pool Night_Cam01-v01.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Giant watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[13vw] sm:text-[10vw] font-bold uppercase tracking-tight text-white/15 whitespace-nowrap leading-none"
          aria-hidden
        >
          LUCID THE ARTISTRY
        </span>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10">

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Page links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            {pageLinks.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-xs font-medium uppercase transition-colors text-white"
              >
                {p.label}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}
