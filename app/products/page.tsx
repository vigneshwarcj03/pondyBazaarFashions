import ProductsClient from "./products-client";
import { products } from "@/data/products";

export default function ProductsPage() {
  return <ProductsClient products={products} />;
}
