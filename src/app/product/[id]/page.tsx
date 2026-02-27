import { getProductById } from "@/services/product.service";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-xl object-cover"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-white">{product.title}</h1>
          <p className="text-gray-400">{product.description}</p>
          <p className="text-2xl font-bold text-blue-400">Rp {product.price}</p>
          <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
          <p className="text-gray-500 text-sm">Stok: {product.stock}</p>
          <p className="text-yellow-400 text-sm">⭐ {product.rating}</p>
          <AddToCartButton product={product} />
        </div>
      </div>

      {product.images?.length > 1 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-white mb-3">Foto Lainnya</h2>
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title} ${i}`}
                className="rounded-lg object-cover h-32 w-full"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}