"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Image, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Collections", icon: Grid, href: "/collections" },
    { label: "Lookbook", icon: Image, href: "/lookbook" },
    { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/+919876543210", external: true },
    { label: "Contact", icon: Phone, href: "/contact" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none md:hidden">
      <div className="mx-auto max-w-md w-full glassmorphism rounded-2xl shadow-premium border border-white/20 p-2 flex items-center justify-between pointer-events-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center flex-1 py-1 group"
              >
                <div className="relative">
                  <Icon className="w-5 h-5 text-gray-text group-hover:text-primary-pink transition-colors" />
                </div>
                <span className="text-[10px] mt-1 text-gray-text font-medium group-hover:text-primary-pink transition-colors">
                  {item.label}
                </span>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 py-1 group"
            >
              <div className="relative">
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-primary-pink" : "text-gray-text group-hover:text-primary-pink"
                  )}
                />
                {isActive && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-pink" />
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] mt-1 font-medium transition-colors",
                  isActive ? "text-primary-pink" : "text-gray-text group-hover:text-primary-pink"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
