"use client";


import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import ClassForm from "./ClassForm";



type ClassFormData = {

classCode:string;

className:string;

faculty:string;

department:string;

academicYear:string;

advisor:string;

status:string;

};





type Props={


open:boolean;


onClose:()=>void;



form:ClassFormData;



setForm:(

form:ClassFormData

)=>void;



onSubmit:()=>void;



editMode?:boolean;


};







export default function ClassModal({

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

"Edit Class"

:

"Add Class"

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



<ClassForm


form={form}


setForm={setForm}


onSubmit={onSubmit}



buttonText={

editMode

?

"Update Class"

:

"Add Class"

}


/>



</Modal>



);


}