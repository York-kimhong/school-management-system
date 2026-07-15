import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">School Admin</h1>

      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link href="/students">Students</Link>
          </li>

          <li>
            <Link href="/teachers">Teachers</Link>
          </li>

          <li>
            <Link href="/courses">Courses</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
