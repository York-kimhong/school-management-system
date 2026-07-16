"use client";


import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";



type ScheduleFormData = {

course:string;

teacher:string;

className:string;

room:string;

day:string;

startTime:string;

endTime:string;

semester:string;

status:string;

};




type Props={


form:ScheduleFormData;


setForm:(

form:ScheduleFormData

)=>void;



onSubmit:()=>void;



buttonText?:string;


};







export default function ScheduleForm({

form,

setForm,

onSubmit,

buttonText="Save Schedule"


}:Props){



return(


<div className="space-y-5">





{/* Academic Information */}


<h3 className="text-lg font-bold text-gray-800">

Academic Information

</h3>








<div>


<label className="
block
mb-2
text-sm
font-medium
">

Course

</label>



<select

value={form.course}


onChange={(e)=>

setForm({

...form,

course:e.target.value

})

}


className="
w-full
border
rounded-xl
px-4
py-3
"

>


<option value="">

Select Course

</option>


<option>

Database System

</option>


<option>

Data Structure

</option>


<option>

Web Development

</option>



</select>


</div>









<div>


<label className="
block
mb-2
text-sm
font-medium
">

Teacher

</label>



<select

value={form.teacher}


onChange={(e)=>

setForm({

...form,

teacher:e.target.value

})

}


className="
w-full
border
rounded-xl
px-4
py-3
"

>


<option value="">

Select Teacher

</option>


<option>

Dr. Sok Dara

</option>


<option>

Prof. Kim Rina

</option>



</select>


</div>









<div>


<label className="
block
mb-2
text-sm
font-medium
">

Class

</label>



<select

value={form.className}


onChange={(e)=>

setForm({

...form,

className:e.target.value

})

}


className="
w-full
border
rounded-xl
px-4
py-3
"

>


<option value="">

Select Class

</option>


<option>

IT3A

</option>


<option>

CS2B

</option>



</select>


</div>









<div>


<label className="
block
mb-2
text-sm
font-medium
">

Semester

</label>



<select

value={form.semester}


onChange={(e)=>

setForm({

...form,

semester:e.target.value

})

}


className="
w-full
border
rounded-xl
px-4
py-3
"

>


<option value="">

Select Semester

</option>


<option>

Semester 1

</option>


<option>

Semester 2

</option>



</select>


</div>









{/* Schedule Time */}



<h3 className="
text-lg
font-bold
text-gray-800
mt-6
">

Schedule Time

</h3>









<div>


<label className="
block
mb-2
text-sm
font-medium
">

Day

</label>



<select

value={form.day}


onChange={(e)=>

setForm({

...form,

day:e.target.value

})

}


className="
w-full
border
rounded-xl
px-4
py-3
"

>


<option value="">

Select Day

</option>


<option>

Monday

</option>


<option>

Tuesday

</option>


<option>

Wednesday

</option>


<option>

Thursday

</option>


<option>

Friday

</option>



</select>


</div>









<div className="
grid
grid-cols-2
gap-4
">


<Input

label="Start Time"

type="time"

value={form.startTime}


onChange={(e)=>

setForm({

...form,

startTime:e.target.value

})

}


/>





<Input

label="End Time"

type="time"

value={form.endTime}


onChange={(e)=>

setForm({

...form,

endTime:e.target.value

})

}


/>


</div>









<Input

label="Room"

placeholder="A101"

value={form.room}


onChange={(e)=>

setForm({

...form,

room:e.target.value

})

}


/>









{/* Status */}



<div>


<label className="
block
mb-2
text-sm
font-medium
">

Status

</label>



<select

value={form.status}


onChange={(e)=>

setForm({

...form,

status:e.target.value

})

}


className="
w-full
border
rounded-xl
px-4
py-3
"

>


<option>

Active

</option>


<option>

Inactive

</option>



</select>


</div>









<Button

onClick={onSubmit}

fullWidth

>

{buttonText}

</Button>





</div>


);


}