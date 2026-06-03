
export default function AttendancePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Presensi Siswa</h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Nama</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3">Ahmad</td>
            <td className="p-3 text-green-600">Hadir</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
