"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/lucid-logo.svg"
                alt="Lucid The Artistry"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-text-muted">
              3D Architectural Rendering & Visualization
            </p>
            <p className="mt-1 text-sm text-text-muted">Vadodara, Gujarat</p>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Contact
            </h4>
            <a
              href="mailto:lucidtheartistry@gmail.com"
              className="mt-3 block text-sm text-text-primary hover:text-accent"
            >
              lucidtheartistry@gmail.com
            </a>
            <a
              href="tel:+919925004245"
              className="mt-1 block text-sm text-text-primary hover:text-accent"
            >
              +91 99250 04245
            </a>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Explore
            </h4>
            <nav className="mt-3 flex flex-col gap-2">
              <Link
                href="/projects"
                className="text-sm text-text-primary hover:text-accent"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="text-sm text-text-primary hover:text-accent"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm text-text-primary hover:text-accent"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-text-primary hover:text-accent"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Lucid The Artistry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
