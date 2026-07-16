"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import EnrollmentForm from "./EnrollmentForm";

type EnrollmentFormData = {
  student: string;

  className: string;

  academicYear: string;

  semester: string;

  status: string;
};

type Props = {
  open: boolean;

  onClose: () => void;

  form: EnrollmentFormData;

  setForm: (form: EnrollmentFormData) => void;

  onSubmit: () => void;

  editMode?: boolean;
};

export default function EnrollmentModal({
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
      title={editMode ? "Edit Enrollment" : "Add Enrollment"}
      footer={
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={onSubmit}>{editMode ? "Update" : "Save"}</Button>
        </div>
      }
    >
      <EnrollmentForm
        form={form}
        setForm={setForm}
        onSubmit={onSubmit}
        buttonText={editMode ? "Update Enrollment" : "Add Enrollment"}
      />
    </Modal>
  );
}
