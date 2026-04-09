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
    <footer className="relative h-[420px] sm:h-[480px] overflow-hidden bg-bg">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/lucid-project-data/FARMHOUSE/LUSH MEADOW EKTA NAGAR/Kathanpur Pool Night_Cam01-v01.webp')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Giant watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[13vw] sm:text-[10vw] font-bold uppercase tracking-tight text-white/15 whitespace-nowrap leading-none"
          aria-hidden
        >
          LUCID THE ARTISTRY
        </span>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 ">
        <div className="flex items-center justify-between px-6 sm:px-10 py-10 gap-4">

          {/* Social links — left */}
          <div className="flex items-center gap-4 sm:gap-6">
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

          {/* Page links — right */}
          <div className="flex items-center gap-4 sm:gap-6">
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
