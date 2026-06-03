import Sidebar from "@/components/Sidebar"

export default function SchoolPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="card max-w-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className="w-24 mb-4"
          />

          <h1 className="text-4xl font-bold mb-2">
            SMK Indonesia
          </h1>

          <p className="text-gray-500">
            Jl Pendidikan No 1
          </p>
        </div>
      </main>
    </div>
  )
}
