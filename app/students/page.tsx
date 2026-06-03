import Sidebar from "@/components/Sidebar"

const students = [
  {
    id:1,
    name:"Ahmad",
    class:"10A"
  },
  {
    id:2,
    name:"Budi",
    class:"11B"
  }
]

export default function StudentsPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">
            Data Siswa
          </h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Tambah Siswa
          </button>
        </div>

        <div className="card overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">
                  Nama
                </th>

                <th className="text-left p-3">
                  Kelas
                </th>

                <th className="p-3">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {students.map((student)=>(
                <tr key={student.id} className="border-b">
                  <td className="p-3">
                    {student.name}
                  </td>

                  <td className="p-3">
                    {student.class}
                  </td>

                  <td className="p-3 flex gap-2 justify-center">
                    <button className="bg-yellow-400 px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-600 text-white px-3 py-1 rounded">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
