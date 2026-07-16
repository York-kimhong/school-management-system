"use client";


import Button from "@/components/ui/Button";



type EnrollmentFormData = {

student:string;

className:string;

academicYear:string;

semester:string;

status:string;

};




type Props={


form:EnrollmentFormData;


setForm:(

form:EnrollmentFormData

)=>void;



onSubmit:()=>void;



buttonText?:string;


};







export default function EnrollmentForm({

form,

setForm,

onSubmit,

buttonText="Save Enrollment"


}:Props){



return(


<div className="space-y-5">





{/* Enrollment Information */}


<h3 className="text-lg font-bold text-gray-800">

Enrollment Information

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

Academic Year

</label>



<select

value={form.academicYear}


onChange={(e)=>

setForm({

...form,

academicYear:e.target.value

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

Select Year

</option>


<option>

2025

</option>


<option>

2026

</option>


<option>

2027

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