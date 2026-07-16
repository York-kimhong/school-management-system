"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

import CourseTable from "@/components/course/CourseTable";
import CourseModal from "@/components/course/CourseModal";

type Course = {
  id: number;

  courseCode: string;

  courseName: string;

  faculty: string;

  department: string;

  credit: string;

  teacher: string;

  semester: string;

  status: string;
};

const initialCourses: Course[] = [
  {
    id: 1,

    courseCode: "IT301",

    courseName: "Database System",

    faculty: "Faculty of Engineering",

    department: "Information Technology",

    credit: "3",

    teacher: "Dr. Sok Dara",

    semester: "Semester 1",

    status: "Active",
  },

  {
    id: 2,

    courseCode: "CS201",

    courseName: "Data Structure",

    faculty: "Faculty of Science",

    department: "Computer Science",

    credit: "3",

    teacher: "Prof. Kim Rina",

    semester: "Semester 2",

    status: "Active",
  },
];

export default function CoursePage() {
  const [courses, setCourses] = useState(initialCourses);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState({
    courseCode: "",

    courseName: "",

    faculty: "",

    department: "",

    credit: "",

    teacher: "",

    semester: "",

    status: "Active",
  });

  // Search

  const filteredCourses = courses.filter((course) =>
    course.courseName

      .toLowerCase()

      .includes(search.toLowerCase()),
  );

  // Add

  function openAdd() {
    setEditId(null);

    setForm({
      courseCode: "",

      courseName: "",

      faculty: "",

      department: "",

      credit: "",

      teacher: "",

      semester: "",

      status: "Active",
    });

    setOpen(true);
  }

  // Save Course

  function saveCourse() {
    if (editId) {
      setCourses(
        courses.map((course) =>
          course.id === editId
            ? {
                ...course,

                ...form,
              }
            : course,
        ),
      );
    } else {
      const newCourse = {
        id: Date.now(),

        ...form,
      };

      setCourses([...courses, newCourse]);
    }

    setOpen(false);
  }

  // Edit

  function editCourse(course: Course) {
    setEditId(course.id);

    setForm({
      courseCode: course.courseCode,

      courseName: course.courseName,

      faculty: course.faculty,

      department: course.department,

      credit: course.credit,

      teacher: course.teacher,

      semester: course.semester,

      status: course.status,
    });

    setOpen(true);
  }

  // Delete

  function deleteCourse() {
    setCourses(courses.filter((course) => course.id !== deleteId));

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
            Course Management
          </h1>

          <p
            className="
mt-2
text-gray-500
"
          >
            Manage university courses
          </p>
        </div>

        <Button onClick={openAdd}>+ Add Course</Button>
      </div>

      <Card>
        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search course..."
          />
        </div>

        <CourseTable
          courses={filteredCourses}
          onEdit={editCourse}
          onDelete={(id) => setDeleteId(id)}
        />
      </Card>

      <CourseModal
        open={open}
        onClose={() => setOpen(false)}
        form={form}
        setForm={setForm}
        onSubmit={saveCourse}
        editMode={editId !== null}
      />

      <ConfirmDialog
        open={deleteId !== null}
        title="Delete Course?"
        message="This course will be permanently removed."
        onCancel={() => setDeleteId(null)}
        onConfirm={deleteCourse}
      />
    </div>
  );
}
