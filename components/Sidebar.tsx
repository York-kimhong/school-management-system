"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";

import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaCog,
  FaBars,
  FaTimes,
  FaBuilding,
  FaCalendarAlt,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";

import { hasPermission } from "@/lib/checkPermission";

const menuItems = [
  {
    name: "Dashboard",
    href: "/Dashboard",
    icon: <FaHome />,
    permission: "dashboard",
  },

  {
    name: "Faculty",
    href: "/faculty",
    icon: <FaBuilding />,
    permission: "faculty",
  },

  {
    name: "Department",
    href: "/department",
    icon: <FaBuilding />,
    permission: "department",
  },

  {
    name: "Students",
    href: "/student",
    icon: <FaUserGraduate />,
    permission: "student",
  },

  {
    name: "Teachers",
    href: "/teacher",
    icon: <FaChalkboardTeacher />,
    permission: "teacher",
  },

  {
    name: "Courses",
    href: "/course",
    icon: <FaBook />,
    permission: "course",
  },

  {
    name: "Schedule",
    href: "/schedule",
    icon: <FaCalendarAlt />,
    permission: "schedule",
  },

  {
    name: "Attendance",
    href: "/attendance",
    icon: <FaClipboardCheck />,
    permission: "attendance",
  },

  {
    name: "Users",
    href: "/user",
    icon: <FaUsers />,
    permission: "user",
  },

  {
    name: "Settings",
    href: "/settings",
    icon: <FaCog />,
    permission: "settings",
  },
];

type Props = {
  role: string;
};

export default function Sidebar({ role }: Props) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const allowedMenu = menuItems.filter((item) =>
    hasPermission(
      role,

      item.permission,
    ),
  );

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="
md:hidden

fixed

top-4

left-4

z-[60]

bg-gray-900

text-white

w-10

h-10

rounded-xl

flex

items-center

justify-center

shadow-lg

"
      >
        <FaBars />
      </button>

      {/* Mobile Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
fixed

inset-0

bg-black/50

z-40

md:hidden

"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`

fixed

md:static


top-0

left-0


z-50


w-[260px]

md:w-64


h-screen


overflow-y-auto


bg-gray-900


text-white


p-6



transition-transform

duration-300



${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}


`}
      >
        {/* Mobile Close */}

        <button
          onClick={() => setOpen(false)}
          className="
md:hidden

absolute

right-5

top-5

text-gray-300

hover:text-white

"
        >
          <FaTimes />
        </button>

        {/* Logo */}

        <div className="mb-10">
          <h1
            className="
text-2xl

font-bold

"
          >
            University ERP
          </h1>

          <p
            className="
text-sm

text-gray-400

mt-1

"
          >
            {role}
          </p>
        </div>

        {/* Menu */}

        <nav className="space-y-2">
          {allowedMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`


flex


items-center


gap-3



px-4


py-3



rounded-xl



transition-all



duration-200



${
  pathname === item.href
    ? "bg-blue-600 text-white shadow-lg"
    : "text-gray-300 hover:bg-gray-800 hover:text-white"
}



`}
            >
              <span className="text-xl">{item.icon}</span>

              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
