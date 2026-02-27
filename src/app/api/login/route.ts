import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Ganti sesuai credentials yang kamu mau
  if (username === "admin" && password === "admin123") {
    const cookieStore = await cookies();
    cookieStore.set("admin", "true", {
      httpOnly: true,
      path: "/",
    });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}