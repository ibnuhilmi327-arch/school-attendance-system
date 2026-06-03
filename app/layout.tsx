import "./globals.css"

export const metadata = {
  title: "School Attendance System",
  description: "Website Absensi dan Nilai Siswa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  )
}
