"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type FacultyFormData = {
  name: string;
  code: string;
  dean: string;
  email: string;
  phone: string;
  status: string;
};

type FacultyFormProps = {
  form: FacultyFormData;

  setForm: (form: FacultyFormData) => void;

  onSubmit: () => void;

  buttonText?: string;
};

export default function FacultyForm({
  form,

  setForm,

  onSubmit,

  buttonText = "Save Faculty",
}: FacultyFormProps) {
  return (
    <div className="space-y-4">
      <Input
        label="Faculty Name"
        placeholder="Enter faculty name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,

            name: e.target.value,
          })
        }
      />

      <Input
        label="Faculty Code"
        placeholder="Example: FE"
        value={form.code}
        onChange={(e) =>
          setForm({
            ...form,

            code: e.target.value,
          })
        }
      />

      <Input
        label="Dean"
        placeholder="Dean name"
        value={form.dean}
        onChange={(e) =>
          setForm({
            ...form,

            dean: e.target.value,
          })
        }
      />

      <Input
        label="Email"
        type="email"
        placeholder="faculty@email.com"
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

      <div>
        <label
          className="
mb-2
block
text-sm
font-medium
text-gray-700
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
rounded-xl
border
border-gray-300
px-4
py-3
outline-none
focus:border-blue-500
"
        >
          <option value="Active">Active</option>

          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <Button onClick={onSubmit} fullWidth>
        {buttonText}
      </Button>
    </div>
  );
}
