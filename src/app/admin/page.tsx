import { getProducts } from "@/services/product.service";
import AdminActions from "./AdminActions";

export default async function AdminPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Admin CRUD Produk
      </h1>

      <AdminActions />

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4">
            <h2>{product.title}</h2>
            <p>Rp {product.price}</p>

            <AdminActions product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}