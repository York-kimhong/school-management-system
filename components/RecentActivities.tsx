import {
  FaUserPlus,
  FaBook,
  FaClipboardCheck,
  FaUserGraduate,
} from "react-icons/fa";

const activities = [
  {
    title: "New Student Registered",
    description: "John Smith joined Class 10A",
    time: "2 min ago",
    icon: <FaUserGraduate />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Course Added",
    description: "React Fundamentals",
    time: "20 min ago",
    icon: <FaBook />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Attendance Updated",
    description: "Attendance reached 95%",
    time: "1 hour ago",
    icon: <FaClipboardCheck />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Teacher Added",
    description: "Emma Wilson joined",
    time: "Today",
    icon: <FaUserPlus />,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-full">
      <h2 className="text-xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex gap-4 items-start"
          >
            <div
              className={`
                w-12
                h-12
                rounded-xl
                flex
                items-center
                justify-center
                text-lg
                ${activity.color}
              `}
            >
              {activity.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {activity.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {activity.description}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}