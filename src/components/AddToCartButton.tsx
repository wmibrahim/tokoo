import { addToCartAction } from "@/app/actions/cart.actions";

export default function AddToCartButton({
  productId,
}: {
  productId: number;
}) {
  return (
    <form action={addToCartAction}>
      <input
        type="hidden"
        name="productId"
        value={productId}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add To Cart
      </button>
    </form>
  );
}