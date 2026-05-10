"use client";

import React from "react";
import { FadeIn } from "@/components/ui/Animations";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 md:py-32 bg-soft-bg">
      <div className="container mx-auto px-6">
        <div className="glassmorphism rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-pink/5 rounded-full blur-[120px] -z-10" />
          
          <FadeIn className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-soft">
              <Mail className="w-8 h-8 text-primary-pink" />
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-dark-text mb-6">
              Join the <span className="italic font-serif">Boutique Club</span>
            </h2>
            <p className="text-gray-text text-lg mb-10 leading-relaxed font-light">
              Be the first to know about new arrivals, exclusive festive collections, and styling tips from our fashion experts.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-white px-8 py-4 rounded-full text-sm outline-none border border-transparent focus:border-primary-pink/20 transition-all shadow-sm"
              />
              <button className="bg-dark-text text-white px-10 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-primary-pink transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-muted-text mt-6 uppercase tracking-widest">
              By subscribing, you agree to our privacy policy.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
