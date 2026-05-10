"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { FadeIn } from "@/components/ui/Animations";

const ShopCategories = () => {
  return (
    <section className="py-20 md:py-32 bg-soft-bg">
      <div className="container mx-auto px-6">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-primary-pink uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
              Curated Collections
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-dark-text">
              Shop by <span className="italic font-serif">Category</span>
            </h2>
          </div>
          <Link
            href="/collections"
            className="text-dark-text text-sm font-medium border-b border-dark-text/20 pb-1 hover:border-primary-pink hover:text-primary-pink transition-all"
          >
            View All Collections
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <FadeIn key={category.slug} delay={index * 0.1}>
              <Link
                href={`/collections/${category.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-mist-pink"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white text-2xl md:text-3xl font-light mb-2">
                    {category.name}
                  </h3>
                  <span className="text-white/80 text-xs uppercase tracking-widest flex items-center group-hover:gap-2 transition-all">
                    Explore Now <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategories;
