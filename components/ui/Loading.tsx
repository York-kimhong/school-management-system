type LoadingProps = {
  text?: string;
  fullScreen?: boolean;
};

export default function Loading({
  text = "Loading...",
  fullScreen = false,
}: LoadingProps) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-4

        ${fullScreen ? "min-h-screen" : "py-10"}
      `}
    >
      {/* Spinner */}

      <div
        className="
          h-10
          w-10
          animate-spin
          rounded-full
          border-4
          border-gray-200
          border-t-blue-600
        "
      />

      {/* Text */}

      <p
        className="
          text-gray-500
          text-sm
        "
      >
        {text}
      </p>
    </div>
  );
}
