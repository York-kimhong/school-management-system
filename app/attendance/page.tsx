"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

import AttendanceTable from "@/components/attendance/AttendanceTable";
import AttendanceModal from "@/components/attendance/AttendanceModal";

type Attendance = {
  id: number;

  student: string;

  className: string;

  course: string;

  date: string;

  status: string;

  note: string;
};

const initialAttendances: Attendance[] = [
  {
    id: 1,

    student: "York Kimhong",

    className: "IT3A",

    course: "Database System",

    date: "2026-07-16",

    status: "Present",

    note: "Good participation",
  },

  {
    id: 2,

    student: "Sok Dara",

    className: "CS2B",

    course: "Data Structure",

    date: "2026-07-16",

    status: "Late",

    note: "Arrived 15 minutes late",
  },
];

export default function AttendancePage() {
  const [attendances, setAttendances] = useState(initialAttendances);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState({
    student: "",

    className: "",

    course: "",

    date: "",

    status: "Present",

    note: "",
  });

  // Search

  const filteredAttendances = attendances.filter((item) =>
    item.student

      .toLowerCase()

      .includes(search.toLowerCase()),
  );

  // Add

  function openAdd() {
    setEditId(null);

    setForm({
      student: "",

      className: "",

      course: "",

      date: "",

      status: "Present",

      note: "",
    });

    setOpen(true);
  }

  // Save

  function saveAttendance() {
    if (editId) {
      setAttendances(
        attendances.map((item) =>
          item.id === editId
            ? {
                ...item,

                ...form,
              }
            : item,
        ),
      );
    } else {
      const newAttendance = {
        id: Date.now(),

        ...form,
      };

      setAttendances([...attendances, newAttendance]);
    }

    setOpen(false);
  }

  // Edit

  function editAttendance(item: Attendance) {
    setEditId(item.id);

    setForm({
      student: item.student,

      className: item.className,

      course: item.course,

      date: item.date,

      status: item.status,

      note: item.note,
    });

    setOpen(true);
  }

  // Delete

  function deleteAttendance() {
    setAttendances(attendances.filter((item) => item.id !== deleteId));

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
            Attendance Management
          </h1>

          <p
            className="
mt-2
text-gray-500
"
          >
            Track student attendance records
          </p>
        </div>

        <Button onClick={openAdd}>+ Add Attendance</Button>
      </div>

      <Card>
        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search student..."
          />
        </div>

        <AttendanceTable
          attendances={filteredAttendances}
          onEdit={editAttendance}
          onDelete={(id) => setDeleteId(id)}
        />
      </Card>

      <AttendanceModal
        open={open}
        onClose={() => setOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={saveAttendance}
        editMode={editId !== null}
      />

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Attendance?"
        message="This attendance record will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={deleteAttendance}
      />
    </div>
  );
}
