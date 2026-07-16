"use client";

import {
  FaChevronDown,
  FaCheck,
} from "react-icons/fa";


type Props = {

  label:string;

  value:string;

  setValue:(value:string)=>void;

  options:string[];

  icon:React.ReactNode;

  iconStyle:string;

  open:boolean;

  setOpen:(value:boolean)=>void;

};




export default function GlassSelect({

label,

value,

setValue,

options,

icon,

iconStyle,

open,

setOpen,

}:Props){



return (

<div className="relative w-full">





<label

className="
text-xs
font-semibold
text-gray-500
ml-2
"

>

{label}

</label>







{/* SELECT BUTTON */}



<button

type="button"

onClick={()=>setOpen(!open)}

className="


mt-2


w-full



flex

items-center

justify-between



px-3

py-3



rounded-2xl



bg-white/50



backdrop-blur-md



border

border-white



shadow-sm



hover:shadow-md



hover:border-blue-200



transition-all



duration-200


"

>



<div

className="
flex
items-center
gap-3
min-w-0
"

>



<div

className={`
w-9

h-9

rounded-xl


flex

items-center

justify-center


shrink-0


${iconStyle}

`}

>

{icon}

</div>





<span

className="

text-sm

font-semibold

text-gray-700

truncate

"

>

{

value || `All ${label}`

}


</span>




</div>






<FaChevronDown

className={`

text-gray-400

text-sm

transition-transform

duration-300


${open ? "rotate-180":""}

`}

/>




</button>









{/* DROPDOWN */}


{

open && (

<div


className="


absolute


left-0


top-full



mt-3



z-[999]



min-w-[260px]



max-w-[360px]



p-2



rounded-2xl



bg-white/95



backdrop-blur-2xl



border

border-gray-100



shadow-2xl



animate-in



fade-in



zoom-in-95



duration-200



max-h-64



overflow-y-auto



"


>





{

options.map((item)=>(



<button



key={item}



type="button"



onClick={()=>{


setValue(item);


setOpen(false);


}}



className={`


w-full



flex



items-center



justify-between




px-4



py-3




rounded-xl




text-sm




font-medium




transition-all




duration-200




${

value===item

?

"bg-blue-50 text-blue-600"

:

"text-gray-700 hover:bg-gray-50 hover:text-blue-600"

}




`}



>






<span

className="

whitespace-nowrap

"

>

{item}

</span>







{

value===item &&

(

<FaCheck

className="

text-blue-500

"

/>

)

}





</button>



))

}





</div>


)


}





</div>


);

}