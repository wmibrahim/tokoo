import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const admin = req.cookies.get("admin");
  const { pathname } = req.nextUrl;

  // Kalau sudah login, tidak bisa akses /login lagi
  if (pathname === "/login" && admin?.value === "true") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Kalau belum login, tidak bisa akses /admin
  if (pathname.startsWith("/admin") && admin?.value !== "true") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};