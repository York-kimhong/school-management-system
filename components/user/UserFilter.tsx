"use client";

import { useState } from "react";

import {
  FaSearch,
  FaUserTag,
  FaCircle,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";

import GlassSelect from "@/components/ui/GlassSelect";

type Props = {
  search: string;

  setSearch: (value: string) => void;

  role: string;

  setRole: (value: string) => void;

  status: string;

  setStatus: (value: string) => void;

  department: string;

  setDepartment: (value: string) => void;

  className: string;

  setClassName: (value: string) => void;
};

export default function UserFilter({
  search,

  setSearch,

  role,

  setRole,

  status,

  setStatus,

  department,

  setDepartment,

  className,

  setClassName,
}: Props) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* SEARCH */}

      <div>
        <label
          className="
text-sm
font-semibold
text-slate-600
ml-2
"
        >
          Search Users
        </label>

        <div
          className="

mt-2

flex

items-center

gap-3


px-5

py-4



rounded-3xl



bg-white/50



backdrop-blur-md



border

border-white



shadow-sm



focus-within:ring-2

focus-within:ring-blue-300



transition

"
        >
          <div
            className="

w-10

h-10

rounded-xl



bg-blue-50



flex

items-center

justify-center

"
          >
            <FaSearch
              className="
text-blue-500
"
            />
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name or email..."
            className="

bg-transparent

outline-none

w-full


text-gray-700


placeholder:text-gray-400

"
          />
        </div>
      </div>

      {/* FILTER */}

      <div>
        <p
          className="
text-sm
font-semibold
text-slate-600
ml-2
mb-3
"
        >
          Filter Users
        </p>

        <div
          className="

grid

grid-cols-12

gap-5

"
        >
          <div
            className="
col-span-12
sm:col-span-6
lg:col-span-3
"
          >
            <GlassSelect
              label="Role"
              value={role}
              setValue={setRole}
              icon={<FaUserTag />}
              iconStyle="
bg-purple-50
text-purple-500
"
              options={["Admin", "Officer", "Teacher", "Student"]}
              open={openFilter === "role"}
              setOpen={(value) => setOpenFilter(value ? "role" : null)}
            />
          </div>

          <div
            className="
col-span-12
sm:col-span-6
lg:col-span-3
"
          >
            <GlassSelect
              label="Status"
              value={status}
              setValue={setStatus}
              icon={<FaCircle />}
              iconStyle="
bg-emerald-50
text-emerald-500
"
              options={["Active", "Inactive"]}
              open={openFilter === "status"}
              setOpen={(value) => setOpenFilter(value ? "status" : null)}
            />
          </div>

          <div
            className="
col-span-12
sm:col-span-6
lg:col-span-3
"
          >
            <GlassSelect
              label="Department"
              value={department}
              setValue={setDepartment}
              icon={<FaBuilding />}
              iconStyle="
bg-orange-50
text-orange-500
"
              options={[
                "Information Technology",

                "Computer Science",

                "Administration",
              ]}
              open={openFilter === "department"}
              setOpen={(value) => setOpenFilter(value ? "department" : null)}
            />
          </div>

          <div
            className="
col-span-12
sm:col-span-6
lg:col-span-3
"
          >
            <GlassSelect
              label="Class"
              value={className}
              setValue={setClassName}
              icon={<FaUsers />}
              iconStyle="
bg-cyan-50
text-cyan-500
"
              options={["IT-2024-A", "IT-2024-B", "CS-2024-A"]}
              open={openFilter === "class"}
              setOpen={(value) => setOpenFilter(value ? "class" : null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
