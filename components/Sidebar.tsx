"use client";


import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";


import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaCog,
  FaBars,
  FaTimes,
  FaBuilding,
  FaCalendarAlt,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";


import { hasPermission } from "@/lib/checkPermission";





const menuItems = [


  {
    name:"Dashboard",
    href:"/Dashboard",
    icon:<FaHome />,
    permission:"Dashboard"
  },


  {
    name:"Faculty",
    href:"/faculty",
    icon:<FaBuilding />,
    permission:"faculty"
  },


  {
    name:"Department",
    href:"/department",
    icon:<FaBuilding />,
    permission:"department"
  },


  {
    name:"Students",
    href:"/student",
    icon:<FaUserGraduate />,
    permission:"student"
  },


  {
    name:"Teachers",
    href:"/teacher",
    icon:<FaChalkboardTeacher />,
    permission:"teacher"
  },


  {
    name:"Courses",
    href:"/course",
    icon:<FaBook />,
    permission:"course"
  },


  {
    name:"Schedule",
    href:"/schedule",
    icon:<FaCalendarAlt />,
    permission:"schedule"
  },


  {
    name:"Attendance",
    href:"/attendance",
    icon:<FaClipboardCheck />,
    permission:"attendance"
  },


  {
    name:"Users",
    href:"/user",
    icon:<FaUsers />,
    permission:"user"
  },


  {
    name:"Settings",
    href:"/settings",
    icon:<FaCog />,
    permission:"settings"
  },


];





type Props={

role:string;

};






export default function Sidebar({

role

}:Props){



const pathname = usePathname();


const [open,setOpen]=useState(false);





const allowedMenu = menuItems.filter(

(item)=>

hasPermission(

role,

item.permission

)

);







return (

<>


{/* Mobile button */}

<button

onClick={()=>setOpen(true)}

className="
md:hidden
fixed
top-5
left-5
z-50
bg-gray-900
text-white
p-3
rounded-xl
"

>

<FaBars />

</button>







{/* Overlay */}

{

open &&

<div

onClick={()=>setOpen(false)}

className="
fixed
inset-0
bg-black/50
z-40
md:hidden
"

/>

}









{/* Sidebar */}


<aside

className={`

fixed

md:static

top-0

left-0

z-50


w-64

min-h-screen


bg-gray-900

text-white

p-6



transition-transform

duration-300



${

open

?

"translate-x-0"

:

"-translate-x-full md:translate-x-0"

}


`}

>





<button

onClick={()=>setOpen(false)}

className="
md:hidden
absolute
right-5
top-5
text-gray-300
"

>

<FaTimes />

</button>







<h1

className="
text-2xl
font-bold
mb-10
"

>

University ERP

</h1>








<nav className="space-y-2">


{

allowedMenu.map((item)=>(


<Link

key={item.name}

href={item.href}

onClick={()=>setOpen(false)}



className={`

flex

items-center

gap-3


px-4

py-3


rounded-xl


transition-all


${

pathname===item.href

?

"bg-blue-600 text-white"

:

"text-gray-300 hover:bg-gray-800 hover:text-white"

}


`}


>


<span className="text-xl">

{item.icon}

</span>



<span className="font-medium">

{item.name}

</span>



</Link>



))


}



</nav>







</aside>


</>

);


}