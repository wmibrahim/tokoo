"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, total, updateQty, removeItem } = useCart();
  const router = useRouter();

  function handleUpdateQty(id: number, qty: number) {
    if (qty < 1) {
      removeItem(id);
    } else {
      updateQty(id, qty);
    }
    router.refresh();
  }

  function handleRemove(id: number) {
    removeItem(id);
    router.refresh();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Keranjang Belanja</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Keranjang kosong</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-gray-700 rounded-lg p-4 bg-gray-900"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-blue-400 text-sm">Rp {item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleUpdateQty(item.id, item.qty - 1)}
                  className="w-7 h-7 rounded bg-gray-700 hover:bg-gray-600 text-white font-bold"
                >
                  -
                </button>
                <span className="text-white w-4 text-center">{item.qty}</span>
                <button
                  onClick={() => handleUpdateQty(item.id, item.qty + 1)}
                  className="w-7 h-7 rounded bg-gray-700 hover:bg-gray-600 text-white font-bold"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-2 text-red-400 hover:text-red-300 text-sm"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}

          <hr className="border-gray-700 my-2" />
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-white">Total</p>
            <p className="font-bold text-lg text-blue-400">Rp {total}</p>
          </div>
        </div>
      )}
    </div>
  );
}