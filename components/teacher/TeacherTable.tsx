"use client";


import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";



type Teacher = {

id:number;

teacherId:string;

name:string;

faculty:string;

department:string;

degree:string;

subject:string;

status:string;

};



type Props={


teachers:Teacher[];


onEdit:(teacher:Teacher)=>void;


onDelete:(id:number)=>void;


};





export default function TeacherTable({

teachers,

onEdit,

onDelete

}:Props){



const columns=[


{
key:"teacherId",

title:"Teacher ID"

},



{
key:"name",

title:"Name"

},



{
key:"faculty",

title:"Faculty"

},



{
key:"department",

title:"Department"

},



{
key:"degree",

title:"Degree"

},



{
key:"subject",

title:"Subject"

},





{
key:"status",

title:"Status",

render:(teacher:Teacher)=>(


<Badge

color={

teacher.status==="Active"

?

"green"

:

"red"

}

>

{teacher.status}

</Badge>


)

},





{
key:"action",

title:"Action",

render:(teacher:Teacher)=>(


<div className="flex gap-2">


<Button

variant="warning"

onClick={()=>onEdit(teacher)}

>

Edit

</Button>



<Button

variant="danger"

onClick={()=>onDelete(teacher.id)}

>

Delete

</Button>



</div>


)


}



];





return(

<Table

columns={columns}

data={teachers}

/>

);


}