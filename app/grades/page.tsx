import Sidebar from "@/components/Sidebar"

export default function GradesPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Data Nilai
        </h1>

        <div className="flex gap-4 mb-6">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Download Excel
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Download PDF
          </button>
        </div>

        <div className="card">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">
                  Nama
                </th>

                <th className="p-3 text-left">
                  Nilai
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3">
                  Ahmad
                </td>

                <td className="p-3">
                  90
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
