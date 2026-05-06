"use client";

import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function ProfilePlaceholder() {
  return (
    <div className="relative h-[350px] w-full overflow-hidden bg-zinc-900">
      <div className="absolute left-1/2 top-[138px] h-[92px] w-[92px] -translate-x-1/2 rounded-full bg-zinc-600" />
      <div className="absolute bottom-[-85px] left-1/2 h-[210px] w-[260px] -translate-x-1/2 rounded-t-[140px] bg-zinc-600" />
    </div>
  );
}

export default function AboutPage() {
  const teamMembers = [
    { name: "Manish Patel", role: "Designation", photo: "/Lucid Employee Photos/Manish Patel.jpg" },
    { name: "Amit Patel", role: "Designation", photo: "/Lucid Employee Photos/Amit Patel.jpg" },
    { name: "Anwar Khan Durani", role: "Designation", photo: "/Lucid Employee Photos/Anwar khan Durani.jpg" },
    { name: "Dhaval Prajapati", role: "Designation", photo: "/Lucid Employee Photos/Dhaval Prajapati.jpg" },
    { name: "Kamlesh Rawat", role: "Designation", photo: "/Lucid Employee Photos/Kamlesh Rawat.jpg" },
    { name: "Manish Tiwari", role: "Designation", photo: "/Lucid Employee Photos/Manish Tiwari.jpg" },
    { name: "Mayur Dhapa", role: "Designation", photo: "/Lucid Employee Photos/Mayur Dhapa.jpg" },
    { name: "Parth Sharma", role: "Designation", photo: "/Lucid Employee Photos/Parth Sharma.jpg" },
    { name: "Ranjeet Gareja", role: "Designation", photo: "/Lucid Employee Photos/Ranjeet Gareja.jpg" },
    { name: "Vibhuti Patel", role: "Designation", photo: "/Lucid Employee Photos/Vibhuti Patel.png" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-4 pb-14 pt-28 sm:px-8 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
            About Our Studio
          </p>
          <h1 className="mt-2 text-center text-5xl font-light leading-tight tracking-tight md:text-6xl">
            Who We Are
          </h1>
          <h2 className="mx-auto mt-3 max-w-[980px] text-center text-3xl font-semibold leading-tight">
            Creating Graphical Content by
            <br />
            Using 3D Technology has Become the Trend in the Last Few Years...
          </h2>
          <p className="mx-auto mt-5 max-w-[860px] text-center text-base leading-relaxed text-white/90 md:text-lg">
            <span className="font-semibold">Lucid - The Artistry</span> has a
            team of dedicated 3D professionals with expertise in 3D rendering,
            3D visualizing, 3D animation, and many more aspects. Having worked
            with 300+ projects, our team has developed a very sharp-witted
            judgment in 3D project visualization, 3D walkthrough, and a 360
            virtual tour which brings a project to life without even moving a
            single speck of dust!
          </p>

          <div className="mt-12 h-[340px] w-full bg-zinc-200 text-black md:h-[420px]">
            <div className="flex h-full items-center justify-center text-center text-4xl font-normal md:text-6xl">
              Team Work Video
            </div>
          </div>

          <p className="ml-auto mt-8 max-w-[560px] text-lg leading-relaxed text-white/90">
            <span className="font-semibold">Lucid - The Artistry</span> has a
            team of dedicated 3D professionals with expertise in 3D rendering,
            3D visualizing, 3D animation, and many more aspects. Having worked
            with 300+ projects, our team has developed a very sharp-witted
            judgment in 3D project visualization, 3D walkthrough, and a 360
            virtual tour which brings a project to life without even moving a
            single speck of dust!
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <h3 className="text-4xl font-semibold md:text-4xl">The beliefs that define us.</h3>

          <div className="mt-10 space-y-4 md:space-y-6">
            <div className="flex flex-wrap items-baseline justify-end gap-x-3">
              <span className="text-7xl font-semibold uppercase leading-none md:text-8xl">
                Layer
              </span>
              <span className="text-3xl font-semibold md:text-4xl">- the detail we define</span>
            </div>

            <div className="flex flex-wrap items-baseline justify-start gap-x-3">
              <span className="text-7xl font-semibold uppercase leading-none md:text-8xl">
                Lightform
              </span>
              <span className="text-3xl font-semibold md:text-4xl">- the depth we build</span>
            </div>

            <div className="flex flex-wrap items-baseline justify-end gap-x-3">
              <span className="text-7xl font-semibold uppercase leading-none md:text-8xl">
                Liveliness
              </span>
              <span className="text-3xl font-semibold md:text-4xl">- the emotion we bring</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <h3 className="text-6xl font-light md:text-7xl">Team</h3>

          <div className="relative mt-10">
            {/* Prev button */}
            <button
              type="button"
              aria-label="Previous"
              className="team-swiper-prev absolute -left-6 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-sm transition hover:border-white/50 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".team-swiper-prev",
                nextEl: ".team-swiper-next",
              }}
              loop={teamMembers.length > 3}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {teamMembers.map((member, idx) => (
                <SwiperSlide key={`${member.name}-${idx}`}>
                  <article>
                    <div className="relative h-[350px] w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h4 className="mt-3 text-2xl font-semibold leading-none">{member.name}</h4>
                    {/* <p className="mt-1 text-lg font-light text-white/95">{member.role}</p> */}
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Next button */}
            <button
              type="button"
              aria-label="Next"
              className="team-swiper-next absolute -right-6 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-sm transition hover:border-white/50 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-[1100px] gap-9 lg:grid-cols-[1fr_260px_260px]">
          <div>
            <h3 className="text-3xl font-semibold">Founders Journey</h3>
            <p className="mt-12 max-w-[470px] text-lg leading-[1.35] text-white/90">
              <span className="font-semibold">Lucid - The Artistry</span> has a
              team of dedicated 3D professionals with expertise in 3D rendering,
              3D visualizing, 3D animation, and many more aspects. Having worked
              with 300+ projects, our team has developed a very sharp-witted
              judgment in 3D project visualization, 3D walkthrough, and a 360
              virtual tour which brings a project to life without even moving a
              single speck of dust!
            </p>
          </div>

          {[1, 2].map((item) => (
            <article key={item}>
              <ProfilePlaceholder />
              <h4 className="mt-3 text-2xl font-semibold leading-none">NAME</h4>
              <p className="mt-1 text-lg font-light text-white/95">Designation</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 pt-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <h3 className="text-3xl font-semibold">Client Stories</h3>

          <div className="mt-8 grid gap-10 md:grid-cols-[300px_1fr] md:items-end">
            <ProfilePlaceholder />

            <p className="max-w-[760px] text-xl leading-[1.36] text-white/95">
              <span className="font-semibold">Lucid - The Artistry</span> has a
              team of dedicated 3D professionals with expertise in 3D rendering,
              3D visualizing, 3D animation, and many more aspects. Having worked
              with 300+ projects, our team has developed a very sharp-witted
              judgment in 3D project visualization, 3D walkthrough, and a 360
              virtual tour which brings a project to life without even moving a
              single speck of dust!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
