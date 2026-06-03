import Sidebar from "@/components/Sidebar"

export default function TeachersPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Profil Guru
        </h1>

        <div className="card max-w-md">
          <img
            src="https://i.pravatar.cc/150"
            className="w-32 h-32 rounded-full mb-4"
          />

          <h2 className="text-2xl font-bold">
            Pak Rahmat
          </h2>

          <p className="text-gray-500">
            Guru Matematika
          </p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-5">
            Edit Profil
          </button>
        </div>
      </main>
    </div>
  )
}
