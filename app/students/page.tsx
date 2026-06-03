
const students = [
  { id: 1, name: "Ahmad", class: "10A" },
  { id: 2, name: "Budi", class: "11B" }
]

export default function StudentsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Data Siswa</h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
        Tambah Siswa
      </button>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Kelas</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td className="p-3">{s.name}</td>
              <td className="p-3">{s.class}</td>
              <td className="p-3 flex gap-2">
                <button className="bg-yellow-400 px-3 py-1 rounded">
                  Edit
                </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
