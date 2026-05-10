"use client";

import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { FadeIn } from "@/components/ui/Animations";
import Link from "next/link";

const FeaturedProducts = () => {
  // Get 4 featured products
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-primary-pink uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
            Handpicked For You
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-dark-text">
            Featured <span className="italic font-serif">Masterpieces</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-block border border-dark-text/10 px-10 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-dark-text hover:text-white transition-all duration-300"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
