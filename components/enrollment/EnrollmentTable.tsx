"use client";


import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";



type Enrollment = {


id:number;

student:string;

className:string;

academicYear:string;

semester:string;

status:string;


};




type Props={


enrollments:Enrollment[];


onEdit:(item:Enrollment)=>void;


onDelete:(id:number)=>void;


};







export default function EnrollmentTable({

enrollments,

onEdit,

onDelete

}:Props){



const columns=[



{
key:"student",

title:"Student"

},





{
key:"className",

title:"Class"

},





{
key:"academicYear",

title:"Academic Year"

},





{
key:"semester",

title:"Semester"

},





{
key:"status",

title:"Status",

render:(item:Enrollment)=>(


<Badge

color={

item.status==="Active"

?

"green"

:

"red"

}

>

{item.status}

</Badge>


)


},





{
key:"action",

title:"Action",

render:(item:Enrollment)=>(


<div className="flex gap-2">


<Button

variant="warning"

onClick={()=>onEdit(item)}

>

Edit

</Button>





<Button

variant="danger"

onClick={()=>onDelete(item.id)}

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

data={enrollments}

/>

);


}