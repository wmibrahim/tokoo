import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton"; // Client Component

export default function Navbar() {
  // Next.js v14+: cookies() iterable
  const cookieArray = Array.from(cookies()); // iterable ke array
  const adminCookie = cookieArray.find(c => c.name === "admin");
  const isAdmin = adminCookie?.value === "true";

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <Link href="/" className="font-bold text-lg">
        Toko
      </Link>

      <div className="flex gap-4">
        <Link href="/cart">Cart</Link>

        {isAdmin ? (
          <>
            <Link
              href="/admin"
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Admin Panel
            </Link>
            {/* LOGOUT BUTTON */}
            <LogoutButton /> {/* setelah Admin Panel */}
          </>
        ) : (
          <Link
            href="/login"
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Login Admin
          </Link>
        )}
      </div>
    </nav>
  );
}