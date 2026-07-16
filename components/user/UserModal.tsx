"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import UserForm from "./UserForm";

type UserFormData = {
  name: string;

  email: string;

  password: string;

  role: string;

  department: string;

  status: string;
};

type Props = {
  open: boolean;

  onClose: () => void;

  form: UserFormData;

  setForm: (form: UserFormData) => void;

  onSubmit: () => void;

  editMode?: boolean;
};

export default function UserModal({
  open,

  onClose,

  form,

  setForm,

  onSubmit,

  editMode = false,
}: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={editMode ? "Edit User" : "Add User"}
      footer={
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={onSubmit}>{editMode ? "Update" : "Save"}</Button>
        </div>
      }
    >
      <UserForm
        form={form}
        setForm={setForm}
        onSubmit={onSubmit}
        buttonText={editMode ? "Update User" : "Add User"}
      />
    </Modal>
  );
}
