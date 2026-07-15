import { ReactNode } from "react";
import { FaArrowUp } from "react-icons/fa";

type DashboardCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  change?: string;
};


export default function DashboardCard({
  title,
  value,
  icon,
  change,
}: DashboardCardProps) {


  return (

    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl
      "
    >


      {/* Top section */}

      <div
        className="
          flex
          justify-between
          items-center
        "
      >


        {/* Text */}

        <div>

          <p
            className="
              text-gray-500
              text-sm
              font-medium
            "
          >
            {title}
          </p>


          <h2
            className="
              text-3xl
              font-bold
              mt-2
              text-gray-800
            "
          >
            {value}
          </h2>


        </div>





        {/* Icon */}

        <div
          className="
            w-14
            h-14

            rounded-xl

            bg-blue-100
            text-blue-600

            flex
            items-center
            justify-center

            text-2xl
          "
        >
          {icon}

        </div>



      </div>





      {/* Bottom Change */}

      {change && (

        <div
          className="
            flex
            items-center
            gap-2

            mt-6

            text-sm
            text-green-600
            font-medium
          "
        >

          <FaArrowUp />

          <span>
            {change}
          </span>


        </div>

      )}



    </div>

  );

}