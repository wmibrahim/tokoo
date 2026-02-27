import { getProducts } from "@/services/product.service";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Katalog Produk</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item: Product) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
}