import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="sidebar p-5">
      <h1 className="text-2xl font-bold mb-8">
        School App
      </h1>

      <ul className="space-y-4">
        <li>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link href="/students">
            Data Siswa
          </Link>
        </li>

        <li>
          <Link href="/teachers">
            Data Guru
          </Link>
        </li>

        <li>
          <Link href="/attendance">
            Presensi
          </Link>
        </li>

        <li>
          <Link href="/grades">
            Nilai
          </Link>
        </li>

        <li>
          <Link href="/school">
            Profil Sekolah
          </Link>
        </li>
      </ul>
    </div>
  )
}
