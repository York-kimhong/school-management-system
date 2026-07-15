const students = [
  {
    id: 1,
    name: "John Smith",
    class: "10A",
    email: "john@gmail.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Emma Watson",
    class: "11B",
    email: "emma@gmail.com",
    status: "Active",
  },
  {
    id: 3,
    name: "David Kim",
    class: "12A",
    email: "david@gmail.com",
    status: "Pending",
  },
  {
    id: 4,
    name: "Sophia Lee",
    class: "9A",
    email: "sophia@gmail.com",
    status: "Active",
  },
];

export default function RecentStudents() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Recent Students
        </h2>

        <button className="text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-gray-500">
            <th className="pb-3">Name</th>
            <th>Class</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="py-4 font-medium">
                {student.name}
              </td>

              <td>{student.class}</td>

              <td>{student.email}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    student.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}