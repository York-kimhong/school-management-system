"use client";


import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import DepartmentForm from "./DepartmentForm";



type DepartmentFormData = {

  name:string;

  code:string;

  faculty:string;

  head:string;

  email:string;

  status:string;

};



type DepartmentModalProps = {


  open:boolean;


  onClose:()=>void;


  form:DepartmentFormData;


  setForm:(

    form:DepartmentFormData

  )=>void;



  onSubmit:()=>void;


  editMode?:boolean;


};




export default function DepartmentModal({

open,

onClose,

form,

setForm,

onSubmit,

editMode=false


}:DepartmentModalProps){



return(


<Modal


open={open}


title={

editMode

?

"Edit Department"

:

"Add Department"

}


onClose={onClose}



footer={

<>


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



</>


}



>



<DepartmentForm


form={form}


setForm={setForm}


onSubmit={onSubmit}


buttonText={

editMode

?

"Update Department"

:

"Add Department"

}



/>



</Modal>



);


}