"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

import StudentTable from "@/components/student/StudentTable";
import StudentModal from "@/components/student/StudentModal";

type Student = {
  id: number;

  studentId: string;

  name: string;

  gender: string;

  dob: string;

  phone: string;

  email: string;

  faculty: string;

  department: string;

  className: string;

  year: string;

  status: string;
};

const initialStudents: Student[] = [
  {
    id: 1,

    studentId: "ST2026001",

    name: "York Kimhong",

    gender: "Male",

    dob: "2004-05-20",

    phone: "012345678",

    email: "kimhong@email.com",

    faculty: "Faculty of Engineering",

    department: "Information Technology",

    className: "IT-3A",

    year: "2026",

    status: "Active",
  },

  {
    id: 2,

    studentId: "ST2026002",

    name: "Sok Dara",

    gender: "Male",

    dob: "2004-08-10",

    phone: "098765432",

    email: "dara@email.com",

    faculty: "Faculty of Science",

    department: "Computer Science",

    className: "CS-3A",

    year: "2026",

    status: "Active",
  },
];

export default function StudentPage() {
  const [students, setStudents] = useState(initialStudents);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState({
    studentId: "",

    name: "",

    gender: "",

    dob: "",

    phone: "",

    email: "",

    faculty: "",

    department: "",

    className: "",

    year: "",

    status: "Active",
  });

  // Search

  const filteredStudents = students.filter((student) =>
    student.name

      .toLowerCase()

      .includes(search.toLowerCase()),
  );

  // Open Add

  function openAdd() {
    setEditId(null);

    setForm({
      studentId: "",

      name: "",

      gender: "",

      dob: "",

      phone: "",

      email: "",

      faculty: "",

      department: "",

      className: "",

      year: "",

      status: "Active",
    });

    setOpen(true);
  }

  // Save Student

  function saveStudent() {
    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId
            ? {
                ...student,

                ...form,
              }
            : student,
        ),
      );
    } else {
      const newStudent = {
        id: Date.now(),

        ...form,
      };

      setStudents([...students, newStudent]);
    }

    setOpen(false);
  }

  // Edit Student

  function editStudent(student: Student) {
    setEditId(student.id);

    setForm({
      studentId: student.studentId,

      name: student.name,

      gender: student.gender,

      dob: student.dob,

      phone: student.phone,

      email: student.email,

      faculty: student.faculty,

      department: student.department,

      className: student.className,

      year: student.year,

      status: student.status,
    });

    setOpen(true);
  }

  // Delete Student

  function deleteStudent() {
    setStudents(students.filter((student) => student.id !== deleteId));

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
            Student Management
          </h1>

          <p
            className="
mt-2
text-gray-500
"
          >
            Manage university students
          </p>
        </div>

        <Button onClick={openAdd}>+ Add Student</Button>
      </div>

      <Card>
        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search student..."
          />
        </div>

        <StudentTable
          students={filteredStudents}
          onEdit={editStudent}
          onDelete={(id) => setDeleteId(id)}
        />
      </Card>

      <StudentModal
        open={open}
        onClose={() => setOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={saveStudent}
        editMode={editId !== null}
      />

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Student?"
        message="This student will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={deleteStudent}
      />
    </div>
  );
}
