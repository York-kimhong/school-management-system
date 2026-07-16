"use client";

import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

type Props = {
  open: boolean;

  onClose: () => void;

  title: string;

  children: ReactNode;

  footer?: ReactNode;
};

export default function Modal({
  open,

  onClose,

  title,

  children,

  footer,
}: Props) {
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

p-4

"
    >
      {/* Overlay */}

      <div
        onClick={onClose}
        className="
absolute

inset-0

bg-black/40

backdrop-blur-sm

"
      />

      {/* Modal Box */}

      <div
        className="

relative

w-full

max-w-xl


max-h-[90vh]


bg-white/80

backdrop-blur-xl


border

border-white/50


rounded-3xl


shadow-2xl


flex

flex-col

overflow-hidden


"
      >
        {/* Header */}

        <div
          className="

flex

items-center

justify-between


px-6

py-5


border-b

border-gray-200/50

"
        >
          <h2
            className="

text-xl

font-bold

text-gray-800

"
          >
            {title}
          </h2>

          <button
            onClick={onClose}
            className="

text-gray-500

hover:text-red-500

transition

"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}

        <div
          className="

p-6

overflow-y-auto

flex-1


"
        >
          {children}
        </div>

        {/* Footer */}

        {footer && (
          <div
            className="

px-6

py-4


border-t

border-gray-200/50


flex

justify-end

gap-3

bg-white/40

"
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
