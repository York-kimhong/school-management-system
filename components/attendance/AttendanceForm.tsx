"use client";


import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";



type AttendanceFormData = {

student:string;

className:string;

course:string;

date:string;

status:string;

note:string;

};




type Props={


form:AttendanceFormData;


setForm:(

form:AttendanceFormData

)=>void;



onSubmit:()=>void;



buttonText?:string;


};







export default function AttendanceForm({

form,

setForm,

onSubmit,

buttonText="Save Attendance"


}:Props){



return(


<div className="space-y-5">





{/* Attendance Information */}


<h3 className="text-lg font-bold text-gray-800">

Attendance Information

</h3>








<div>


<label className="
block
mb-2
text-sm
font-medium
">

Student

</label>



<select

value={form.student}


onChange={(e)=>

setForm({

...form,

student:e.target.value

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

Select Student

</option>


<option>

York Kimhong

</option>


<option>

Sok Dara

</option>


<option>

Kim Rina

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









<Input

label="Date"

type="date"

value={form.date}


onChange={(e)=>

setForm({

...form,

date:e.target.value

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

Attendance Status

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

Present

</option>


<option>

Absent

</option>


<option>

Late

</option>


<option>

Leave

</option>



</select>


</div>









{/* Note */}



<div>


<label className="
block
mb-2
text-sm
font-medium
">

Note

</label>



<textarea


value={form.note}


onChange={(e)=>

setForm({

...form,

note:e.target.value

})

}


placeholder="Optional note..."


className="
w-full
border
rounded-xl
px-4
py-3
h-28
resize-none
"


/>



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