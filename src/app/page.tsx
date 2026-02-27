import { getProducts } from "@/services/product.service";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { getLocalProducts } from "@/lib/products";

export default async function Home() {
  const [apiProducts, localProducts] = await Promise.all([
    getProducts(),
    Promise.resolve(getLocalProducts()),
  ]);

  const products: Product[] = [...localProducts, ...apiProducts];

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Katalog Produk</h1>
        <p className="text-gray-400 mt-1">
          {products.length} produk tersedia
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item: Product) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
}