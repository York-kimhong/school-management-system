"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

import UserTable from "@/components/user/UserTable";
import UserModal from "@/components/user/UserModal";

type User = {
  id: number;

  name: string;

  email: string;

  password: string;

  role: string;

  department: string;

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

    status: "Active",
  },

  {
    id: 2,

    name: "York Kimhong",

    email: "kimhong@university.com",

    password: "123456",

    role: "Student",

    department: "Information Technology",

    status: "Active",
  },
];

export default function UserPage() {
  const [users, setUsers] = useState(initialUsers);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",

    email: "",

    password: "",

    role: "",

    department: "",

    status: "Active",
  });

  // Search

  const filteredUsers = users.filter((item) =>
    item.name

      .toLowerCase()

      .includes(search.toLowerCase()),
  );

  // Open Add

  function openAdd() {
    setEditId(null);

    setForm({
      name: "",

      email: "",

      password: "",

      role: "",

      department: "",

      status: "Active",
    });

    setOpen(true);
  }

  // Save

  function saveUser() {
    if (editId) {
      setUsers(
        users.map((item) =>
          item.id === editId
            ? {
                ...item,

                ...form,
              }
            : item,
        ),
      );
    } else {
      const newUser = {
        id: Date.now(),

        ...form,
      };

      setUsers([...users, newUser]);
    }

    setOpen(false);
  }

  // Edit

  function editUser(item: User) {
    setEditId(item.id);

    setForm({
      name: item.name,

      email: item.email,

      password: item.password,

      role: item.role,

      department: item.department,

      status: item.status,
    });

    setOpen(true);
  }

  // Delete

  function deleteUser() {
    setUsers(users.filter((item) => item.id !== deleteId));

    setDeleteId(null);
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div
        className="
flex
items-center
justify-between
"
      >
        <div>
          <h1
            className="
text-3xl
font-bold
text-gray-800
"
          >
            User Management
          </h1>

          <p
            className="
mt-2
text-gray-500
"
          >
            Manage system users and roles
          </p>
        </div>

        <Button onClick={openAdd}>+ Add User</Button>
      </div>

      <Card>
        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search user..."
          />
        </div>

        <UserTable
          users={filteredUsers}
          onEdit={editUser}
          onDelete={(id) => setDeleteId(id)}
        />
      </Card>

      <UserModal
        open={open}
        onClose={() => setOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={saveUser}
        editMode={editId !== null}
      />

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete User?"
        message="This user account will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={deleteUser}
      />
    </div>
  );
}
