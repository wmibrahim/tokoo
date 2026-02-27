import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: any) {
  return (
    <div className="border rounded-xl p-4 shadow">
      <img
        src={product.thumbnail}
        className="h-40 object-cover w-full rounded"
        alt={product.title}
      />

      <h2 className="font-semibold mt-2">
        {product.title}
      </h2>

      <p className="text-blue-600 font-bold">
        Rp {product.price}
      </p>

      <div className="flex gap-2 mt-3">
        <Link
          href={`/product/${product.id}`}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          Detail
        </Link>

        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
}