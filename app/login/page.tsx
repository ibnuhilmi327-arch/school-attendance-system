"use client"

import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  function handleLogin() {
    router.push("/dashboard")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login Admin / Guru
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full p-3 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  )
}
