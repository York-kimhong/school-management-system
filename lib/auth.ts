import { cookies } from "next/headers";

type User = {
  id: number;

  name: string;

  email: string;

  password: string;

  role: string;
};

const users: User[] = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@university.com",
    password: "123456",
    role: "Admin",
  },

  {
    id: 2,
    name: "Officer User",
    email: "officer@university.com",
    password: "123456",
    role: "Officer",
  },

  {
    id: 3,
    name: "Teacher User",
    email: "teacher@university.com",
    password: "123456",
    role: "Teacher",
  },

  {
    id: 4,
    name: "Student User",
    email: "student@university.com",
    password: "123456",
    role: "Student",
  },
];

export function login(email: string, password: string) {
  const user = users.find(
    (item) => item.email === email && item.password === password,
  );

  return user ?? null;
}

export async function createSession(user: User) {
  const cookieStore = await cookies();

  cookieStore.set(
    "user",

    JSON.stringify({
      id: user.id,

      name: user.name,

      role: user.role,
    }),

    {
      httpOnly: true,

      secure: false,

      maxAge: 60 * 60 * 24,
    },
  );
}

export async function getSession() {
  const cookieStore = await cookies();

  const session = cookieStore.get("user");

  if (!session) {
    return null;
  }

  return JSON.parse(session.value);
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("user");
}
