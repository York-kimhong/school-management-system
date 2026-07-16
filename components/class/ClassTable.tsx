"use client";


import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";



type ClassRoom = {

id:number;

classCode:string;

className:string;

faculty:string;

department:string;

academicYear:string;

advisor:string;

studentCount:number;

status:string;

};



type Props={


classes:ClassRoom[];


onEdit:(item:ClassRoom)=>void;


onDelete:(id:number)=>void;


};






export default function ClassTable({

classes,

onEdit,

onDelete

}:Props){



const columns=[



{
key:"classCode",

title:"Code"

},




{
key:"className",

title:"Class Name"

},





{
key:"department",

title:"Department"

},




{
key:"academicYear",

title:"Year"

},




{
key:"advisor",

title:"Advisor"

},




{
key:"studentCount",

title:"Students"

},





{
key:"status",

title:"Status",

render:(item:ClassRoom)=>(


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

render:(item:ClassRoom)=>(


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

data={classes}

/>

);


}