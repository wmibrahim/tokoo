"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-3 py-1 rounded"
    >
      Add to Cart
    </button>
  );
}