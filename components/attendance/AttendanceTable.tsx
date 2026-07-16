"use client";


import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";



type Attendance = {


id:number;

student:string;

className:string;

course:string;

date:string;

status:string;

note:string;


};





type Props={


attendances:Attendance[];


onEdit:(item:Attendance)=>void;


onDelete:(id:number)=>void;


};







export default function AttendanceTable({

attendances,

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
key:"course",

title:"Course"

},





{
key:"date",

title:"Date"

},





{
key:"status",

title:"Status",

render:(item:Attendance)=>(


<Badge

color={

item.status==="Present"

?

"green"

:

item.status==="Late"

?

"yellow"

:

"red"

}

>

{item.status}

</Badge>


)


},





{
key:"note",

title:"Note"

},





{
key:"action",

title:"Action",

render:(item:Attendance)=>(


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

data={attendances}

/>

);


}