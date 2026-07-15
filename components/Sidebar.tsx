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
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    href: "/Dashboard",
    icon: <FaHome />,
  },
  {
    name: "Students",
    href: "/Student",
    icon: <FaUserGraduate />,
  },
  {
    name: "Teachers",
    href: "/Teacher",
    icon: <FaChalkboardTeacher />,
  },
  {
    name: "Courses",
    href: "/courses",
    icon: <FaBook />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <FaCog />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden
          fixed
          top-5
          left-5
          z-50
          bg-gray-900
          text-white
          p-3
          rounded-xl
        "
      >
        <FaBars />
      </button>

      {/* Overlay */}

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

          w-64
          min-h-screen

          bg-gray-900
          text-white
          p-6

          transition-transform
          duration-300

          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Close button mobile */}

        <button
          onClick={() => setOpen(false)}
          className="
            md:hidden
            absolute
            right-5
            top-5
            text-gray-300
          "
        >
          <FaTimes />
        </button>

        {/* Logo */}

        <h1
          className="
            text-2xl
            font-bold
            mb-10
          "
        >
          School Admin
        </h1>

        {/* Navigation */}

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
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
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
                <span className="text-xl">{item.icon}</span>

                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
