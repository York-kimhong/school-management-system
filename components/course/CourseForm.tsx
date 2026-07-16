"use client";


import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";



type CourseFormData = {

courseCode:string;

courseName:string;

faculty:string;

department:string;

credit:string;

teacher:string;

semester:string;

status:string;

};




type Props={


form:CourseFormData;


setForm:(

form:CourseFormData

)=>void;



onSubmit:()=>void;



buttonText?:string;


};







export default function CourseForm({

form,

setForm,

onSubmit,

buttonText="Save Course"


}:Props){



return(


<div className="space-y-5">





{/* Course Information */}

<h3 className="text-lg font-bold text-gray-800">

Course Information

</h3>






<Input

label="Course Code"

placeholder="IT301"

value={form.courseCode}


onChange={(e)=>

setForm({

...form,

courseCode:e.target.value

})

}


/>








<Input

label="Course Name"

placeholder="Database System"

value={form.courseName}


onChange={(e)=>

setForm({

...form,

courseName:e.target.value

})

}


/>









<Input

label="Credit"

placeholder="3"

value={form.credit}


onChange={(e)=>

setForm({

...form,

credit:e.target.value

})

}


/>









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


<option>

Summer

</option>



</select>


</div>









{/* Organization */}



<h3 className="
text-lg
font-bold
text-gray-800
mt-6
">

Organization

</h3>









<div>


<label className="
block
mb-2
text-sm
font-medium
">

Faculty

</label>



<select


value={form.faculty}


onChange={(e)=>

setForm({

...form,

faculty:e.target.value

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

Select Faculty

</option>


<option>

Faculty of Engineering

</option>


<option>

Faculty of Science

</option>


<option>

Faculty of Business

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

Department

</label>



<select


value={form.department}


onChange={(e)=>

setForm({

...form,

department:e.target.value

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

Select Department

</option>


<option>

Information Technology

</option>


<option>

Computer Science

</option>


<option>

Accounting

</option>



</select>



</div>









<Input

label="Teacher Assigned"

placeholder="Dr. Sok Dara"

value={form.teacher}


onChange={(e)=>

setForm({

...form,

teacher:e.target.value

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