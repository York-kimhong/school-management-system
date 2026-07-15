"use client";

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


export default function ThemeToggle() {

  const [dark, setDark] = useState(false);


  function toggleTheme() {

    setDark(!dark);

    document.documentElement.classList.toggle(
      "dark"
    );

  }


  return (

    <button

      onClick={toggleTheme}

      className="
        w-10
        h-10

        rounded-xl

        bg-gray-100

        flex
        items-center
        justify-center

        text-gray-700

        hover:bg-gray-200

        transition
      "

    >

      {
        dark
        ?
        <FaSun />
        :
        <FaMoon />
      }


    </button>

  );

}