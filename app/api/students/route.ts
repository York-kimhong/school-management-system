import { NextResponse } from "next/server";

let students = [
  {
    id: 1,
    name: "John Smith",
    email: "john@gmail.com",
    class: "10A",
  },
  {
    id: 2,
    name: "Anna Lee",
    email: "anna@gmail.com",
    class: "11B",
  },
];

// GET students

export async function GET() {
  return NextResponse.json(students);
}

// CREATE student

export async function POST(request: Request) {
  const body = await request.json();

  const newStudent = {
    id: Date.now(),

    ...body,
  };

  students.push(newStudent);

  return NextResponse.json(newStudent);
}

// UPDATE student

export async function PUT(request: Request) {
  const body = await request.json();

  students = students.map((student) =>
    student.id === body.id ? body : student,
  );

  return NextResponse.json(body);
}

// DELETE student

export async function DELETE(request: Request) {
  const { id } = await request.json();

  students = students.filter((student) => student.id !== id);

  return NextResponse.json({
    message: "Student deleted",
  });
}
