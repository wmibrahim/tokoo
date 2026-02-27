"use client";

import { useRouter } from "next/navigation";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export default function AdminActions({ product }: any) {
  const router = useRouter();

  async function handleDelete(id: number) {
    await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  }

  async function handleCreate() {
    await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Produk Baru",
        price: 100,
        description: "Deskripsi produk",
        categoryId: 1,
        images: ["https://placeimg.com/640/480/any"],
      }),
    });

    router.refresh();
  }

  if (!product) {
    return (
      <button
        onClick={handleCreate}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Tambah Produk
      </button>
    );
  }

  return (
    <button
      onClick={() => handleDelete(product.id)}
      className="bg-red-500 text-white px-2 py-1 rounded mt-2"
    >
      Delete
    </button>
  );
}