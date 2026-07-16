"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type StudentFormData = {
  studentId: string;

  name: string;

  gender: string;

  dob: string;

  phone: string;

  email: string;

  faculty: string;

  department: string;

  className: string;

  year: string;

  status: string;
};

type Props = {
  form: StudentFormData;

  setForm: (form: StudentFormData) => void;

  onSubmit: () => void;

  buttonText?: string;
};

export default function StudentForm({
  form,

  setForm,

  onSubmit,

  buttonText = "Save Student",
}: Props) {
  return (
    <div className="space-y-5">
      {/* Personal Information */}

      <h3 className="text-lg font-bold text-gray-800">Personal Information</h3>

      <Input
        label="Full Name"
        placeholder="Enter student name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,

            name: e.target.value,
          })
        }
      />

      <div>
        <label
          className="
block
mb-2
text-sm
font-medium
"
        >
          Gender
        </label>

        <select
          value={form.gender}
          onChange={(e) =>
            setForm({
              ...form,

              gender: e.target.value,
            })
          }
          className="
w-full
border
rounded-xl
px-4
py-3
"
        >
          <option value="">Select Gender</option>

          <option>Male</option>

          <option>Female</option>
        </select>
      </div>

      <Input
        label="Date of Birth"
        type="date"
        value={form.dob}
        onChange={(e) =>
          setForm({
            ...form,

            dob: e.target.value,
          })
        }
      />

      <Input
        label="Phone"
        placeholder="012345678"
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,

            phone: e.target.value,
          })
        }
      />

      <Input
        label="Email"
        type="email"
        placeholder="student@email.com"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,

            email: e.target.value,
          })
        }
      />

      {/* Academic Information */}

      <h3 className="text-lg font-bold text-gray-800 mt-6">
        Academic Information
      </h3>

      <Input
        label="Student ID"
        placeholder="ST2026001"
        value={form.studentId}
        onChange={(e) =>
          setForm({
            ...form,

            studentId: e.target.value,
          })
        }
      />

      <div>
        <label
          className="
block
mb-2
text-sm
font-medium
"
        >
          Faculty
        </label>

        <select
          value={form.faculty}
          onChange={(e) =>
            setForm({
              ...form,

              faculty: e.target.value,
            })
          }
          className="
w-full
border
rounded-xl
px-4
py-3
"
        >
          <option value="">Select Faculty</option>

          <option>Faculty of Engineering</option>

          <option>Faculty of Science</option>

          <option>Faculty of Business</option>
        </select>
      </div>

      <div>
        <label
          className="
block
mb-2
text-sm
font-medium
"
        >
          Department
        </label>

        <select
          value={form.department}
          onChange={(e) =>
            setForm({
              ...form,

              department: e.target.value,
            })
          }
          className="
w-full
border
rounded-xl
px-4
py-3
"
        >
          <option value="">Select Department</option>

          <option>Information Technology</option>

          <option>Computer Science</option>

          <option>Accounting</option>
        </select>
      </div>

      <Input
        label="Class"
        placeholder="IT-3A"
        value={form.className}
        onChange={(e) =>
          setForm({
            ...form,

            className: e.target.value,
          })
        }
      />

      <Input
        label="Academic Year"
        placeholder="2026"
        value={form.year}
        onChange={(e) =>
          setForm({
            ...form,

            year: e.target.value,
          })
        }
      />

      {/* Status */}

      <div>
        <label
          className="
block
mb-2
text-sm
font-medium
"
        >
          Status
        </label>

        <select
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,

              status: e.target.value,
            })
          }
          className="
w-full
border
rounded-xl
px-4
py-3
"
        >
          <option>Active</option>

          <option>Graduated</option>

          <option>Suspended</option>
        </select>
      </div>

      <Button onClick={onSubmit} fullWidth>
        {buttonText}
      </Button>
    </div>
  );
}
