type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-2
        mt-6
      "
    >
      {/* Previous */}

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="
          rounded-lg
          border
          px-4
          py-2
          text-sm
          disabled:cursor-not-allowed
          disabled:opacity-50
          hover:bg-gray-100
        "
      >
        Previous
      </button>

      {/* Pages */}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            rounded-lg
            px-4
            py-2
            text-sm
            transition

            ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "border hover:bg-gray-100"
            }

          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="
          rounded-lg
          border
          px-4
          py-2
          text-sm
          disabled:cursor-not-allowed
          disabled:opacity-50
          hover:bg-gray-100
        "
      >
        Next
      </button>
    </div>
  );
}
