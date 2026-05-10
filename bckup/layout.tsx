import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        {/* Premium soft background layer */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-[#fff7fa] to-white" />

        {/* Main structure */}
        <Navbar />

        <main className="flex-grow w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
