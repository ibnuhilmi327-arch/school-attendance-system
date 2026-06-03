import Link from "next/link"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="card text-center w-[400px]">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          School Attendance System
        </h1>

        <p className="text-gray-500 mb-6">
          Website Absensi dan Nilai Siswa
        </p>

        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Login Sekarang
        </Link>
      </div>
    </main>
  )
}
