"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import AttendanceForm from "./AttendanceForm";

type AttendanceFormData = {
  student: string;

  className: string;

  course: string;

  date: string;

  status: string;

  note: string;
};

type Props = {
  open: boolean;

  onClose: () => void;

  form: AttendanceFormData;

  setForm: (form: AttendanceFormData) => void;

  onSubmit: () => void;

  editMode?: boolean;
};

export default function AttendanceModal({
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
      title={editMode ? "Edit Attendance" : "Add Attendance"}
      footer={
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={onSubmit}>{editMode ? "Update" : "Save"}</Button>
        </div>
      }
    >
      <AttendanceForm
        form={form}
        setForm={setForm}
        onSubmit={onSubmit}
        buttonText={editMode ? "Update Attendance" : "Add Attendance"}
      />
    </Modal>
  );
}
