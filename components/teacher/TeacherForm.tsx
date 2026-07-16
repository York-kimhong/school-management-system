"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type TeacherFormData = {
  teacherId: string;

  name: string;

  gender: string;

  email: string;

  phone: string;

  faculty: string;

  department: string;

  degree: string;

  specialization: string;

  subject: string;

  status: string;
};

type Props = {
  form: TeacherFormData;

  setForm: (form: TeacherFormData) => void;

  onSubmit: () => void;

  buttonText?: string;
};

export default function TeacherForm({
  form,

  setForm,

  onSubmit,

  buttonText = "Save Teacher",
}: Props) {
  return (
    <div className="space-y-5">
      {/* Personal Information */}

      <h3 className="text-lg font-bold text-gray-800">Personal Information</h3>

      <Input
        label="Full Name"
        placeholder="Enter teacher name"
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
        label="Email"
        type="email"
        placeholder="teacher@university.edu"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,

            email: e.target.value,
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

      {/* Academic Information */}

      <h3
        className="
text-lg
font-bold
text-gray-800
mt-6
"
      >
        Academic Information
      </h3>

      <Input
        label="Teacher ID"
        placeholder="TC001"
        value={form.teacherId}
        onChange={(e) =>
          setForm({
            ...form,

            teacherId: e.target.value,
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
        label="Degree"
        placeholder="PhD / Master / Bachelor"
        value={form.degree}
        onChange={(e) =>
          setForm({
            ...form,

            degree: e.target.value,
          })
        }
      />

      <Input
        label="Specialization"
        placeholder="Software Engineering"
        value={form.specialization}
        onChange={(e) =>
          setForm({
            ...form,

            specialization: e.target.value,
          })
        }
      />

      {/* Teaching Information */}

      <h3
        className="
text-lg
font-bold
text-gray-800
mt-6
"
      >
        Teaching Information
      </h3>

      <Input
        label="Subject Assigned"
        placeholder="Database System"
        value={form.subject}
        onChange={(e) =>
          setForm({
            ...form,

            subject: e.target.value,
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

          <option>Inactive</option>
        </select>
      </div>

      <Button onClick={onSubmit} fullWidth>
        {buttonText}
      </Button>
    </div>
  );
}
