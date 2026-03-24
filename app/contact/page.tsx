"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side: Massive Image dominating the layout */}
        <div className="lg:w-3/5 relative h-[50vh] lg:h-screen w-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
              alt="Studio aesthetics"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Embedded huge text over the image */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-8">
               <h1 className="font-heading text-6xl font-light leading-[1.05] tracking-tight text-white md:text-8xl xl:text-[9rem] text-center">
                Let's <br />
                <span className="italic">Connect.</span>
              </h1>
            </div>
        </div>

        {/* Right Side: Contact Form and Info */}
        <div className="lg:w-2/5 flex flex-col justify-center px-8 py-24 md:px-16 lg:px-24 xl:px-32 bg-bg">
           
           <div className="mb-16 space-y-8">
              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-text-muted mb-2">Email</h3>
                <a href="mailto:lucidtheartistry@gmail.com" className="text-xl font-light text-text-primary hover:text-accent transition-colors">
                  lucidtheartistry@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-text-muted mb-2">Phone</h3>
                <a href="tel:+919925004245" className="text-xl font-light text-text-primary hover:text-accent transition-colors">
                  +91 99250 04245
                </a>
              </div>
           </div>

           <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
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
