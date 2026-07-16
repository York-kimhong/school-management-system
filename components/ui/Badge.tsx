import { ReactNode } from "react";

type BadgeColor = "green" | "red" | "yellow" | "blue" | "gray" | "purple";

type BadgeProps = {
  children: ReactNode;
  color?: BadgeColor;
};

export default function Badge({ children, color = "blue" }: BadgeProps) {
  const colors = {
    green: "bg-green-100 text-green-700",

    red: "bg-red-100 text-red-700",

    yellow: "bg-yellow-100 text-yellow-700",

    blue: "bg-blue-100 text-blue-700",

    gray: "bg-gray-100 text-gray-700",

    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-sm
        font-medium
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}
