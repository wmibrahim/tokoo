"use server";

import { getLocalProducts, saveLocalProducts } from "@/lib/products";
import { Product } from "@/types";
import { revalidatePath } from "next/cache";

export async function addProduct(product: Omit<Product, "id">) {
  const products = getLocalProducts();
  const newProduct = {
    ...product,
    id: Date.now(),
  } as Product;
  products.push(newProduct);
  saveLocalProducts(products);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function updateProduct(product: Product) {
  const products = getLocalProducts();
  const index = products.findIndex((p) => p.id === product.id);
  if (index !== -1) products[index] = product;
  saveLocalProducts(products);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function deleteProduct(id: number) {
  const products = getLocalProducts();
  saveLocalProducts(products.filter((p) => p.id !== id));
  revalidatePath("/admin");
  revalidatePath("/");
}