"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 300, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Years" },
  { value: 50, suffix: "+", label: "Clients" },
  { value: 5, suffix: "", label: "Services" },
];

export function StatsRow() {
  const sectionRef = useRef<HTMLElement>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => setAnimated(true),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-y border-border bg-bg py-16"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-4xl font-light text-accent md:text-5xl">
              <span ref={(el) => { valueRefs.current[i] = el; }}>
                {animated ? stat.value : 0}
              </span>
              {stat.suffix}
            </div>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
