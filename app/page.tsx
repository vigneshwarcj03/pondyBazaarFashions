"use client";

import React from "react";
import HeroVideo from "@/components/hero/HeroVideo";
import ShopCategories from "@/components/home/ShopCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import NewArrivalsSlider from "@/components/home/NewArrivalsSlider";
import LuxuryBanner from "@/components/home/LuxuryBanner";
import TrendingNow from "@/components/home/TrendingNow";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LookbookGrid from "@/components/home/LookbookGrid";
import Testimonials from "@/components/home/Testimonials";
import BrandStory from "@/components/home/BrandStory";
import Newsletter from "@/components/home/Newsletter";
import InstagramFeed from "@/components/home/InstagramFeed";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroVideo />

      {/* Shop By Category */}
      <ShopCategories />

      {/* Featured Products Grid */}
      <FeaturedProducts />

      {/* New Arrivals Slider */}
      <NewArrivalsSlider />

      {/* Mid-page Luxury Banner */}
      <LuxuryBanner />

      {/* Trending Now Slider */}
      <TrendingNow />

      {/* Why Choose Us / Features */}
      <WhyChooseUs />

      {/* Editorial Lookbook Grid */}
      <LookbookGrid />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Brand Story / About Us */}
      <BrandStory />

      {/* Newsletter Subscription */}
      <Newsletter />

      {/* Instagram Feed Grid */}
      <InstagramFeed />
    </div>
  );
}
