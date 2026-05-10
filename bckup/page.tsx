"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Store,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

function MobileHeroCarousel() {
  const slides = [
    {
      img: "/products/hero-fashion3.jpg",
      title: "Festive Elegance",
      subtitle: "New Season Ethnic Collection",
    },
    {
      img: "/products/hero-fashion2.jpg",
      title: "Luxury Drapes",
      subtitle: "Premium Designer Silhouettes",
    },
    {
      img: "/products/hero-fashion1.jpg",
      title: "Modern Grace",
      subtitle: "Everyday Premium Fashion",
    },
    {
      img: "/products/hero-fashion4.jpg",
      title: "Statement Wear",
      subtitle: "Bold Looks for Special Days",
    },
    {
      img: "/products/hero-fashion5.jpg",
      title: "Soft Luxury",
      subtitle: "Lightweight Premium Comfort",
    },
    {
      img: "/products/hero-fashion06.jpg",
      title: "Bridal Dreams",
      subtitle: "Exclusive Bridal Collection",
    },
  ];

  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // TOUCH START
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  // TOUCH END (swipe logic)
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startX.current) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      // swipe left → next
      setIndex((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      // swipe right → prev
      setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    startX.current = null;
  };

  return (
    <div
      className="relative w-full h-[520px] rounded-[26px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* IMAGE */}
      <Image
        src={slides[index].img}
        alt="Fashion"
        fill
        className="object-cover scale-[1.05] transition-all duration-700"
        priority
      />

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* TEXT */}
      <div className="absolute bottom-7 left-5 right-5 text-white">
        <p className="text-[11px] tracking-[0.3em] uppercase opacity-80 mb-2">
          PondyBazaar Boutique
        </p>

        <h1
          className="text-3xl leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {slides[index].title}
        </h1>

        <p className="text-[13px] text-white/80 mt-1">
          {slides[index].subtitle}
        </p>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 right-4 flex gap-1">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-[6px] rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* PROGRESS LINE (premium touch) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10">
        <div
          className="h-full bg-white transition-all duration-700"
          style={{
            width: `${((index + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
export default function HomePage() {
  const featuredProducts = products
    .filter((item) => item.is_featured)
    .slice(0, 4);

  return (
    <div className="bg-[#fffafd] pb-20">
      {/* HERO */}
      <section className="px-4 pt-6 space-y-6">
        <MobileHeroCarousel />

        <p className="text-primary-pink tracking-[0.25em] uppercase text-[11px] font-medium">
          Premium Boutique
        </p>

        <p className="text-[14px] text-gray-500 leading-7">
          Boutique-selected festive wear, designer feminine silhouettes and
          statement collections curated for modern women.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/products"
            className="w-full py-3.5 rounded-full bg-primary-pink text-white flex items-center justify-center gap-2 text-sm shadow-[0_8px_20px_rgba(236,72,153,0.25)]"
          >
            Explore Collection <ArrowRight size={16} />
          </Link>

          <a
            href="https://wa.me/919874563210"
            target="_blank"
            className="w-full py-3.5 rounded-full bg-white border border-[#f3d6e5] flex items-center justify-center gap-2 text-sm"
          >
            <MessageCircle size={16} className="text-primary-pink" />
            WhatsApp Us
          </a>
        </div>

        {/* ICON STRIP */}
        <div className="flex gap-3 pt-3">
          {[
            { icon: Sparkles, text: "Luxury" },
            { icon: Store, text: "Try In Store" },
            { icon: HeartHandshake, text: "Styling Help" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex-1 bg-white rounded-[18px] py-3 flex flex-col items-center justify-center shadow-sm"
            >
              <item.icon className="h-4 w-4 text-primary-pink mb-1" />
              <span className="text-[10px] text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-4 pt-10 space-y-6">
        <div className="flex items-center justify-between">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Featured Picks
          </h2>

          <Link
            href="/products"
            className="text-primary-pink text-sm flex items-center gap-1"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pt-12">
        <div className="rounded-[26px] bg-gradient-to-br from-[#fff0f6] to-[#fff8fb] p-6 text-center space-y-4">
          <h3
            className="text-xl leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Visit Our Boutique
          </h3>

          <p className="text-sm text-gray-500 leading-6">
            Experience fabrics, try styles & get personal assistance in-store.
          </p>

          <a
            href="https://maps.app.goo.gl/cMKCnAdx8w8B2x6B8"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-pink text-white text-sm"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
