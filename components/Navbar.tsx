"use client";

import { useState } from "react";

import {
  FaBell,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

import ThemeToggle from "@/components/ThemeToggle";


const notifications = [
  {
    id: 1,
    title: "New student registered",
    time: "5 minutes ago",
  },
  {
    id: 2,
    title: "Teacher uploaded a course",
    time: "30 minutes ago",
  },
  {
    id: 3,
    title: "Attendance updated",
    time: "1 hour ago",
  },
];


export default function Navbar() {


  const [showNotifications, setShowNotifications] =
    useState(false);


  const [showProfile, setShowProfile] =
    useState(false);



  return (

    <nav
      className="
        bg-white
        rounded-2xl
        shadow-sm

        px-6
        py-4

        flex
        items-center
        justify-between

        mb-6
      "
    >


      {/* Search */}

      <div
        className="
          flex
          items-center
          gap-3

          bg-gray-100

          rounded-xl

          px-4
          py-3

          w-96
        "
      >

        <FaSearch
          className="
            text-gray-400
          "
        />


        <input

          type="text"

          placeholder="Search..."

          className="
            bg-transparent
            outline-none
            w-full
          "

        />


      </div>






      {/* Right Side */}

      <div
        className="
          flex
          items-center
          gap-6
        "
      >



        {/* Theme Toggle */}

        <ThemeToggle />







        {/* Notification */}

        <div
          className="
            relative
          "
        >


          <button

            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }


            className="
              relative

              text-gray-600

              hover:text-blue-600

              transition
            "

          >

            <FaBell size={22}/>



            <span
              className="
                absolute

                -top-2

                -right-2

                bg-red-500

                text-white

                text-xs

                w-5

                h-5

                rounded-full

                flex
                items-center
                justify-center
              "
            >
              3
            </span>


          </button>





          {/* Notification Dropdown */}

          {
            showNotifications && (

              <div

                className="
                  absolute

                  right-0

                  mt-4

                  w-80

                  bg-white

                  rounded-2xl

                  shadow-xl

                  p-4

                  z-50
                "

              >


                <h3
                  className="
                    font-bold

                    mb-4
                  "
                >
                  Notifications
                </h3>





                <div
                  className="
                    space-y-3
                  "
                >

                  {
                    notifications.map((item)=>(

                      <div

                        key={item.id}

                        className="
                          p-3

                          rounded-xl

                          hover:bg-gray-100

                          transition
                        "

                      >

                        <p
                          className="
                            font-medium
                          "
                        >
                          {item.title}
                        </p>



                        <p
                          className="
                            text-sm
                            text-gray-500
                          "
                        >
                          {item.time}
                        </p>



                      </div>

                    ))
                  }


                </div>


              </div>

            )
          }



        </div>









        {/* Profile */}

        <div
          className="
            relative
          "
        >



          <button

            onClick={() =>
              setShowProfile(
                !showProfile
              )
            }


            className="
              flex

              items-center

              gap-3

              cursor-pointer
            "

          >


            <div

              className="
                w-10

                h-10

                rounded-full

                bg-blue-600

                text-white

                flex

                items-center

                justify-center

                font-bold
              "

            >
              Y
            </div>




            <div
              className="
                text-left
              "
            >

              <p
                className="
                  font-semibold
                "
              >
                York
              </p>



              <p
                className="
                  text-sm

                  text-gray-500
                "
              >
                Admin
              </p>


            </div>




            <FaChevronDown
              className="
                text-gray-400
              "
            />


          </button>








          {/* Profile Dropdown */}

          {
            showProfile && (

              <div

                className="
                  absolute

                  right-0

                  mt-4

                  w-52

                  bg-white

                  rounded-2xl

                  shadow-xl

                  p-3

                  z-50
                "

              >



                <button

                  className="
                    w-full

                    text-left

                    px-4

                    py-3

                    rounded-xl

                    hover:bg-gray-100
                  "

                >
                  Profile

                </button>





                <button

                  className="
                    w-full

                    text-left

                    px-4

                    py-3

                    rounded-xl

                    hover:bg-gray-100
                  "

                >
                  Settings

                </button>






                <button

                  className="
                    w-full

                    text-left

                    px-4

                    py-3

                    rounded-xl

                    text-red-600

                    hover:bg-red-50
                  "

                >
                  Logout

                </button>



              </div>

            )
          }



        </div>



      </div>



    </nav>

  );
}