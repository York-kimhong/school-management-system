"use client";

import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type Student = {
  id: number;

  studentId: string;

  name: string;

  gender: string;

  faculty: string;

  department: string;

  className: string;

  year: string;

  status: string;
};

type Props = {
  students: Student[];

  onEdit: (student: Student) => void;

  onDelete: (id: number) => void;
};

export default function StudentTable({
  students,

  onEdit,

  onDelete,
}: Props) {
  const columns = [
    {
      key: "studentId",
      title: "Student ID",
    },

    {
      key: "name",
      title: "Name",
    },

    {
      key: "faculty",
      title: "Faculty",
    },

    {
      key: "department",
      title: "Department",
    },

    {
      key: "className",
      title: "Class",
    },

    {
      key: "year",
      title: "Year",
    },

    {
      key: "status",

      title: "Status",

      render: (student: Student) => (
        <Badge color={student.status === "Active" ? "green" : "red"}>
          {student.status}
        </Badge>
      ),
    },

    {
      key: "action",

      title: "Action",

      render: (student: Student) => (
        <div className="flex gap-2">
          <Button variant="warning" onClick={() => onEdit(student)}>
            Edit
          </Button>

          <Button variant="danger" onClick={() => onDelete(student.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={students} />;
}
