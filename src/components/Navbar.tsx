import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin")?.value === "true";

  // Cart counter SSR
  const cartCookie = cookieStore.get("cart")?.value;
  const cartItems = cartCookie ? JSON.parse(cartCookie) : [];
  const cartCount = cartItems.reduce(
    (acc: number, item: any) => acc + item.qty,
    0
  );

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <Link href="/" className="font-bold text-xl tracking-tight">
        Tokoo
      </Link>

      <div className="flex items-center gap-4">
        {/* Cart dengan badge */}
        <Link href="/cart" className="relative">
          <span className="text-sm font-medium">🛒 Keranjang</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {isAdmin ? (
          <>
            <Link
              href="/admin"
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition text-sm"
            >
              Admin Panel
            </Link>
            <LogoutButton />
          </>
        ) : (
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition text-sm"
          >
            Login Admin
          </Link>
        )}
      </div>
    </nav>
  );
}