import { ReactNode } from "react";
import { FaInbox } from "react-icons/fa";


type EmptyStateProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
};


export default function EmptyState({
  title = "No data found",
  description = "There is nothing to display here yet.",
  action,
}: EmptyStateProps) {

  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-12
        text-center
      "
    >

      {/* Icon */}

      <div
        className="
          mb-4
          rounded-full
          bg-gray-100
          p-5
        "
      >

        <FaInbox
          className="
            text-3xl
            text-gray-400
          "
        />

      </div>


      {/* Title */}

      <h3
        className="
          text-lg
          font-semibold
          text-gray-800
        "
      >

        {title}

      </h3>


      {/* Description */}

      <p
        className="
          mt-2
          max-w-sm
          text-sm
          text-gray-500
        "
      >

        {description}

      </p>


      {/* Action */}

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}


    </div>
  );
}