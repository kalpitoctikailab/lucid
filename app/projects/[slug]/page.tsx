"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) return null;
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* Cinematic Parallax Hero */}
      <section className="relative h-[90vh] min-h-[600px] w-full mt-16 overflow-hidden">
        <div className="mx-auto max-w-[1920px] px-4 h-full sm:px-6 lg:px-12">
          <motion.div 
            style={{ y: heroY }}
            className="relative h-[120%] w-full -top-[10%] overflow-hidden"
          >
            {project.video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                poster={project.coverImage}
              >
                <source src={project.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={project.coverImage}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Overlay Text Bottom Left */}
            <motion.div 
              style={{ opacity }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 flex flex-col justify-end p-8 pb-16 md:p-16 lg:p-24"
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                {project.category}
              </p>
              <h1 className="font-heading text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[7rem] max-w-5xl">
                {project.title}
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery / Meta Split */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Sticky Meta Data */}
            <div className="lg:col-span-4 lg:col-start-1 xl:col-span-3 flex flex-col justify-start lg:sticky lg:top-40 h-fit space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                 <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
                    Overview
                 </p>
                 <h2 className="font-heading text-3xl font-light leading-tight text-text-primary md:text-4xl mb-8">
                    Revealing form and space.
                 </h2>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="grid grid-cols-2 gap-8"
              >
                {project.client && (
                  <div>
                    <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-muted mb-2">Client</h3>
                    <p className="text-sm md:text-base font-light text-text-primary">{project.client}</p>
                  </div>
                )}
                {project.location && (
                  <div>
                    <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-muted mb-2">Location</h3>
                    <p className="text-sm md:text-base font-light text-text-primary">{project.location}</p>
                  </div>
                )}
                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-muted mb-2">Year</h3>
                  <p className="text-sm md:text-base font-light text-text-primary">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-muted mb-2">Service</h3>
                  <p className="text-sm md:text-base font-light text-text-primary">{project.type}</p>
                </div>
              </motion.div>
            </div>

            {/* Massive Assymetric Gallery Right Side */}
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col space-y-12 md:space-y-32 mt-16 lg:mt-0">
               {project.images.map((img, idx) => {
                 const isFull = idx % 3 === 0;
                 const isRightAligned = idx % 3 === 1;

                 return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`
                        relative overflow-hidden group
                        ${isFull ? 'w-full aspect-[4/3] md:aspect-[16/10]' : isRightAligned ? 'w-4/5 ml-auto aspect-square md:aspect-[4/3]' : 'w-[85%] aspect-[4/3] md:aspect-square'}
                      `}
                    >
                      <img
                        src={img}
                        alt={`${project.title} detail ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </motion.div>
                 );
               })}
            </div>

          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 flex justify-center">
         <Link
           href="/projects"
           className="inline-flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.3em] text-text-primary transition-all duration-500 hover:text-accent group"
         >
           <div className="h-px w-12 bg-accent group-hover:w-24 transition-all duration-500" />
           Back to Archive
           <div className="h-px w-12 bg-accent group-hover:w-24 transition-all duration-500" />
         </Link>
      </section>

      <Footer />
    </main>
  );
}
