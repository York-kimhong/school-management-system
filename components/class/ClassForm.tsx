"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type ClassFormData = {
  classCode: string;

  className: string;

  faculty: string;

  department: string;

  academicYear: string;

  advisor: string;

  status: string;
};

type Props = {
  form: ClassFormData;

  setForm: (form: ClassFormData) => void;

  onSubmit: () => void;

  buttonText?: string;
};

export default function ClassForm({
  form,

  setForm,

  onSubmit,

  buttonText = "Save Class",
}: Props) {
  return (
    <div className="space-y-5">
      {/* Class Information */}

      <h3 className="text-lg font-bold text-gray-800">Class Information</h3>

      <Input
        label="Class Code"
        placeholder="IT3A"
        value={form.classCode}
        onChange={(e) =>
          setForm({
            ...form,

            classCode: e.target.value,
          })
        }
      />

      <Input
        label="Class Name"
        placeholder="Information Technology 3A"
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
        value={form.academicYear}
        onChange={(e) =>
          setForm({
            ...form,

            academicYear: e.target.value,
          })
        }
      />

      {/* Organization */}

      <h3
        className="
text-lg
font-bold
text-gray-800
mt-6
"
      >
        Organization
      </h3>

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
        label="Class Advisor"
        placeholder="Dr. Sok Dara"
        value={form.advisor}
        onChange={(e) =>
          setForm({
            ...form,

            advisor: e.target.value,
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

          <option>Inactive</option>
        </select>
      </div>

      <Button onClick={onSubmit} fullWidth>
        {buttonText}
      </Button>
    </div>
  );
}
