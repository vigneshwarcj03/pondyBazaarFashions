import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#f8d7e8] bg-gradient-to-b from-[#fffafd] to-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div className="space-y-5">
            <h3
              className="text-3xl text-[#111]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              PondyBazaar Fashions
            </h3>

            <p className="text-sm text-gray-text leading-7 max-w-sm">
              A curated women’s boutique presenting elegant ethnic wear,
              statement western outfits, festive essentials and graceful daily
              fashion chosen with timeless femininity.
            </p>
          </div>

          {/* COLLECTIONS */}
          <div className="space-y-5">
            <h4 className="text-sm tracking-[0.25em] uppercase text-primary-pink font-semibold">
              Collections
            </h4>

            <div className="space-y-3 text-sm text-gray-text">
              <Link
                href="/products"
                className="block hover:text-primary-pink transition"
              >
                New Arrivals
              </Link>
              <Link
                href="/products"
                className="block hover:text-primary-pink transition"
              >
                Ethnic Wear
              </Link>
              <Link
                href="/products"
                className="block hover:text-primary-pink transition"
              >
                Western Wear
              </Link>
              <Link
                href="/products"
                className="block hover:text-primary-pink transition"
              >
                Boutique Best Sellers
              </Link>
            </div>
          </div>

          {/* VISIT / CONTACT */}
          <div className="space-y-5">
            <h4 className="text-sm tracking-[0.25em] uppercase text-primary-pink font-semibold">
              Visit Our Boutique
            </h4>

            <div className="space-y-4 text-sm text-gray-text leading-7">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary-pink" />
                Pondy Bazaar Main Fashion Street, Chennai
              </p>

              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-pink" />
                +91 98745 63210
              </p>

              <p className="text-xs text-[#888]">
                Walk in directly to explore fabrics, fits and fresh arrivals.
              </p>
            </div>
          </div>

          {/* CONNECT */}
          <div className="space-y-5">
            <h4 className="text-sm tracking-[0.25em] uppercase text-primary-pink font-semibold">
              Connect With Us
            </h4>

            <div className="space-y-4">
              <a
                href="https://wa.me/9874563210"
                target="_blank"
                className="flex items-center gap-2 text-sm text-gray-text hover:text-primary-pink transition"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Consultation
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-text hover:text-primary-pink transition"
              >
                <FaInstagram className="h-4 w-4" />
                Instagram Boutique Updates
              </a>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-14 pt-8 border-t border-[#f8d7e8] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8d8d8d]">
            © {new Date().getFullYear()} PondyBazaar Fashions. Designed for
            timeless women's elegance.
          </p>

          <p className="text-xs text-primary-pink tracking-[0.2em] uppercase">
            Premium Boutique Catalogue Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
