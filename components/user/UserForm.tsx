"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type UserFormData = {
  name: string;

  email: string;

  password: string;

  role: string;

  department: string;

  status: string;
};

type Props = {
  form: UserFormData;

  setForm: (form: UserFormData) => void;

  onSubmit: () => void;

  buttonText?: string;
};

export default function UserForm({
  form,

  setForm,

  onSubmit,

  buttonText = "Save User",
}: Props) {
  return (
    <div className="space-y-5">
      {/* Account Information */}

      <h3 className="text-lg font-bold text-gray-800">Account Information</h3>

      <Input
        label="Full Name"
        placeholder="Enter full name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,

            name: e.target.value,
          })
        }
      />

      <Input
        label="Email"
        type="email"
        placeholder="example@email.com"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,

            email: e.target.value,
          })
        }
      />

      <Input
        label="Password"
        type="password"
        placeholder="********"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,

            password: e.target.value,
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
          Role
        </label>

        <select
          value={form.role}
          onChange={(e) =>
            setForm({
              ...form,

              role: e.target.value,
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
          <option value="">Select Role</option>

          <option>Admin</option>

          <option>Officer</option>

          <option>Teacher</option>

          <option>Student</option>
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

          <option>Administration</option>

          <option>Information Technology</option>

          <option>Computer Science</option>

          <option>Business</option>
        </select>
      </div>

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
