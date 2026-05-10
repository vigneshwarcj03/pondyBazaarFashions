import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Sparkles,
  Store,
  MessageCircle,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

function getProduct(id: string) {
  return products.find((item) => item.id === id) || null;
}

/* optional but recommended for static routes */
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProduct(params.id);

  if (!product) notFound();

  const relatedProducts = products
    .filter(
      (item) => item.id !== product.id && item.category === product.category,
    )
    .slice(0, 4);

  const fallbackRelated =
    relatedProducts.length < 4
      ? products
          .filter(
            (item) =>
              item.id !== product.id &&
              !relatedProducts.find((rp) => rp.id === item.id),
          )
          .slice(0, 4 - relatedProducts.length)
      : [];

  const finalRelatedProducts = [...relatedProducts, ...fallbackRelated];

  const whatsappLink = `https://wa.me/919874563210?text=Hi, I am interested in ${encodeURIComponent(
    product.name,
  )}`;

  return (
    <div className="space-y-20 md:space-y-24 pb-24">
      {/* ===== TOP PRODUCT SECTION ===== */}
      <div className="space-y-10 md:space-y-14">
        <Link
          href="/products"
          className="inline-flex items-center text-gray-text hover:text-primary-pink transition"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-3 bg-[#ffd9ea] blur-3xl opacity-30 rounded-[40px]" />

            <div className="relative bg-white border border-[#f8d7e8] rounded-[34px] p-4 shadow-[0_20px_55px_rgba(232,121,166,0.10)]">
              <div className="relative h-[520px] md:h-[700px] rounded-[28px] overflow-hidden">
                <Image
                  src={product.image_url || "/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-5">
              <p className="text-primary-pink uppercase tracking-[0.35em] text-xs font-semibold">
                {product.category}
              </p>

              <h1
                className="text-4xl md:text-5xl xl:text-6xl leading-tight text-[#111]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {product.name}
              </h1>

              <p className="text-[38px] md:text-[44px] font-semibold text-primary-pink">
                ₹{product.price}
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <span className="px-5 py-2 rounded-full bg-[#fff2f8] text-sm text-primary-pink">
                  Premium Boutique Selection
                </span>

                <span className="px-5 py-2 rounded-full bg-[#fff2f8] text-sm text-primary-pink">
                  In-Store Exclusive Piece
                </span>
              </div>
            </div>

            <p className="text-gray-text leading-8 text-[15px] md:text-lg">
              {product.description}
            </p>

            {/* CTA BOX */}
            <div className="bg-white border border-[#f8d7e8] rounded-[30px] p-6 md:p-8 shadow-[0_10px_35px_rgba(232,121,166,0.06)] space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                className="luxury-btn w-full inline-flex justify-center items-center gap-3 py-4"
              >
                <MessageCircle className="h-5 w-5" />
                Enquire on WhatsApp
              </a>

              <div className="w-full inline-flex justify-center items-center gap-3 border border-[#f8d7e8] py-4 rounded-full bg-[#fffafd] text-dark-text">
                <Store className="h-5 w-5 text-primary-pink" />
                Visit Our Boutique & Try This Collection
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-text pt-2 leading-7">
                <HeartHandshake className="h-5 w-5 text-primary-pink mt-1" />
                Personal assistance available for size selection, fabric feel,
                matching suggestions and fresh arrival alternatives directly in
                our showroom.
              </div>
            </div>

            <p className="text-sm text-gray-text">
              {product.stock > 0
                ? "Available in our boutique showroom."
                : "Currently not available in showroom."}
            </p>

            {/* TRUST STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {[
                { icon: Sparkles, text: "Curated Premium Styles" },
                { icon: BadgeCheck, text: "Quality Fabric Assured" },
                { icon: Store, text: "Boutique Trial Available" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#f8d7e8] rounded-[24px] p-5 text-center"
                >
                  <item.icon className="h-5 w-5 mx-auto mb-3 text-primary-pink" />
                  <p className="text-xs leading-5 text-[#444]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== PERSONAL STYLING BANNER ===== */}
      <section className="bg-white border border-[#f8d7e8] rounded-[34px] p-10 md:p-14 text-center shadow-[0_15px_45px_rgba(232,121,166,0.07)] space-y-5">
        <p className="text-primary-pink tracking-[0.35em] uppercase text-xs font-semibold">
          Boutique Personal Assistance
        </p>

        <h2
          className="text-3xl md:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Need Matching Suggestions?
        </h2>

        <p className="max-w-2xl mx-auto text-gray-text leading-8">
          Our boutique team helps you with styling ideas, alternate colours,
          fresh arrivals, fabric feel guidance and occasion-perfect matching.
        </p>

        <a
          href="https://wa.me/918608553151"
          target="_blank"
          className="luxury-btn inline-flex items-center gap-2 px-8 py-4"
        >
          Chat With Boutique Team <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      {/* ===== RELATED PRODUCTS ===== */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <p className="text-primary-pink tracking-[0.35em] uppercase text-xs font-semibold">
            You May Also Love
          </p>

          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            More Boutique Favorites
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {finalRelatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
