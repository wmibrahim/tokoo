"use server";

import { getCart, saveCart } from "@/lib/cart";
import { getProductById } from "@/services/product.service";
import { Product } from "@/types";

export async function addToCartAction(formData: FormData) {
  const productId = formData.get("productId");

  if (!productId || typeof productId !== "string") {
    throw new Error("Invalid product ID");
  }

  const product: Product = await getProductById(productId);
  const cart = await getCart();

  const exist = cart.find((i) => i.id === product.id);

  if (exist) {
    exist.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  await saveCart(cart);
}