"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, total, updateQty, removeItem } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Keranjang</h1>

      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.title} x {item.qty}
              </span>
              <span>Rp {item.price * item.qty}</span>
            </div>
          ))}

          <hr className="my-3" />
          <p className="font-bold">Total: Rp {total}</p>
        </>
      )}
    </div>
  );
}