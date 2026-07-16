"use client";


import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";



type Schedule = {


id:number;

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


schedules:Schedule[];


onEdit:(schedule:Schedule)=>void;


onDelete:(id:number)=>void;


};







export default function ScheduleTable({

schedules,

onEdit,

onDelete

}:Props){



const columns=[



{
key:"course",

title:"Course"

},





{
key:"teacher",

title:"Teacher"

},





{
key:"className",

title:"Class"

},





{
key:"room",

title:"Room"

},





{
key:"day",

title:"Day"

},





{
key:"time",

title:"Time",


render:(item:Schedule)=>(


<span>

{item.startTime}

 -

{item.endTime}

</span>


)


},






{
key:"semester",

title:"Semester"

},





{
key:"status",

title:"Status",

render:(item:Schedule)=>(


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


render:(item:Schedule)=>(


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

data={schedules}

/>

);


}