
export default function TeachersPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Profil Guru</h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-xl">
        <img
          src="/teacher.png"
          className="w-32 h-32 rounded-full mb-4"
        />

        <h2 className="text-2xl font-bold">Pak Rahmat</h2>
        <p>Matematika</p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Edit Profil
        </button>
      </div>
    </main>
  )
}
