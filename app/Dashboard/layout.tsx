import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

import { getSession } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSession();

  return (
    <div className="flex min-h-screen">
      <Sidebar role={user?.role ?? "Student"} />

      <div className="flex-1">
        <Navbar />

        <main
          className="
          p-6
          bg-gray-100
          min-h-screen
        "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
