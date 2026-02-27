import { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "no-store",
  });

  if (!res.ok) return [];

  const data = await res.json();

  return data.products.filter(
    (p: Product) =>
      p.category === "mens-shirts" ||
      p.category === "mens-shoes" ||
      p.category === "womens-shoes"
  );
}