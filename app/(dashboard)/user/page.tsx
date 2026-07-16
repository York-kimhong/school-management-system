"use client";

import { useState } from "react";

import UserStats from "@/components/user/UserStats";
import UserFilter from "@/components/user/UserFilter";
import UserTable from "@/components/user/UserTable";
import UserModal from "@/components/user/UserModal";

import ConfirmDialog from "@/components/ui/ConfirmDialog";

type User = {
  id: number;

  name: string;

  email: string;

  password: string;

  role: string;

  department: string;

  className: string;

  status: string;
};

const initialUsers: User[] = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@university.com",
    password: "123456",
    role: "Admin",
    department: "Administration",
    className: "-",
    status: "Active",
  },

  {
    id: 2,
    name: "York Kimhong",
    email: "kimhong@university.com",
    password: "123456",
    role: "Student",
    department: "Information Technology",
    className: "IT-2024-A",
    status: "Active",
  },

  {
    id: 3,
    name: "John Smith",
    email: "teacher@university.com",
    password: "123456",
    role: "Teacher",
    department: "Computer Science",
    className: "-",
    status: "Active",
  },
];

export default function UserPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  // FILTER

  const [search, setSearch] = useState("");

  const [role, setRole] = useState("");

  const [status, setStatus] = useState("");

  const [department, setDepartment] = useState("");

  const [className, setClassName] = useState("");

  // MODAL

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",

    email: "",

    password: "",

    role: "",

    department: "",

    className: "",

    status: "Active",
  });

  // FILTER DATA

  const filteredUsers = users.filter((user) => {
    return (
      (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())) &&
      (role === "" || user.role === role) &&
      (status === "" || user.status === status) &&
      (department === "" || user.department === department) &&
      (className === "" || user.className === className)
    );
  });

  // ADD

  function addUser() {
    setEditId(null);

    setForm({
      name: "",

      email: "",

      password: "",

      role: "",

      department: "",

      className: "",

      status: "Active",
    });

    setOpen(true);
  }

  // SAVE

  function saveUser() {
    if (editId) {
      setUsers(
        users.map((user) =>
          user.id === editId
            ? {
                ...user,

                ...form,
              }
            : user,
        ),
      );
    } else {
      setUsers([
        ...users,

        {
          id: Date.now(),

          ...form,
        },
      ]);
    }

    setOpen(false);
  }

  // EDIT

  function editUser(user: User) {
    setEditId(user.id);

    setForm({
      name: user.name,

      email: user.email,

      password: user.password,

      role: user.role,

      department: user.department,

      className: user.className,

      status: user.status,
    });

    setOpen(true);
  }

  // DELETE

  function deleteUser() {
    setUsers(users.filter((user) => user.id !== deleteId));

    setDeleteId(null);
  }

  return (
    <div
      className="
relative

space-y-8


from-white
via-slate-50
to-blue-50

  p - 8
  
min-h-screen

"
    >
      {/* Background Glow */}

      <div
        className="
absolute

top-0

right-0

w-96

h-96

bg-blue-400/20

rounded-full

blur-3xl

"
      />

      <div
        className="
absolute

bottom-0

left-0

w-96

h-96

bg-purple-400/20

rounded-full

blur-3xl

"
      />

      {/* HEADER */}

      <div
        className="
relative

flex

flex-col

md:flex-row

md:items-center

md:justify-between

gap-5

"
      >
        <div>
          <h1
            className="
text-4xl

font-extrabold

bg-gradient-to-r

from-blue-600

to-purple-600

bg-clip-text

text-transparent

"
          >
            User Management
          </h1>

          <p
            className="
text-gray-500

mt-2

"
          >
            Manage users, roles and permissions
          </p>
        </div>

        <button
          onClick={addUser}
          className="

px-6

py-3

rounded-2xl

bg-gradient-to-r

from-blue-600

to-indigo-600

text-white

font-semibold

shadow-lg

shadow-blue-500/30

hover:scale-105

transition

"
        >
          + Add User
        </button>
      </div>

      {/* STATS */}

      <UserStats users={users} />

      {/* CONTENT */}

      <div
        className="

bg-white/60

backdrop-blur-xl

border

border-white/40

rounded-3xl

shadow-xl

p-5

sm:p-7

relative

"
      >
        {/* FILTER */}

        <div
          className="

bg-white/50

backdrop-blur-xl

rounded-2xl

p-4

mb-6

border

border-white/40

"
        >
          <UserFilter
            search={search}
            setSearch={setSearch}
            role={role}
            setRole={setRole}
            status={status}
            setStatus={setStatus}
            department={department}
            setDepartment={setDepartment}
            className={className}
            setClassName={setClassName}
          />
        </div>

        {/* TABLE */}

        <div
          className="

overflow-x-auto

rounded-2xl

"
        >
          <UserTable
            users={filteredUsers}
            onEdit={editUser}
            onDelete={(id) => setDeleteId(id)}
          />
        </div>
      </div>

      {/* MODAL */}

      <UserModal
        open={open}
        onClose={() => setOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={saveUser}
        editMode={editId !== null}
      />

      {/* DELETE */}

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete User?"
        message="This user will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={deleteUser}
      />
    </div>
  );
}
