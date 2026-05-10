"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductsClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = [...new Set(products.map((p) => p.category))];
    return ["All", ...unique];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [products, search, activeCategory]);

  return (
    <div className="space-y-14 md:space-y-20 pb-16">
      {/* ===== TOP EDITORIAL HEADER ===== */}
      <section className="text-center space-y-6 pt-4">
        <p className="text-primary-pink tracking-[0.38em] uppercase text-[11px] font-semibold">
          Curated Women's Boutique Collection
        </p>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl leading-tight text-[#111]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Discover Pieces
          <br />
          Designed To Be Noticed
        </h1>

        <p className="max-w-3xl mx-auto text-gray-text text-[15px] md:text-lg leading-8">
          Explore graceful ethnic edits, premium western styles, elegant daily
          wear and boutique statement outfits selected to elevate every
          wardrobe.
        </p>
      </section>

      {/* ===== SEARCH GLASS BAR ===== */}
      <section className="max-w-3xl mx-auto">
        <div className="premium-card px-6 py-5 flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-[#f8d7e8] shadow-[0_10px_40px_rgba(232,121,166,0.08)]">
          <div className="h-11 w-11 rounded-full bg-[#fff1f6] flex items-center justify-center">
            <Search className="h-5 w-5 text-primary-pink" />
          </div>

          <input
            type="text"
            placeholder="Search sarees, kurtis, western wear, festive outfits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-sm md:text-base placeholder:text-[#9a9a9a]"
          />
        </div>
      </section>

      {/* ===== CATEGORY PILLS ===== */}
      <section className="flex flex-wrap justify-center gap-3 md:gap-4">
        {categories.map((cat, i) => (
          <motion.button
            whileTap={{ scale: 0.97 }}
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-full text-sm md:text-[15px] transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary-pink text-white shadow-[0_10px_25px_rgba(236,72,153,0.25)]"
                : "bg-white border border-[#f8d7e8] text-[#444] hover:border-primary-pink hover:text-primary-pink"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </section>

      {/* ===== COLLECTION STATUS ROW ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-4 border-y border-[#f9dbe8] py-5">
        <div className="flex items-center gap-2 text-primary-pink text-sm font-medium">
          <Sparkles className="h-4 w-4" />
          Boutique handpicked fashion catalogue
        </div>

        <p className="text-sm text-gray-text">
          Showing{" "}
          <span className="text-primary-pink font-semibold">
            {filteredProducts.length}
          </span>{" "}
          premium styles
        </p>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="premium-card py-20 px-10 text-center space-y-4">
          <h3
            className="text-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            No matching boutique pieces found
          </h3>
          <p className="text-gray-text">
            Try searching with another style or browse all curated collections.
          </p>
        </div>
      )}
    </div>
  );
}
