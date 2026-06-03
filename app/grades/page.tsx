
export default function GradesPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Data Nilai</h1>

      <div className="flex gap-4 mb-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Download Excel
        </button>

        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Download PDF
        </button>
      </div>
    </main>
  )
}
