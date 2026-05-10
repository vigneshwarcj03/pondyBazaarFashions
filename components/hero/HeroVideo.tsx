"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroVideo = () => {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Background Video or Image Placeholder */}
      <div className="absolute inset-0 z-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="h-full w-full object-cover scale-105"
    
  >
    <source src="/products/hero-fashion.mp4" type="video/mp4" />
  </video>

  {/* Luxury Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
</div>

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm mb-4"
        >
          Est. 1995 • Premium Boutique
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1]"
        >
          Modern Luxury <br />
          <span className="italic font-serif">For Every Woman</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/collections"
            className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase hover:bg-primary-pink hover:text-white transition-all duration-300 flex items-center group"
          >
            Explore Collections
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/lookbook"
            className="glassmorphism-dark text-white px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            View Lookbook
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroVideo;
