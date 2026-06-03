import Sidebar from "@/components/Sidebar"

export default function AttendancePage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Presensi Siswa
        </h1>

        <div className="card">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">
                  Nama
                </th>

                <th className="p-3 text-left">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3">
                  Ahmad
                </td>

                <td className="p-3 text-green-600">
                  Hadir
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
