"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/Animations";
import Link from "next/link";

const lookbookItems = [
  { id: 1, image: "/products/hero-fashion1.jpg", size: "large", title: "Royal Silks" },
  { id: 2, image: "/products/product1.jpg", size: "small", title: "Summer Breeze" },
  { id: 3, image: "/products/product2.jpg", size: "small", title: "Evening Glow" },
  { id: 4, image: "/products/hero-fashion2.jpg", size: "medium", title: "Modern Ethnic" },
  { id: 5, image: "/products/product3.jpg", size: "small", title: "Timeless Classic" },
  { id: 6, image: "/products/hero-fashion3.jpg", size: "medium", title: "Bridal Dreams" },
];

const LookbookGrid = () => {
  return (
    <section className="py-20 md:py-32 bg-soft-bg">
      <div className="container mx-auto px-6 mb-16">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-primary-pink uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
              Style Inspiration
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-dark-text">
              Fashion <span className="italic font-serif">Lookbook</span>
            </h2>
          </div>
          <Link
            href="/lookbook"
            className="text-dark-text text-sm font-medium border-b border-dark-text/20 pb-1 hover:border-primary-pink hover:text-primary-pink transition-all"
          >
            Explore Lookbook
          </Link>
        </FadeIn>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {lookbookItems.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.1}
              className={cn(
                "relative group overflow-hidden rounded-2xl md:rounded-3xl bg-mist-pink",
                item.size === "large" ? "col-span-2 row-span-2 aspect-[4/5] md:aspect-auto" : 
                item.size === "medium" ? "col-span-2 aspect-video md:aspect-square" : "aspect-[3/4]"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-sm md:text-base font-light tracking-[0.2em] uppercase border-b border-white/40 pb-1">
                  {item.title}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper for classes since this component is in the same file
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default LookbookGrid;
