"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

import ClassTable from "@/components/class/ClassTable";
import ClassModal from "@/components/class/ClassModal";

type ClassRoom = {
  id: number;

  classCode: string;

  className: string;

  faculty: string;

  department: string;

  academicYear: string;

  advisor: string;

  studentCount: number;

  status: string;
};

const initialClasses: ClassRoom[] = [
  {
    id: 1,

    classCode: "IT3A",

    className: "Information Technology 3A",

    faculty: "Faculty of Engineering",

    department: "Information Technology",

    academicYear: "2026",

    advisor: "Dr. Sok Dara",

    studentCount: 45,

    status: "Active",
  },

  {
    id: 2,

    classCode: "CS2B",

    className: "Computer Science 2B",

    faculty: "Faculty of Science",

    department: "Computer Science",

    academicYear: "2026",

    advisor: "Prof. Kim Rina",

    studentCount: 38,

    status: "Active",
  },
];

export default function ClassPage() {
  const [classes, setClasses] = useState(initialClasses);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState({
    classCode: "",

    className: "",

    faculty: "",

    department: "",

    academicYear: "",

    advisor: "",

    status: "Active",
  });

  // Search

  const filteredClasses = classes.filter((item) =>
    item.className

      .toLowerCase()

      .includes(search.toLowerCase()),
  );

  // Add

  function openAdd() {
    setEditId(null);

    setForm({
      classCode: "",

      className: "",

      faculty: "",

      department: "",

      academicYear: "",

      advisor: "",

      status: "Active",
    });

    setOpen(true);
  }

  // Save

  function saveClass() {
    if (editId) {
      setClasses(
        classes.map((item) =>
          item.id === editId
            ? {
                ...item,

                ...form,
              }
            : item,
        ),
      );
    } else {
      const newClass = {
        id: Date.now(),

        studentCount: 0,

        ...form,
      };

      setClasses([...classes, newClass]);
    }

    setOpen(false);
  }

  // Edit

  function editClass(item: ClassRoom) {
    setEditId(item.id);

    setForm({
      classCode: item.classCode,

      className: item.className,

      faculty: item.faculty,

      department: item.department,

      academicYear: item.academicYear,

      advisor: item.advisor,

      status: item.status,
    });

    setOpen(true);
  }

  // Delete

  function deleteClass() {
    setClasses(classes.filter((item) => item.id !== deleteId));

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
            Class Management
          </h1>

          <p
            className="
mt-2
text-gray-500
"
          >
            Manage university classes
          </p>
        </div>

        <Button onClick={openAdd}>+ Add Class</Button>
      </div>

      <Card>
        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search class..."
          />
        </div>

        <ClassTable
          classes={filteredClasses}
          onEdit={editClass}
          onDelete={(id) => setDeleteId(id)}
        />
      </Card>

      <ClassModal
        open={open}
        onClose={() => setOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={saveClass}
        editMode={editId !== null}
      />

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Class?"
        message="This class will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={deleteClass}
      />
    </div>
  );
}
