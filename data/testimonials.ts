export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ananya Sharma",
    role: "Bride",
    content: "The bridal collection at Pondy Bazaar Fashions is simply breathtaking. I found my dream wedding saree here. The quality and craftsmanship are unmatched.",
    avatar: "/products/product1.jpg",
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Fashion Enthusiast",
    content: "I love their festive wear! Each piece feels so unique and premium. The personalized styling assistance was a huge help for my sister's wedding.",
    avatar: "/products/product2.jpg",
  },
  {
    id: "3",
    name: "Sneha Reddy",
    role: "Regular Customer",
    content: "A truly luxury boutique experience. The fabrics are premium and the designs are always ahead of the trends. Highly recommended!",
    avatar: "/products/product3.jpg",
  },
  {
    id: "4",
    name: "Meera Krishnan",
    role: "Boutique Owner",
    content: "As someone in the fashion industry, I'm highly impressed by their curated collections. The attention to detail is remarkable.",
    avatar: "/products/product4.jpg",
  },
];
