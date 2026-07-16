"use client";

import { FaExclamationTriangle } from "react-icons/fa";

type ConfirmDialogProps = {
  open: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDialog({
  open,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
      >
        {/* Icon */}

        <div
          className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-red-100
          "
        >
          <FaExclamationTriangle
            className="
              text-2xl
              text-red-600
            "
          />
        </div>

        {/* Content */}

        <div className="mt-5 text-center">
          <h2
            className="
              text-xl
              font-bold
              text-gray-800
            "
          >
            {title}
          </h2>

          <p
            className="
              mt-2
              text-gray-500
            "
          >
            {message}
          </p>
        </div>

        {/* Buttons */}

        <div
          className="
            mt-6
            flex
            justify-center
            gap-3
          "
        >
          <button
            onClick={onCancel}
            className="
              rounded-xl
              bg-gray-200
              px-5
              py-3
              font-medium
              text-gray-700
              hover:bg-gray-300
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="
              rounded-xl
              bg-red-600
              px-5
              py-3
              font-medium
              text-white
              hover:bg-red-700
            "
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
