"use client";


import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";


type DepartmentFormData = {

  name:string;

  code:string;

  faculty:string;

  head:string;

  email:string;

  status:string;

};



type DepartmentFormProps = {

  form:DepartmentFormData;

  setForm:(

    form:DepartmentFormData

  )=>void;


  onSubmit:()=>void;


  buttonText?:string;

};



export default function DepartmentForm({

form,

setForm,

onSubmit,

buttonText="Save Department"

}:DepartmentFormProps){



return(

<div className="space-y-4">



<Input

label="Department Name"

placeholder="Example: Computer Science"

value={form.name}

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

/>




<Input

label="Department Code"

placeholder="Example: CS"

value={form.code}

onChange={(e)=>

setForm({

...form,

code:e.target.value

})

}

/>





<div>

<label

className="
block
mb-2
text-sm
font-medium
text-gray-700
"

>

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
rounded-xl
border
border-gray-300
px-4
py-3
outline-none
focus:border-blue-500
"

>


<option value="">

Select Faculty

</option>


<option value="Faculty of Engineering">

Faculty of Engineering

</option>


<option value="Faculty of Science">

Faculty of Science

</option>


<option value="Faculty of Business">

Faculty of Business

</option>



</select>

</div>





<Input

label="Head of Department"

placeholder="Department Head"

value={form.head}

onChange={(e)=>

setForm({

...form,

head:e.target.value

})

}

/>





<Input

label="Email"

type="email"

placeholder="department@email.com"

value={form.email}

onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}

/>





<div>


<label

className="
block
mb-2
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