"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/Animations";

const LuxuryBanner = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/products/hero-fashion4.jpg"
          alt="Luxury Fashion Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <FadeIn>
            <span className="text-white/80 uppercase tracking-[0.3em] text-xs mb-4 block">
              Limited Edition
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              The Festive <br />
              <span className="italic font-serif text-gold-soft">Elegance 2026</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-lg font-light leading-relaxed">
              Experience the perfect blend of traditional craftsmanship and modern luxury. Each piece tells a story of heritage and grace.
            </p>
            <button className="bg-gold-gradient text-black px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:scale-105 transition-transform duration-300">
              Discover Collection
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default LuxuryBanner;
