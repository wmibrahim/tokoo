"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  function handleClick() {
    addToCart(product);
    router.refresh(); // refresh server components agar badge Navbar update
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition text-sm"
    >
      Add to Cart
    </button>
  );
}