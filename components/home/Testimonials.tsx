"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/data/testimonials";
import { FadeIn } from "@/components/ui/Animations";
import { Quote } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <FadeIn>
          <span className="text-primary-pink uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-dark-text">
            Loved by <span className="italic font-serif">Women</span>
          </h2>
        </FadeIn>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="testimonials-swiper pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-8">
                  <div className="absolute inset-0 bg-primary-pink/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary-pink/10">
                    <Image
                      src={testimonial.avatar || "/placeholder.png"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary-pink p-2 rounded-full shadow-lg">
                    <Quote className="w-3 h-3 text-white fill-white" />
                  </div>
                </div>

                <p className="text-xl md:text-2xl font-light text-dark-text leading-relaxed mb-8 max-w-3xl">
                  "{testimonial.content}"
                </p>

                <div>
                  <h4 className="text-lg font-medium text-dark-text">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-pink text-xs uppercase tracking-widest mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: var(--primary-pink) !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
