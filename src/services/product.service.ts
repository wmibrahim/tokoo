const BASE_URL = "https://dummyjson.com";

export async function getProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products?limit=100`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API STATUS:", res.status);
      return [];
    }

    const data = await res.json();

    // dummyjson structure berbeda
    return data.products.filter(
      (item: any) =>
        item.category?.toLowerCase().includes("mens-shirts") ||
        item.category?.toLowerCase().includes("mens-shoes") ||
        item.category?.toLowerCase().includes("womens-shoes")
    );
  } catch (error) {
    console.error("FETCH ERROR:", error);
    return [];
  }
}

export async function getProductById(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("DETAIL STATUS:", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("DETAIL ERROR:", error);
    return null;
  }
}