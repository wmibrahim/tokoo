import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const admin = req.cookies.get("admin");

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!admin) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}