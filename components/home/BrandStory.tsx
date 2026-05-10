"use client";

import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/Animations";

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <FadeIn>
              <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-[3rem]">
                <Image
                  src="/products/hero-fashion5.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-mist-pink rounded-full -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-pink/5 rounded-full -z-10" />
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2">
            <FadeIn delay={0.2}>
              <span className="text-primary-pink uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                Since 1995
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-dark-text mb-8 leading-tight">
                Crafting <span className="italic font-serif">Luxury</span> <br />
                For the Modern Woman
              </h2>
              <p className="text-gray-text text-lg mb-8 leading-relaxed font-light">
                PondyBazaar Fashions started with a simple vision: to bring high-quality, elegant, and timeless fashion to women who appreciate the finer details.
              </p>
              <p className="text-gray-text text-lg mb-10 leading-relaxed font-light">
                Every fabric is hand-selected, every design is meticulously curated, and every customer is treated with the personal care of a boutique experience. We believe that luxury is not just about what you wear, but how it makes you feel.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-light text-dark-text">25+</p>
                  <p className="text-xs uppercase tracking-widest text-primary-pink mt-1">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-line-color" />
                <div>
                  <p className="text-3xl font-light text-dark-text">10k+</p>
                  <p className="text-xs uppercase tracking-widest text-primary-pink mt-1">Happy Clients</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
