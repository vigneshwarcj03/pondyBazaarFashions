"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { FadeIn } from "@/components/ui/Animations";
import Link from "next/link";

const NewArrivalsSlider = () => {
  // Get latest 8 products
  const newArrivals = products.slice(0, 8);

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 mb-12">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-primary-pink uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
              Just In
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-dark-text">
              New <span className="italic font-serif">Arrivals</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="text-dark-text text-sm font-medium border-b border-dark-text/20 pb-1 hover:border-primary-pink hover:text-primary-pink transition-all"
          >
            Shop All Arrivals
          </Link>
        </FadeIn>
      </div>

      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 40,
            },
          }}
          className="new-arrivals-swiper pb-16"
        >
          {newArrivals.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .new-arrivals-swiper .swiper-pagination-bullet-active {
          background: var(--primary-pink) !important;
        }
        .new-arrivals-swiper .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default NewArrivalsSlider;
