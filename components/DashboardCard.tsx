"use client";

import { motion } from "framer-motion";

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export default function DashboardCard({
  title,
  value,
  icon,
}: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
        flex
        items-center
        justify-between
        border
        border-gray-100
      "
    >
      <div>
        <p className="text-gray-500 text-sm">{title}</p>

        <h2 className="text-4xl font-bold mt-2 text-gray-900">{value}</h2>
      </div>

      <div
        className="
          w-14
          h-14
          rounded-xl
          bg-blue-100
          flex
          items-center
          justify-center
          text-blue-600
          text-3xl
        "
      >
        {icon}
      </div>
    </motion.div>
  );
}
