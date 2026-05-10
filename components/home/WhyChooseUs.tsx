"use client";

import React from "react";
import { ShieldCheck, Sparkles, UserCheck, Heart } from "lucide-react";
import { FadeIn } from "@/components/ui/Animations";

const features = [
  {
    icon: Sparkles,
    title: "Premium Fabrics",
    description: "We source only the finest silks, linens, and hand-woven fabrics for our collections.",
  },
  {
    icon: ShieldCheck,
    title: "Curated Boutique",
    description: "Each piece is hand-selected to ensure exclusivity and superior quality.",
  },
  {
    icon: UserCheck,
    title: "Personal Styling",
    description: "Expert styling advice available via WhatsApp for your special occasions.",
  },
  {
    icon: Heart,
    title: "Exclusive Designs",
    description: "Unique festive and bridal wear designed to make you feel extraordinary.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-mist-pink/30">
      <div className="container mx-auto px-6 text-center mb-16">
        <FadeIn>
          <span className="text-primary-pink uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
            The Boutique Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-dark-text">
            Why Choose <span className="italic font-serif">Us</span>
          </h2>
        </FadeIn>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="glassmorphism p-8 rounded-[2rem] h-full border border-white/40 hover:shadow-premium transition-all duration-500 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 group-hover:bg-primary-pink transition-all duration-500">
                <feature.icon className="w-6 h-6 text-primary-pink group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-dark-text mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
