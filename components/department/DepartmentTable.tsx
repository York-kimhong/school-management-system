"use client";


import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";


type Department = {

id:number;

name:string;

code:string;

faculty:string;

head:string;

email:string;

status:string;

};



type Props={

departments:Department[];

onEdit:(department:Department)=>void;

onDelete:(id:number)=>void;

};



export default function DepartmentTable({

departments,

onEdit,

onDelete

}:Props){



const columns=[


{
key:"name",
title:"Department Name"
},


{
key:"code",
title:"Code"
},


{
key:"faculty",
title:"Faculty"
},


{
key:"head",
title:"Head"
},


{
key:"email",
title:"Email"
},



{
key:"status",

title:"Status",

render:(department:Department)=>(

<Badge
color={
department.status==="Active"
?
"green"
:
"red"
}
>

{department.status}

</Badge>

)

},



{
key:"action",

title:"Action",

render:(department:Department)=>(


<div className="flex gap-2">


<Button

variant="warning"

onClick={()=>
onEdit(department)
}

>

Edit

</Button>



<Button

variant="danger"

onClick={()=>
onDelete(department.id)
}

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

data={departments}

/>

);


}