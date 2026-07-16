"use client";


import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";



type Staff = {

id:number;

name:string;

position:string;

department:string;

email:string;

phone:string;

status:string;

};



type Props={


staff:Staff[];


onEdit:(staff:Staff)=>void;


onDelete:(id:number)=>void;


};





export default function StaffTable({

staff,

onEdit,

onDelete

}:Props){



const columns=[



{
key:"name",
title:"Name"
},



{
key:"position",
title:"Position"
},



{
key:"department",
title:"Department"
},



{
key:"email",
title:"Email"
},



{
key:"phone",
title:"Phone"
},




{
key:"status",

title:"Status",


render:(staff:Staff)=>(


<Badge

color={

staff.status==="Active"

?

"green"

:

"red"

}

>

{staff.status}

</Badge>


)


},





{
key:"action",

title:"Action",


render:(staff:Staff)=>(


<div className="flex gap-2">


<Button

variant="warning"

onClick={()=>onEdit(staff)}

>

Edit

</Button>



<Button

variant="danger"

onClick={()=>onDelete(staff.id)}

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

data={staff}


/>


);


}