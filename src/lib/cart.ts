import { cookies } from "next/headers";
import { Product } from "@/types"; // ← ganti dari @/types/product

export interface CartItem extends Product {
  qty: number;
}

export async function getCart(): Promise<CartItem[]> {
  const cookieStore = await cookies();
  const cart = cookieStore.get("cart")?.value;

  return cart ? JSON.parse(cart) : [];
}

export async function saveCart(cart: CartItem[]) {
  const cookieStore = await cookies();
  cookieStore.set("cart", JSON.stringify(cart), {
    httpOnly: true,
  });
}