import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-800 rounded-xl bg-gray-900 overflow-hidden hover:border-gray-600 transition">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          className="h-48 object-cover w-full"
          alt={product.title}
        />
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h2 className="font-semibold text-white hover:text-blue-400 transition line-clamp-1">
            {product.title}
          </h2>
        </Link>
        <p className="text-gray-500 text-xs mt-1">{product.brand}</p>
        <p className="text-blue-400 font-bold mt-2">Rp {product.price}</p>

        <div className="flex gap-2 mt-4">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm transition"
          >
            Detail
          </Link>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}