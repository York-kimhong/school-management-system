import DashboardCard from "@/components/DashboardCard";
import RecentActivities from "@/components/RecentActivities";
import RecentStudents from "@/components/RecentStudents";
import StudentChart from "@/components/StudentChart";

import {
  FaBook,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaUserGraduate,
} from "react-icons/fa";

export default function DashboardPage() {
  const dashboardStats = {
    students: 500,
    teachers: 50,
    courses: 30,
    attendance: 95,
  };

  const dashboardCards = [
    {
      title: "Students",
      value: dashboardStats.students.toString(),
      icon: <FaUserGraduate />,
      change: "+15 this month",
    },

    {
      title: "Teachers",
      value: dashboardStats.teachers.toString(),
      icon: <FaChalkboardTeacher />,
      change: "+2 this month",
    },

    {
      title: "Courses",
      value: dashboardStats.courses.toString(),
      icon: <FaBook />,
      change: "+3 this semester",
    },

    {
      title: "Attendance",
      value: `${dashboardStats.attendance}%`,
      icon: <FaClipboardCheck />,
      change: "+2% today",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>

        <p className="mt-2 text-gray-500">
          Manage your school management system from here.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
      >
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            value={card.value}
            icon={card.icon}
            change={card.change}
          />
        ))}
      </div>

      {/* Chart + Activity */}
      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-6
      "
      >
        <div className="xl:col-span-2">
          <StudentChart />
        </div>

        <RecentActivities />
      </div>

      {/* Recent Students */}

      <RecentStudents />
    </div>
  );
}
