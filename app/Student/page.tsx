import StudentTable from "@/components/StudentTable";

export default function StudentsPage() {
  return (
    <div>
      <h1
        className="
        text-3xl
        font-bold
      "
      >
        Students
      </h1>

      <p
        className="
        text-gray-500
        mt-2
      "
      >
        Manage all students here.
      </p>

      <StudentTable />
    </div>
  );
}
