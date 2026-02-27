"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/admin");
      router.refresh();
    } else {
      alert("Login gagal");
    }
  }

  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="border p-6 rounded w-80"
      >
        <h1 className="text-xl font-bold mb-4">
          Login Admin
        </h1>

        <input
          name="username"
          placeholder="Username"
          className="border w-full mb-3 p-2"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border w-full mb-3 p-2"
        />

        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}