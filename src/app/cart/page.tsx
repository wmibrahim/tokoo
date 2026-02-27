import { getProducts } from "@/services/product.service";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Katalog Produk
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}