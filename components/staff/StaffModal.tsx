"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import StaffForm from "./StaffForm";

type StaffFormData = {
  name: string;

  position: string;

  department: string;

  email: string;

  phone: string;

  status: string;
};

type Props = {
  open: boolean;

  onClose: () => void;

  form: StaffFormData;

  setForm: (form: StaffFormData) => void;

  onSubmit: () => void;

  editMode?: boolean;
};

export default function StaffModal({
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
      title={editMode ? "Edit Staff" : "Add Staff"}
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={onSubmit}>{editMode ? "Update" : "Save"}</Button>
        </>
      }
    >
      <StaffForm
        form={form}
        setForm={setForm}
        onSubmit={onSubmit}
        buttonText={editMode ? "Update Staff" : "Add Staff"}
      />
    </Modal>
  );
}
