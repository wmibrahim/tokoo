import { cookies } from "next/headers";
import { Product } from "@/types/product";

export interface CartItem extends Product {
  qty: number;
}

export function getCart(): CartItem[] {
  const cookieStore = cookies();
  const cart = cookieStore.get("cart")?.value;

  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart: CartItem[]) {
  cookies().set("cart", JSON.stringify(cart), {
    httpOnly: true,
  });
}