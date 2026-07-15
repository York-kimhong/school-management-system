import DashboardCard from "@/components/DashboardCard";
import StudentChart from "@/components/StudentChart";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";


export default function DashboardPage() {

  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

      <p className="text-gray-600 mt-2">Manage your school system here.</p>

      <div
        className="grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-6 
        mt-8"
      >
        <DashboardCard title="Students" value="500" icon={<FaUserGraduate />} />

        <DashboardCard
          title="Teachers"
          value="50"
          icon={<FaChalkboardTeacher />}
        />

        <DashboardCard title="Courses" value="30" icon={<FaBook />} />

        
      </div>
      

      {/* <StudentChart /> */}
    </div>
  );
}