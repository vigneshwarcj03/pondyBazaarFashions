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
      <header className="sticky top-0 z-50 bg-white/78 backdrop-blur-xl ">
        <div className="max-w-[1550px] mx-auto px-4 md:px-8 xl:px-10 py-4">
          <div className="h-[122px] rounded-full bg-white/95 border border-[#f8dce9] shadow-[0_14px_40px_rgba(236,72,153,0.07)] px-6 xl:px-8 flex items-center justify-between">
            {/* ===== LEFT LOGO ===== */}
            <Link href="/" className="shrink-0 flex items-center">
              <motion.div whileHover={{ y: -2 }} className="relative">
                <div className="absolute -inset-3  bg-[#ffd9ea] blur-2xl opacity-35 rounded-full" />
                <Image
                  src="/logo.png"
                  alt="PondyBazaar Fashions"
                  width={140}
                  height={110}
                  priority
                  className="relative z-10 object-contain pl-6"
                />
              </motion.div>
            </Link>

            {/* ===== RIGHT NAV CONTENT ===== */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-[12px] font-medium tracking-[0.08em] uppercase text-[#333] hover:text-primary-pink transition whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary-pink transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <button className="ml-1 h-10 w-10 rounded-full bg-[#fff4f8] flex items-center justify-center hover:bg-primary-pink hover:text-white transition">
                <Search size={16} />
              </button>

              <a
                href="https://wa.me/918608553151"
                target="_blank"
                className="px-5 py-3 rounded-full bg-[#ffe8f1] text-primary-pink text-[11px] font-medium tracking-[0.1em] uppercase hover:bg-primary-pink hover:text-white transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                className="px-5 py-3 rounded-full bg-primary-pink text-white text-[11px] font-medium tracking-[0.1em] uppercase shadow-[0_8px_20px_rgba(236,72,153,0.22)] hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <MapPin size={14} />
                Visit Store
              </a>
            </div>

            {/* ===== MOBILE MENU ===== */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden h-11 w-11 rounded-full bg-[#fff4f8] flex items-center justify-center"
            >
              <Menu size={20} />
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
