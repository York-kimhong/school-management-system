import { ReactNode } from "react";

type TableColumn<T> = {
  key: keyof T | string;
  title: string;
  render?: (item: T) => ReactNode;
};

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  emptyMessage?: string;
};

export default function Table<T>({
  columns,
  data,
  emptyMessage = "No data found",
}: TableProps<T>) {
  return (
    <div
      className="
        overflow-x-auto
        rounded-2xl
        border
        border-gray-200
      "
    >
      <table
        className="
          w-full
          text-left
        "
      >
        {/* Header */}

        <thead
          className="
            bg-gray-50
            text-gray-600
          "
        >
          <tr>
            {columns.map((column) => (
              <th
                key={column.title}
                className="
                  px-6
                  py-4
                  text-sm
                  font-semibold
                "
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="
                  px-6
                  py-8
                  text-center
                  text-gray-500
                "
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                key={index}
                className="
                  border-t
                  hover:bg-gray-50
                  transition
                "
              >
                {columns.map((column) => (
                  <td
                    key={column.title}
                    className="
                      px-6
                      py-4
                      text-sm
                      text-gray-700
                    "
                  >
                    {column.render
                      ? column.render(item)
                      : String(item[column.key as keyof T])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
