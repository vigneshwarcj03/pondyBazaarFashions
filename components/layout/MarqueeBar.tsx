"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeBar = () => {
  const items = [
    "Free Shipping Above ₹1999",
    "New Festive Collection Live",
    "Visit Our Boutique Store",
    "Bridal Styling Available",
    "WhatsApp Personal Assistance",
  ];

  return (
    <div className="bg-black py-2.5 overflow-hidden border-b border-white/5">
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {items.map((item, index) => (
          <div key={index} className="flex items-center mx-8 md:mx-12">
            <span className="text-white text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary-pink ml-8 md:ml-12" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
