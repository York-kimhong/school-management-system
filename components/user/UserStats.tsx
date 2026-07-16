import {
  FaUsers,
  FaUserShield,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUserCheck,
} from "react-icons/fa";

type User = {
  role: string;

  status: string;
};

type Props = {
  users: User[];
};

export default function UserStats({ users }: Props) {
  const totalUsers = users.length;

  const admins = users.filter((user) => user.role === "Admin").length;

  const teachers = users.filter((user) => user.role === "Teacher").length;

  const students = users.filter((user) => user.role === "Student").length;

  const activeUsers = users.filter((user) => user.status === "Active").length;

  const cards = [
    {
      title: "Total Users",

      value: totalUsers,

      description: "All registered accounts",

      icon: <FaUsers />,

      gradient: "from-blue-500 to-blue-600",
    },

    {
      title: "Admins",

      value: admins,

      description: "System administrators",

      icon: <FaUserShield />,

      gradient: "from-purple-500 to-purple-600",
    },

    {
      title: "Teachers",

      value: teachers,

      description: "Teaching staff",

      icon: <FaChalkboardTeacher />,

      gradient: "from-green-500 to-green-600",
    },

    {
      title: "Students",

      value: students,

      description: "Enrolled students",

      icon: <FaUserGraduate />,

      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div
      className="
grid

grid-cols-1

sm:grid-cols-2

xl:grid-cols-4

gap-6

"
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="
bg-white

rounded-2xl

p-6

border

border-gray-100

shadow-sm

hover:shadow-lg

transition

duration-300

"
        >
          <div
            className="
flex

items-center

justify-between

"
          >
            <div>
              <p
                className="
text-sm

text-gray-500

font-medium

"
              >
                {card.title}
              </p>

              <h2
                className="
text-3xl

font-bold

text-gray-800

mt-2

"
              >
                {card.value}
              </h2>

              <p
                className="
text-xs

text-gray-400

mt-2

"
              >
                {card.description}
              </p>
            </div>

            <div
              className={`

w-14

h-14

rounded-2xl

bg-gradient-to-br

${card.gradient}

text-white

flex

items-center

justify-center

text-2xl

shadow-lg

`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
