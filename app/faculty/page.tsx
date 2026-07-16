"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

import FacultyTable from "@/components/faculty/FacultyTable";
import FacultyModal from "@/components/faculty/FacultyModal";

type Faculty = {
  id: number;

  name: string;

  code: string;

  dean: string;

  email: string;

  phone: string;

  status: string;
};

const initialFaculties: Faculty[] = [
  {
    id: 1,
    name: "Faculty of Engineering",
    code: "FE",
    dean: "Dr. Kim",
    email: "engineering@university.edu",
    phone: "012345678",
    status: "Active",
  },

  {
    id: 2,
    name: "Faculty of Science",
    code: "FS",
    dean: "Dr. John",
    email: "science@university.edu",
    phone: "098765432",
    status: "Active",
  },
];

export default function FacultyPage() {
  const [faculties, setFaculties] = useState(initialFaculties);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",

    code: "",

    dean: "",

    email: "",

    phone: "",

    status: "Active",
  });

  // Search

  const filteredFaculties = faculties.filter((faculty) =>
    faculty.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Open Add

  function openAdd() {
    setEditId(null);

    setForm({
      name: "",

      code: "",

      dean: "",

      email: "",

      phone: "",

      status: "Active",
    });

    setOpen(true);
  }

  // Save

  function saveFaculty() {
    if (editId) {
      setFaculties(
        faculties.map((faculty) =>
          faculty.id === editId
            ? {
                ...faculty,

                ...form,
              }
            : faculty,
        ),
      );
    } else {
      const newFaculty = {
        id: Date.now(),

        ...form,
      };

      setFaculties([...faculties, newFaculty]);
    }

    setOpen(false);
  }

  // Edit

  function editFaculty(faculty: Faculty) {
    setEditId(faculty.id);

    setForm({
      name: faculty.name,

      code: faculty.code,

      dean: faculty.dean,

      email: faculty.email,

      phone: faculty.phone,

      status: faculty.status,
    });

    setOpen(true);
  }

  // Delete

  function deleteFaculty() {
    setFaculties(faculties.filter((faculty) => faculty.id !== deleteId));

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
            Faculty Management
          </h1>

          <p
            className="
text-gray-500
mt-2
"
          >
            Manage university faculties
          </p>
        </div>

        <Button onClick={openAdd}>+ Add Faculty</Button>
      </div>

      <Card>
        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search faculty..."
          />
        </div>

        <FacultyTable
          faculties={filteredFaculties}
          onEdit={editFaculty}
          onDelete={(id) => setDeleteId(id)}
        />
      </Card>

      <FacultyModal
        open={open}
        onClose={() => setOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={saveFaculty}
        editMode={editId !== null}
      />

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Faculty?"
        message="This faculty will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={deleteFaculty}
      />
    </div>
  );
}
