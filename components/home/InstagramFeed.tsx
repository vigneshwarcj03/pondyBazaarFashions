"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FadeIn } from "@/components/ui/Animations";

const instagramPosts = [
  { id: 1, image: "/products/product1.jpg" },
  { id: 2, image: "/products/product2.jpg" },
  { id: 3, image: "/products/product3.jpg" },
  { id: 4, image: "/products/product4.jpg" },
  { id: 5, image: "/products/product5.jpg" },
  { id: 6, image: "/products/product6.jpg" },
];

const InstagramFeed = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaInstagram className="w-5 h-5 text-primary-pink" />
            <span className="text-primary-pink uppercase tracking-[0.2em] text-xs font-bold block">
              Follow Us @pondybazaar
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-dark-text">
            Shop Our <span className="italic font-serif">Instagram</span>
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {instagramPosts.map((post, index) => (
          <FadeIn key={post.id} delay={index * 0.05}>
            <div className="relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src={post.image}
                alt="Instagram Post"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <FaInstagram className="text-white w-8 h-8" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
