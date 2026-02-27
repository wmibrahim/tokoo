"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    document.cookie = "admin=; Max-Age=0; path=/"; // hapus cookie
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Logout
    </button>
  );
}