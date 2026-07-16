"use client";


import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";



type StaffFormData = {

name:string;

position:string;

department:string;

email:string;

phone:string;

status:string;

};



type Props = {


form:StaffFormData;


setForm:(

form:StaffFormData

)=>void;


onSubmit:()=>void;


buttonText?:string;


};





export default function StaffForm({

form,

setForm,

onSubmit,

buttonText="Save Staff"

}:Props){



return(


<div className="space-y-4">





<Input

label="Full Name"

placeholder="Enter staff name"

value={form.name}


onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}


/>






<div>


<label

className="
mb-2
block
text-sm
font-medium
text-gray-700
"

>

Position

</label>



<select


value={form.position}


onChange={(e)=>

setForm({

...form,

position:e.target.value

})

}


className="
w-full
rounded-xl
border
border-gray-300
px-4
py-3
"

>



<option value="">

Select Position

</option>


<option>

Officer

</option>


<option>

HR Staff

</option>


<option>

Accountant

</option>


<option>

Admin Staff

</option>


<option>

Support Staff

</option>



</select>



</div>







<div>


<label

className="
mb-2
block
text-sm
font-medium
text-gray-700
"

>

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
rounded-xl
border
border-gray-300
px-4
py-3
"

>


<option value="">

Select Department

</option>


<option>

Human Resource

</option>


<option>

Finance

</option>


<option>

Academic Office

</option>


<option>

IT Department

</option>



</select>



</div>








<Input

label="Email"

type="email"

placeholder="staff@university.edu"

value={form.email}


onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}


/>







<Input

label="Phone"

placeholder="012345678"

value={form.phone}


onChange={(e)=>

setForm({

...form,

phone:e.target.value

})

}


/>







<div>


<label

className="
mb-2
block
text-sm
font-medium
text-gray-700
"

>

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
rounded-xl
border
border-gray-300
px-4
py-3
"

>



<option value="Active">

Active

</option>


<option value="Inactive">

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
