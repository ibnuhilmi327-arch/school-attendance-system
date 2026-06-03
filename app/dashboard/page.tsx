
export default function Dashboard() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded-xl">
          <h2>Total Siswa</h2>
          <p className="text-4xl font-bold">320</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl">
          <h2>Kehadiran Hari Ini</h2>
          <p className="text-4xl font-bold">290</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl">
          <h2>Rata-rata Nilai</h2>
          <p className="text-4xl font-bold">88</p>
        </div>
      </div>
    </main>
  )
}
