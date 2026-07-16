"use client";


import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

import ScheduleForm from "./ScheduleForm";



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


open:boolean;


onClose:()=>void;



form:ScheduleFormData;



setForm:(

form:ScheduleFormData

)=>void;



onSubmit:()=>void;



editMode?:boolean;


};







export default function ScheduleModal({

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

"Edit Schedule"

:

"Add Schedule"

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



<ScheduleForm


form={form}


setForm={setForm}


onSubmit={onSubmit}



buttonText={

editMode

?

"Update Schedule"

:

"Add Schedule"

}


/>



</Modal>



);


}