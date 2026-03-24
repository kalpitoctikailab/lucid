"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesBar() {
  const labels = [
    "Commercial",
    "Residential",
    "Duplex",
    "Walkthrough",
    "360° Tours",
  ];

  return (
    <section className="border-y border-border bg-bg-alt py-4">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-4 px-4">
        {services.map((service, i) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={cn(
              "rounded-full border border-accent px-6 py-2 text-xs font-medium uppercase tracking-widest text-accent transition-colors",
              "hover:bg-accent hover:text-bg"
            )}
          >
            {labels[i] ?? service.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
