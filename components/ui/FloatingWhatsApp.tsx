"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  const whatsappNumber = "+919876543210"; // Placeholder
  const message = "Hello! I'm interested in your fashion collection.";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/30 transition-all duration-300 animate-pulse" />
      <div className="relative bg-white p-4 rounded-full shadow-premium flex items-center justify-center border border-green-100">
        <MessageCircle className="w-6 h-6 text-green-600 fill-green-600/10" />
      </div>
    </motion.button>
  );
};

export default FloatingWhatsApp;
