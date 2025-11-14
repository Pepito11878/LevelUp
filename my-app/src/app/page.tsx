"use client";

import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />

      <main className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden pt-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl -translate-y-8">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 
                         bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 
                         drop-shadow-lg"
          >
            Skill, not luck.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Level up for free with reliable coaching, hand-picked videos, and
            feedback from high-rank players who know what real improvement looks
            like.
          </p>

          <a
            href="/Beginner"
            className="uppercase inline-block px-8 py-4 bg-[#fcd305] text-black font-semibold rounded-lg shadow-lg 
                      hover:text-white hover:bg-[#e91e63] transition-colors duration-100"
          >
            Get Started
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
