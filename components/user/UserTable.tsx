"use client";

import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

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

      title: "Name",
    },

    {
      key: "email",

      title: "Email",
    },

    {
      key: "role",

      title: "Role",
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
        <div className="flex gap-2">
          <Button variant="warning" onClick={() => onEdit(item)}>
            Edit
          </Button>

          <Button variant="danger" onClick={() => onDelete(item.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={users} />;
}
