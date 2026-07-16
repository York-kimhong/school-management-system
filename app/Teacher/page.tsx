"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

import TeacherTable from "@/components/teacher/TeacherTable";
import TeacherModal from "@/components/teacher/TeacherModal";

type Teacher = {
  id: number;

  teacherId: string;

  name: string;

  gender: string;

  email: string;

  phone: string;

  faculty: string;

  department: string;

  degree: string;

  specialization: string;

  subject: string;

  status: string;
};

const initialTeachers: Teacher[] = [
  {
    id: 1,

    teacherId: "TC001",

    name: "Dr. Sok Dara",

    gender: "Male",

    email: "dara@university.edu",

    phone: "012345678",

    faculty: "Faculty of Engineering",

    department: "Information Technology",

    degree: "PhD",

    specialization: "Software Engineering",

    subject: "Database System",

    status: "Active",
  },

  {
    id: 2,

    teacherId: "TC002",

    name: "Prof. Kim Rina",

    gender: "Female",

    email: "rina@university.edu",

    phone: "098765432",

    faculty: "Faculty of Science",

    department: "Computer Science",

    degree: "Master",

    specialization: "Artificial Intelligence",

    subject: "Machine Learning",

    status: "Active",
  },
];

export default function TeacherPage() {
  const [teachers, setTeachers] = useState(initialTeachers);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState({
    teacherId: "",

    name: "",

    gender: "",

    email: "",

    phone: "",

    faculty: "",

    department: "",

    degree: "",

    specialization: "",

    subject: "",

    status: "Active",
  });

  // Search

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name

      .toLowerCase()

      .includes(search.toLowerCase()),
  );

  // Add

  function openAdd() {
    setEditId(null);

    setForm({
      teacherId: "",

      name: "",

      gender: "",

      email: "",

      phone: "",

      faculty: "",

      department: "",

      degree: "",

      specialization: "",

      subject: "",

      status: "Active",
    });

    setOpen(true);
  }

  // Save

  function saveTeacher() {
    if (editId) {
      setTeachers(
        teachers.map((teacher) =>
          teacher.id === editId
            ? {
                ...teacher,

                ...form,
              }
            : teacher,
        ),
      );
    } else {
      const newTeacher = {
        id: Date.now(),

        ...form,
      };

      setTeachers([...teachers, newTeacher]);
    }

    setOpen(false);
  }

  // Edit

  function editTeacher(teacher: Teacher) {
    setEditId(teacher.id);

    setForm({
      teacherId: teacher.teacherId,

      name: teacher.name,

      gender: teacher.gender,

      email: teacher.email,

      phone: teacher.phone,

      faculty: teacher.faculty,

      department: teacher.department,

      degree: teacher.degree,

      specialization: teacher.specialization,

      subject: teacher.subject,

      status: teacher.status,
    });

    setOpen(true);
  }

  // Delete

  function deleteTeacher() {
    setTeachers(teachers.filter((teacher) => teacher.id !== deleteId));

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
            Teacher Management
          </h1>

          <p
            className="
mt-2
text-gray-500
"
          >
            Manage university teachers
          </p>
        </div>

        <Button onClick={openAdd}>+ Add Teacher</Button>
      </div>

      <Card>
        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search teacher..."
          />
        </div>

        <TeacherTable
          teachers={filteredTeachers}
          onEdit={editTeacher}
          onDelete={(id) => setDeleteId(id)}
        />
      </Card>

      <TeacherModal
        open={open}
        onClose={() => setOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={saveTeacher}
        editMode={editId !== null}
      />

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Teacher?"
        message="This teacher will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={deleteTeacher}
      />
    </div>
  );
}
