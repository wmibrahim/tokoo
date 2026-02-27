"use server";

import { cookies } from "next/headers";

export async function addToCart(product: any) {
  const cookieStore = cookies();
  const existing = cookieStore.get("cart");

  let cart = [];

  if (existing?.value) {
    cart = JSON.parse(existing.value);
  }

  const index = cart.findIndex((item: any) => item.id === product.id);

  if (index >= 0) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  cookieStore.set("cart", JSON.stringify(cart), {
    httpOnly: true,
    path: "/",
  });
}