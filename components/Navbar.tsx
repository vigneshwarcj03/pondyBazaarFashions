"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Search,
  Sparkles,
  ChevronRight,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "New Arrivals", href: "/products" },
  { name: "Women Styles", href: "/products" },
  { name: "Ethnic Wear", href: "/products" },
  { name: "Western Wear", href: "/products" },
  { name: "Boutique Picks", href: "/products" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== MAIN PREMIUM HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-line-color/20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-25 md:h-24">
            {/* ===== LEFT LOGO ===== */}
            <Link href="/" className="shrink-0 flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <Image
                  src="/logo.png"
                  alt="PondyBazaar Fashions"
                  width={120}
                  height={80}
                  priority
                  className="object-contain"
                />
              </motion.div>
            </Link>

            {/* ===== CENTER NAV LINKS ===== */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-[11px] font-bold tracking-[0.15em] uppercase text-dark-text hover:text-primary-pink transition whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-primary-pink transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* ===== RIGHT ACTIONS ===== */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="w-10 h-10 rounded-full hover:bg-mist-pink flex items-center justify-center transition">
                <Search size={18} className="text-dark-text" />
              </button>

              <a
                href="https://wa.me/918608553151"
                target="_blank"
                className="px-6 py-2.5 rounded-full border border-line-color text-dark-text text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-dark-text hover:text-white transition-all flex items-center gap-2"
              >
                <MessageCircle size={14} />
                Support
              </a>

              <a
                href="/products"
                className="px-6 py-2.5 rounded-full bg-dark-text text-white text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-primary-pink transition-all shadow-premium"
              >
                Collection
              </a>
            </div>

            {/* ===== MOBILE MENU ===== */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full bg-mist-pink flex items-center justify-center"
            >
              <Menu size={20} className="text-dark-text" />
            </button>
          </div>
        </div>
      </header>

      {/* ===== MOBILE DRAWER ===== */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 z-50 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[82%] bg-white z-50 shadow-[-10px_0_40px_rgba(0,0,0,0.08)]"
            >
              <div className="p-6 border-b border-[#f5d8e6] flex items-center justify-between">
                <span className="text-[14px] tracking-[0.18em] uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="h-10 w-10 rounded-full bg-[#fff4f8] flex items-center justify-center"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-7 py-10 flex flex-col gap-6">
                {links.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-[13px] tracking-[0.14em] uppercase text-[#2b2b2b] whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}

                <a
                  href="https://wa.me/919874561230"
                  target="_blank"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ffe8f1] text-primary-pink text-[12px] uppercase tracking-[0.14em]"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>

                <a
                  href="https://maps.app.goo.gl/cMKCnAdx8w8B2x6B8"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-pink text-white text-[12px] uppercase tracking-[0.14em]"
                >
                  Visit Boutique <ChevronRight size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
