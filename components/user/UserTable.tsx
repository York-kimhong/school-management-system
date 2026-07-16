"use client";

import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { FaEdit, FaTrash } from "react-icons/fa";

type User = {
  id: number;

  name: string;

  email: string;

  role: string;

  department: string;

  status: string;
};

type Props = {
  users: User[];

  onEdit: (item: User) => void;

  onDelete: (id: number) => void;
};

export default function UserTable({
  users,

  onEdit,

  onDelete,
}: Props) {
  const columns = [
    {
      key: "name",

      title: "User",

      render: (item: User) => (
        <div className="flex items-center gap-3">
          <div
            className="

w-11

h-11

rounded-2xl

bg-gradient-to-br

from-blue-400

to-indigo-500

text-white

flex

items-center

justify-center

font-bold

shadow-md

"
          >
            {item.name.charAt(0)}
          </div>

          <div>
            <p
              className="
font-semibold
text-gray-800
"
            >
              {item.name}
            </p>

            <p
              className="
text-xs
text-gray-400
"
            >
              ID #{item.id}
            </p>
          </div>
        </div>
      ),
    },

    {
      key: "email",

      title: "Email",
    },

    {
      key: "role",

      title: "Role",

      render: (item: User) => (
        <span
          className="

px-3

py-1.5


rounded-full


text-xs


font-semibold


bg-purple-50


text-purple-600

"
        >
          {item.role}
        </span>
      ),
    },

    {
      key: "department",

      title: "Department",
    },

    {
      key: "status",

      title: "Status",

      render: (item: User) => (
        <Badge color={item.status === "Active" ? "green" : "red"}>
          {item.status}
        </Badge>
      ),
    },

    {
      key: "action",

      title: "Action",

      render: (item: User) => (
        <div
          className="
flex
gap-2
"
        >
          <button
            onClick={() => onEdit(item)}
            className="

w-10

h-10


rounded-xl


bg-blue-50


text-blue-600


flex

items-center

justify-center



hover:bg-blue-100



transition

"
          >
            <FaEdit />
          </button>

          <button
            onClick={() => onDelete(item.id)}
            className="

w-10

h-10


rounded-xl


bg-red-50


text-red-500


flex

items-center

justify-center



hover:bg-red-100



transition

"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div
      className="

rounded-3xl


bg-white/50


backdrop-blur-xl


border

border-white


shadow-lg


overflow-hidden


"
    >
      <Table columns={columns} data={users} />
    </div>
  );
}
