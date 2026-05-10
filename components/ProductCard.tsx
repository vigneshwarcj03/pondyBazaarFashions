import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      {/* soft glow */}
      <div className="absolute -inset-1 bg-[#ffd9ea] blur-2xl opacity-0 group-hover:opacity-30 transition duration-700 rounded-[34px]" />

      <div className="relative overflow-hidden rounded-[30px] bg-white border border-[#f8d7e8] shadow-[0_15px_45px_rgba(232,121,166,0.08)] hover:shadow-[0_20px_55px_rgba(232,121,166,0.14)] transition duration-500">
        {/* IMAGE */}
        <Link
          href={`/products/${product.id}`}
          className="block relative h-[600px] overflow-hidden"
        >
          <Image
            src={product.image_url || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-[1.06] transition duration-700"
          />

          {/* premium pink fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#ec489925] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* quick view */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-500">
            <span className="bg-white/92 backdrop-blur-xl px-6 py-2.5 rounded-full text-[13px] flex items-center gap-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] text-[#222]">
              <Eye className="h-4 w-4 text-primary-pink" />
              View Details
            </span>
          </div>

          {product.stock <= 0 && (
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1 rounded-full text-[11px] font-semibold text-primary-pink shadow-sm">
              Sold Out
            </div>
          )}
        </Link>

        {/* CONTENT */}
        <div className="px-6 pt-6 pb-7 space-y-4">
          <p className="text-[10px] tracking-[0.34em] uppercase text-primary-pink font-semibold">
            {product.category}
          </p>

          <Link href={`/products/${product.id}`}>
            <h3
              className="text-[24px] leading-snug text-[#111] hover:text-primary-pink transition min-h-[64px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {product.name}
            </h3>
          </Link>

          <p className="text-[14px] text-gray-text line-clamp-2 leading-7 min-h-[56px]">
            {product.description}
          </p>

          <div className="flex items-end justify-between pt-2">
            <span className="text-[28px] font-semibold text-primary-pink">
              ₹{product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
