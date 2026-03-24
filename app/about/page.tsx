"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* Cinematic Overlaid Hero */}
      <section className="relative h-[85vh] min-h-[600px] w-full mt-20">
        <div className="mx-auto max-w-[1920px] px-4 h-full sm:px-6 lg:px-12">
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
              alt="Studio aesthetics"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-[30s] hover:scale-[1.03] hover:grayscale-0"
              style={{ objectPosition: "center 40%" }}
            />
            <div className="absolute inset-0 bg-black/40 lg:bg-black/30" />
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-16 md:p-16 lg:p-24">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Our Story
              </p>
              <h1 className="font-heading text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[7rem] max-w-5xl">
                The visual language of <span className="italic">architecture.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery / Philosophy Split */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-40 h-fit">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
                Philosophy
              </p>
              <h2 className="font-heading text-4xl font-light leading-tight text-text-primary md:text-5xl lg:text-6xl mb-8">
                Precision meets emotion.
              </h2>
              <p className="text-xl font-light leading-relaxed text-text-muted">
                Every render we produce is an atmosphere curated to resonate with its intended audience, balancing meticulous technical accuracy with cinematic composition.
              </p>
            </div>

            {/* Massive Gallery Right Side */}
            <div className="lg:col-span-7 flex flex-col space-y-8 md:space-y-16">
               <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
                  alt="Process 1"
                  className="w-full h-[60vh] object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
                  alt="Process 2"
                  className="w-4/5 ml-auto h-[50vh] object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
                  alt="Process 3"
                  className="w-full h-[75vh] object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>

          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Architectural details"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <h2 className="font-heading text-4xl font-light text-white md:text-6xl lg:text-7xl">
              "Imagination rendered real."
            </h2>
        </div>
      </div>

      <Footer />
    </main>
  );
}
