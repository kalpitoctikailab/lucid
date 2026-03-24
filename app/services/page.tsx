"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-[1920px] px-4 text-center sm:px-6 lg:px-12">
          <h1 className="font-heading text-6xl font-light leading-[1.05] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
            Our <span className="italic text-accent">Expertise</span>
          </h1>
        </div>
      </section>

      {/* Full-width Image Blocks */}
      <section className="pb-32">
        <div className="flex flex-col space-y-4 md:space-y-8 px-4 sm:px-6 lg:px-12 max-w-[2400px] mx-auto">
            {services.map((service, idx) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
                  <img
                    src={service.coverImage}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[15s] ease-out group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-black/50 transition-colors duration-700 group-hover:bg-black/20" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24 z-10 transition-transform duration-700 group-hover:-translate-y-4">
                    <span className="text-xs font-medium tabular-nums text-accent tracking-widest mb-4 block">
                      0{idx + 1} // {service.projectCount} Projects
                    </span>
                    <h2 className="font-heading text-4xl font-light text-white md:text-6xl lg:text-8xl">
                      {service.title}
                    </h2>
                    
                    <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <p className="text-lg font-light text-white/90 max-w-xl md:text-2xl mb-8 md:mb-0">
                        {service.shortDesc}
                      </p>
                      
                      <span className="inline-flex items-center gap-4 text-sm font-medium uppercase tracking-[0.25em] text-accent">
                        Discover 
                        <span>→</span>
                      </span>
                    </div>
                  </div>
              </Link>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
