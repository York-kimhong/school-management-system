"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  {
    month: "Jan",
    students: 320,
  },
  {
    month: "Feb",
    students: 350,
  },
  {
    month: "Mar",
    students: 390,
  },
  {
    month: "Apr",
    students: 420,
  },
  {
    month: "May",
    students: 460,
  },
  {
    month: "Jun",
    students: 500,
  },
];


export default function StudentChart() {

  return (

    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
      "
    >

      <div className="mb-6">

        <h2
          className="
            text-xl
            font-bold
            text-gray-800
          "
        >
          Student Growth
        </h2>


        <p
          className="
            text-gray-500
            text-sm
            mt-1
          "
        >
          Student registration overview
        </p>

      </div>



      <div
        className="
          w-full
          h-[300px]
        "
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />


            <XAxis
              dataKey="month"
            />


            <YAxis />



            <Tooltip />



            <Line

              type="monotone"

              dataKey="students"

              stroke="#2563eb"

              strokeWidth={3}

              dot={{
                r:5
              }}

            />


          </LineChart>


        </ResponsiveContainer>


      </div>


    </div>

  );
}