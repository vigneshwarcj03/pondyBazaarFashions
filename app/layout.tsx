import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarqueeBar from "@/components/layout/MarqueeBar";
import BottomNav from "@/components/layout/BottomNav";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import LenisProvider from "@/components/providers/LenisProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "PondyBazaar Fashions | Premium Women's Fashion Boutique",
  description:
    "Discover elegant women's fashion, boutique collections, festive wear and premium daily styles at PondyBazaar Fashions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#111] font-sans overflow-x-hidden">
        <LenisProvider>
          {/* Premium soft background layer */}
          <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-[#fff7fa] to-white" />

          {/* Main structure */}
          <MarqueeBar />
          <Navbar />

          <main className="flex-grow w-full">
            {children}
          </main>

          <Footer />
          
          <FloatingWhatsApp />
          <BottomNav />
        </LenisProvider>
      </body>
    </html>
  );
}
