"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function BottomNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hasAutoOpenedRef = useRef(false);
  const openRef = useRef(open);
  const lastScrollYRef = useRef(0);

  const current = navLinks.find((l) => l.href === pathname)?.label ?? "Menu";

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // Auto-open at bottom of page
  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;

      if (isScrollingUp && openRef.current) {
        setOpen(false);
      }

      const atBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 80;

      if (atBottom && !hasAutoOpenedRef.current) {
        hasAutoOpenedRef.current = true;
        setOpen(true);
      }
      if (!atBottom) {
        hasAutoOpenedRef.current = false;
      }

      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex flex-col items-center gap-3">

      {/* Expanded menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            className="w-[340px] sm:w-[380px] rounded-2xl bg-[#1a1a1a] overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
          >
            <div className="px-8 pt-8 pb-6">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                Menu
              </p>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.22 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block text-3xl font-semibold leading-tight text-white transition-colors hover:text-white/50",
                        pathname === link.href && "text-white/35"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="px-6 pb-6">
              <Link
                href="/contact#quote"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-bg py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
              >
                <span>↳</span>
                <span>Get a Quote</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pill */}
      <div className="flex h-12 items-center rounded-lg bg-[#1a1a1a]/95 px-5 py-3 gap-3 shadow-xl backdrop-blur-md">

        {/* Logo + page name — hidden when open */}
        <AnimatePresence initial={false}>
          {!open && (
            <motion.div
              key="pill-left"
              className="flex items-center gap-7 overflow-hidden"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.22 }}
            >
              {/* Logo icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                <Image
                  src="/Lucid-Icon-White.svg"
                  alt="Lucid"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
              </div>
              {/* Page name */}
              <span className="mr-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-white">
                {current}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button — hamburger when closed, ✕ when open */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/10"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                className="text-base font-light text-white"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.18 }}
              >
                ✕
              </motion.span>
            ) : (
              <motion.span
                key="burger"
                className="flex flex-col items-center gap-[5px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <span className="h-[2px] w-5 bg-white" />
                <span className="h-[2px] w-5 bg-white" />
                <span className="h-[2px] w-5 bg-white" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

      </div>
    </div>
  );
}
