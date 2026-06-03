import Sidebar from "@/components/Sidebar"

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="card">
            <h2 className="text-gray-500">
              Total Siswa
            </h2>

            <p className="text-5xl font-bold text-blue-700 mt-2">
              320
            </p>
          </div>

          <div className="card">
            <h2 className="text-gray-500">
              Kehadiran Hari Ini
            </h2>

            <p className="text-5xl font-bold text-green-600 mt-2">
              290
            </p>
          </div>

          <div className="card">
            <h2 className="text-gray-500">
              Rata-rata Nilai
            </h2>

            <p className="text-5xl font-bold text-purple-600 mt-2">
              88
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
