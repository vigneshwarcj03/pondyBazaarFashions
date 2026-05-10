"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { FadeIn } from "@/components/ui/Animations";

const TrendingNow = () => {
  // Get products from index 4 to 12
  const trending = products.slice(4, 12);

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-soft-bg">
      <div className="container mx-auto px-6 mb-12 text-center">
        <FadeIn>
          <span className="text-primary-pink uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
            Most Loved
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-dark-text">
            Trending <span className="italic font-serif">Now</span>
          </h2>
        </FadeIn>
      </div>

      <div className="px-6">
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
          className="trending-swiper pb-16"
        >
          {trending.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .trending-swiper .swiper-pagination-bullet-active {
          background: var(--primary-pink) !important;
        }
        .trending-swiper .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default TrendingNow;
