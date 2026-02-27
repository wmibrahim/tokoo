"use client";

import { useState } from "react";
import { addProduct } from "@/actions/admin.actions";
import { useRouter } from "next/navigation";

export default function TambahProdukPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "mens-shirts",
    thumbnail: "",
    brand: "",
    stock: "",
    rating: "0",
    discountPercentage: "0",
  });

  async function handleSubmit() {
    await addProduct({
      title: form.title,
      price: Number(form.price),
      description: form.description,
      category: form.category,
      thumbnail: form.thumbnail,
      brand: form.brand,
      stock: Number(form.stock),
      rating: Number(form.rating),
      discountPercentage: Number(form.discountPercentage),
      images: [form.thumbnail],
    });
    router.push("/admin");
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Tambah Produk</h1>
      <div className="flex flex-col gap-4">
        {[
          { label: "Nama Produk", key: "title", type: "text" },
          { label: "Harga", key: "price", type: "number" },
          { label: "Brand", key: "brand", type: "text" },
          { label: "Thumbnail URL", key: "thumbnail", type: "text" },
          { label: "Stok", key: "stock", type: "number" },
        ].map(({ label, key, type }) => (
          <div key={key}>
            <label className="text-gray-400 text-sm mb-1 block">{label}</label>
            <input
              type={type}
              value={form[key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}

        <div>
          <label className="text-gray-400 text-sm mb-1 block">Kategori</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          >
            <option value="mens-shirts">Mens Shirts</option>
            <option value="mens-shoes">Mens Shoes</option>
            <option value="womens-shoes">Womens Shoes</option>
          </select>
        </div>

        <div>
          <label className="text-gray-400 text-sm mb-1 block">Deskripsi</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-3 mt-2">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Simpan
          </button>
          <button
            onClick={() => router.push("/admin")}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}