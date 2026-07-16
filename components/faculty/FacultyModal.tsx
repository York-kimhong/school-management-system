"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import FacultyForm from "./FacultyForm";


type FacultyFormData = {
  name: string;
  code: string;
  dean: string;
  email: string;
  phone: string;
  status: string;
};


type FacultyModalProps = {

  open:boolean;

  onClose:()=>void;

  form:FacultyFormData;

  setForm:(
    form:FacultyFormData
  )=>void;


  onSubmit:()=>void;

  editMode?:boolean;

};



export default function FacultyModal({

  open,

  onClose,

  form,

  setForm,

  onSubmit,

  editMode=false

}:FacultyModalProps){



return (

<Modal

open={open}

title={
  editMode
  ?
  "Edit Faculty"
  :
  "Add Faculty"
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


<FacultyForm

form={form}

setForm={setForm}

onSubmit={onSubmit}

buttonText={
 editMode
 ?
 "Update Faculty"
 :
 "Add Faculty"
}

/>


</Modal>


);


}