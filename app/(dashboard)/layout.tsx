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
    <div
      className="
        flex
        min-h-screen
        overflow-x-hidden
      "
    >
      {/* Sidebar */}

      <Sidebar role={user?.role ?? "Guest"} />

      {/* Main Area */}

      <div
        className="
          flex-1
          min-w-0
          w-full
        "
      >
        {/* Navbar */}

        <Navbar user={user} />

        {/* Page Content */}

        <main
          className="
            p-3
            sm:p-6
            lg:p-8

            bg-gray-100

            min-h-screen

            overflow-x-hidden
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
