"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import TeacherForm from "./TeacherForm";

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
  open: boolean;

  onClose: () => void;

  form: TeacherFormData;

  setForm: (form: TeacherFormData) => void;

  onSubmit: () => void;

  editMode?: boolean;
};

export default function TeacherModal({
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
      title={editMode ? "Edit Teacher" : "Add Teacher"}
      footer={
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={onSubmit}>{editMode ? "Update" : "Save"}</Button>
        </div>
      }
    >
      <TeacherForm
        form={form}
        setForm={setForm}
        onSubmit={onSubmit}
        buttonText={editMode ? "Update Teacher" : "Add Teacher"}
      />
    </Modal>
  );
}
