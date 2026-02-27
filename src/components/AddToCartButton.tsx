"use client";

import { useTransition } from "react";
import { addToCart } from "@/actions/cart.actions";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: any) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleClick() {
    startTransition(async () => {
      await addToCart(product);
      router.refresh();
    });
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-3 py-1 rounded"
      disabled={isPending}
    >
      {isPending ? "Adding..." : "Add to Cart"}
    </button>
  );
}