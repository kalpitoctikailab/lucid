import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Image from "next/image";

const brochures = [
  {
    id: 1,
    title: "Company Profile",
    description: "Our philosophy, studio overview, and complete service offerings.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    size: "4.2 MB",
  },
  {
    id: 2,
    title: "Residential Portfolio",
    description: "Curated collection of our best luxury residential renders and walkthroughs.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    size: "12.5 MB",
  },
  {
    id: 3,
    title: "Commercial & High-Rise",
    description: "Expansive masterplans, corporate headquarters, and commercial visualization.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    size: "18.1 MB",
  },
  {
    id: 4,
    title: "Interior Styling Guide",
    description: "A deep dive into our material selection and interior staging process.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911763f4?auto=format&fit=crop&w=1200&q=80",
    size: "8.7 MB",
  },
];

export default function BrochuresPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pb-16 pt-24 sm:pt-32 md:pt-40 md:pb-24 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-12">
          
          <div className="mb-12 md:mb-24 lg:mb-40">
            <h1 className="font-heading text-4xl font-light leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-8xl xl:text-[9rem]">
              Digital <br />
              <span className="italic text-accent">Editions.</span>
            </h1>
          </div>

          <div className="flex flex-col space-y-16 md:space-y-24 lg:space-y-32">
            {brochures.map((item, idx) => (
              <div key={item.id} className="group flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:gap-24">
                
                {/* Number / Metadata */}
                <div className="w-full lg:w-1/4">
                  <span className="text-xs font-medium tabular-nums text-accent tracking-widest block mb-4">
                    NO. 0{idx + 1}
                  </span>
                  <div className="h-px w-full bg-border/20 mb-6 sm:mb-8" />
                  <span className="text-xs font-light text-text-muted">PDF / {item.size}</span>
                </div>

                {/* Imagery */}
                <div className="w-full lg:w-1/2 relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-[20s] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-1000 group-hover:bg-transparent" />
                  
                  {/* Download Action */}
                  <a href="#" className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-white sm:h-24 sm:w-24">
                      <span className="text-xs font-medium uppercase tracking-[0.2em]">DL</span>
                    </span>
                  </a>
                </div>

                {/* Title */}
                <div className="w-full lg:w-1/4">
                  <h2 className="font-heading text-3xl font-light text-text-primary transition-colors group-hover:text-accent sm:text-4xl md:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base font-light text-text-muted leading-relaxed sm:mt-6 sm:text-lg">
                    {item.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
