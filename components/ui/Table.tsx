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

rounded-3xl

"
    >
      <table
        className="

w-full

border-separate

border-spacing-y-3

text-left

"
      >
        {/* HEADER */}

        <thead
          className="

text-gray-500

"
        >
          <tr>
            {columns.map((column) => (
              <th
                key={column.title}
                className="

px-6

py-3

text-xs

font-bold

uppercase

tracking-wider

"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="

px-6

py-10

text-center

text-gray-400

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

bg-white/70

backdrop-blur-md

shadow-sm

hover:shadow-md

hover:-translate-y-1

transition-all

duration-200

"
              >
                {columns.map((column) => (
                  <td
                    key={column.title}
                    className="

px-6

py-5

text-sm

text-gray-700

first:rounded-l-2xl

last:rounded-r-2xl

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
