"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import CourseForm from "./CourseForm";

type CourseFormData = {
  courseCode: string;

  courseName: string;

  faculty: string;

  department: string;

  credit: string;

  teacher: string;

  semester: string;

  status: string;
};

type Props = {
  open: boolean;

  onClose: () => void;

  form: CourseFormData;

  setForm: (form: CourseFormData) => void;

  onSubmit: () => void;

  editMode?: boolean;
};

export default function CourseModal({
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
      title={editMode ? "Edit Course" : "Add Course"}
      footer={
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={onSubmit}>{editMode ? "Update" : "Save"}</Button>
        </div>
      }
    >
      <CourseForm
        form={form}
        setForm={setForm}
        onSubmit={onSubmit}
        buttonText={editMode ? "Update Course" : "Add Course"}
      />
    </Modal>
  );
}
