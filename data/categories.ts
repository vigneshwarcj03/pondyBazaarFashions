export interface Category {
  name: string;
  slug: string;
  image: string;
}

export const categories: Category[] = [
  {
    name: "Sarees",
    slug: "sarees",
    image: "/products/product1.jpg",
  },
  {
    name: "Bridal Wear",
    slug: "bridal-wear",
    image: "/products/product2.jpg",
  },
  {
    name: "Party Wear",
    slug: "party-wear",
    image: "/products/product3.jpg",
  },
  {
    name: "Casual Collection",
    slug: "casual-collection",
    image: "/products/product4.jpg",
  },
  {
    name: "Designer Collection",
    slug: "designer-collection",
    image: "/products/product5.jpg",
  },
  {
    name: "Festive Wear",
    slug: "festive-wear",
    image: "/products/product6.jpg",
  },
];
