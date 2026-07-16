"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

import DepartmentTable from "@/components/department/DepartmentTable";
import DepartmentModal from "@/components/department/DepartmentModal";

type Department = {
  id: number;

  name: string;

  code: string;

  faculty: string;

  head: string;

  email: string;

  status: string;
};

const initialDepartments: Department[] = [
  {
    id: 1,

    name: "Information Technology",

    code: "IT",

    faculty: "Faculty of Engineering",

    head: "Dr. Kim",

    email: "it@university.edu",

    status: "Active",
  },

  {
    id: 2,

    name: "Computer Science",

    code: "CS",

    faculty: "Faculty of Science",

    head: "Dr. John",

    email: "cs@university.edu",

    status: "Active",
  },
];

export default function DepartmentPage() {
  const [departments, setDepartments] = useState(initialDepartments);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",

    code: "",

    faculty: "",

    head: "",

    email: "",

    status: "Active",
  });

  // Search

  const filteredDepartments = departments.filter((department) =>
    department.name

      .toLowerCase()

      .includes(search.toLowerCase()),
  );

  // Open Add Modal

  function openAdd() {
    setEditId(null);

    setForm({
      name: "",

      code: "",

      faculty: "",

      head: "",

      email: "",

      status: "Active",
    });

    setOpen(true);
  }

  // Save Department

  function saveDepartment() {
    if (editId) {
      setDepartments(
        departments.map((department) =>
          department.id === editId
            ? {
                ...department,

                ...form,
              }
            : department,
        ),
      );
    } else {
      const newDepartment = {
        id: Date.now(),

        ...form,
      };

      setDepartments([...departments, newDepartment]);
    }

    setOpen(false);
  }

  // Edit

  function editDepartment(department: Department) {
    setEditId(department.id);

    setForm({
      name: department.name,

      code: department.code,

      faculty: department.faculty,

      head: department.head,

      email: department.email,

      status: department.status,
    });

    setOpen(true);
  }

  // Delete

  function deleteDepartment() {
    setDepartments(
      departments.filter((department) => department.id !== deleteId),
    );

    setDeleteId(null);
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div
        className="
flex
justify-between
items-center
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
            Department Management
          </h1>

          <p
            className="
mt-2
text-gray-500
"
          >
            Manage university departments
          </p>
        </div>

        <Button onClick={openAdd}>+ Add Department</Button>
      </div>

      <Card>
        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search department..."
          />
        </div>

        <DepartmentTable
          departments={filteredDepartments}
          onEdit={editDepartment}
          onDelete={(id) => setDeleteId(id)}
        />
      </Card>

      <DepartmentModal
        open={open}
        onClose={() => setOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={saveDepartment}
        editMode={editId !== null}
      />

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Department?"
        message="This department will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={deleteDepartment}
      />
    </div>
  );
}
