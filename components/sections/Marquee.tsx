"use client";

export function Marquee() {
  const text =
    "3D COMMERCIAL RENDERING  ✦  WALKTHROUGH ANIMATION  ✦  360° VIRTUAL TOURS  ✦  INTERIOR VISUALIZATION  ✦  RESIDENTIAL RENDERING  ✦";

  return (
    <section className="overflow-hidden border-y border-border bg-bg-alt py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {text}
        </span>
        <span className="mx-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {text}
        </span>
        <span className="mx-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {text}
        </span>
      </div>
    </section>
  );
}
