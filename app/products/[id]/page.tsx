import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Sparkles,
  MessageCircle,
  Heart,
  Share2,
} from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { FadeIn } from "@/components/ui/Animations";

// Correctly typing params for Next.js 15+
type Props = {
  params: Promise<{ id: string }>;
};

function getProduct(id: string) {
  return products.find((item) => item.id === id) || null;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) notFound();

  const relatedProducts = products
    .filter(
      (item) => item.id !== product.id && item.category === product.category,
    )
    .slice(0, 4);

  const whatsappLink = `https://wa.me/919876543210?text=Hi, I am interested in ${encodeURIComponent(
    product.name,
  )}`;

  const finalRelatedProducts = relatedProducts;

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="container mx-auto px-6 pt-10 pb-20">
        <FadeIn className="mb-10">
          <Link
            href="/products"
            className="inline-flex items-center text-gray-text hover:text-primary-pink transition group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Collection
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* LEFT: Cinematic Product Gallery */}
          <FadeIn className="space-y-6">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-mist-pink">
              <Image
                src={product.image_url || "/placeholder.png"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.stock <= 0 && (
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-semibold text-primary-pink shadow-lg">
                  Currently Unavailable
                </div>
              )}
            </div>
            {/* Thumbnail Placeholders for a more premium look */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square relative rounded-2xl overflow-hidden bg-mist-pink/50 cursor-pointer hover:opacity-80 transition">
                  <Image
                    src={product.image_url || "/placeholder.png"}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>

          {/* RIGHT: Product Information */}
          <div className="lg:sticky lg:top-32">
            <FadeIn delay={0.2} className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-primary-pink uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
                    {product.category}
                  </span>
                  <div className="flex gap-4">
                    <button className="text-gray-text hover:text-primary-pink transition">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="text-gray-text hover:text-primary-pink transition">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-light text-dark-text leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-baseline gap-4 pt-2">
                  <span className="text-3xl font-medium text-primary-pink">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-muted-text line-through">
                    ₹{Math.round(product.price * 1.2)}
                  </span>
                </div>
              </div>

              <div className="h-px bg-line-color w-full" />

              <div className="space-y-6">
                <p className="text-gray-text text-lg font-light leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-mist-pink flex items-center justify-center">
                      <BadgeCheck className="w-5 h-5 text-primary-pink" />
                    </div>
                    <span className="text-xs font-medium text-dark-text uppercase tracking-wider">Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-mist-pink flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-pink" />
                    </div>
                    <span className="text-xs font-medium text-dark-text uppercase tracking-wider">Exclusive Design</span>
                  </div>
                </div>
              </div>

              {/* ACTION: WhatsApp Inquiry (Digital Showroom Focus) */}
              <div className="space-y-4 pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-dark-text text-white py-5 rounded-full font-medium tracking-widest uppercase hover:bg-primary-pink transition-all duration-300 shadow-premium group"
                >
                  <MessageCircle className="w-5 h-5 fill-white/10" />
                  Inquire on WhatsApp
                </a>
                <p className="text-center text-[10px] text-muted-text uppercase tracking-widest">
                  Our stylists are available for personal assistance
                </p>
              </div>

              {/* Additional Details Accordion-like structure */}
              <div className="pt-10 space-y-4">
                <div className="border-t border-line-color py-4 flex justify-between items-center cursor-pointer group">
                  <span className="text-xs font-bold uppercase tracking-widest text-dark-text">Fabric & Care</span>
                  <span className="text-gray-text group-hover:text-primary-pink transition">+</span>
                </div>
                <div className="border-t border-line-color py-4 flex justify-between items-center cursor-pointer group">
                  <span className="text-xs font-bold uppercase tracking-widest text-dark-text">Delivery Information</span>
                  <span className="text-gray-text group-hover:text-primary-pink transition">+</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {finalRelatedProducts.length > 0 && (
          <div className="mt-32">
            <FadeIn className="mb-12">
              <h2 className="text-3xl font-light text-dark-text">
                You May Also <span className="italic font-serif">Love</span>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {finalRelatedProducts.map((item, idx) => (
                <FadeIn key={item.id} delay={idx * 0.1}>
                  <ProductCard product={item} />
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
