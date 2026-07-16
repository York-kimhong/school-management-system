"use client";


import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import StudentForm from "./StudentForm";



type StudentFormData = {

studentId:string;

name:string;

gender:string;

dob:string;

phone:string;

email:string;

faculty:string;

department:string;

className:string;

year:string;

status:string;

};




type Props={


open:boolean;


onClose:()=>void;



form:StudentFormData;



setForm:(

form:StudentFormData

)=>void;



onSubmit:()=>void;



editMode?:boolean;


};







export default function StudentModal({

open,

onClose,

form,

setForm,

onSubmit,

editMode=false


}:Props){





return(



<Modal


open={open}


onClose={onClose}



title={

editMode

?

"Edit Student"

:

"Add Student"

}



footer={


<div className="flex gap-3">


<Button

variant="secondary"

onClick={onClose}

>

Cancel

</Button>




<Button

onClick={onSubmit}

>

{

editMode

?

"Update"

:

"Save"

}


</Button>


</div>


}



>



<StudentForm


form={form}


setForm={setForm}


onSubmit={onSubmit}



buttonText={

editMode

?

"Update Student"

:

"Add Student"

}


/>



</Modal>



);


}