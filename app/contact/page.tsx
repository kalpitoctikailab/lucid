"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Side: Image */}
        <div className="relative h-[40vh] w-full lg:h-screen lg:w-3/5">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
              alt="Studio aesthetics"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-6 sm:p-8">
               <h1 className="font-heading text-4xl font-light leading-[1.05] tracking-tight text-white text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-[9rem]">
                Let's <br />
                <span className="italic">Connect.</span>
              </h1>
            </div>
        </div>

        {/* Right Side: Contact Form and Info */}
        <div className="flex flex-col justify-center bg-bg px-6 py-12 sm:px-10 sm:py-16 md:px-16 lg:w-2/5 lg:px-24 xl:px-32">
           
           <div className="mb-10 space-y-6 sm:mb-16 sm:space-y-8">
              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-text-muted mb-2">Email</h3>
                <a href="mailto:lucidtheartistry@gmail.com" className="text-lg font-light text-text-primary hover:text-accent transition-colors sm:text-xl">
                  lucidtheartistry@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-text-muted mb-2">Phone</h3>
                <a href="tel:+919925004245" className="text-lg font-light text-text-primary hover:text-accent transition-colors sm:text-xl">
                  +91 99250 04245
                </a>
              </div>
           </div>

           <form className="space-y-10 sm:space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full border-b border-border/40 bg-transparent py-4 text-xl font-light text-text-primary placeholder-transparent outline-none transition-colors focus:border-accent"
                placeholder="Your Name"
              />
              <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-text-muted/50 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full border-b border-border/40 bg-transparent py-4 text-xl font-light text-text-primary placeholder-transparent outline-none transition-colors focus:border-accent"
                placeholder="Your Email"
              />
              <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-text-muted/50 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows={1}
                className="peer w-full resize-none border-b border-border/40 bg-transparent py-4 text-xl font-light text-text-primary placeholder-transparent outline-none transition-colors focus:border-accent"
                placeholder="Message"
              />
              <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-text-muted/50 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-6 pt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-text-primary transition-colors hover:text-accent"
            >
              <span className="h-px w-12 bg-accent transition-all duration-300 group-hover:w-24" />
              Send Brief
            </button>
          </form>

        </div>
      </section>

      <Footer />
    </main>
  );
}
