"use client";


import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";



type Course = {

id:number;

courseCode:string;

courseName:string;

faculty:string;

department:string;

credit:number;

teacher:string;

semester:string;

status:string;

};




type Props={


courses:Course[];


onEdit:(course:Course)=>void;


onDelete:(id:number)=>void;


};







export default function CourseTable({

courses,

onEdit,

onDelete

}:Props){



const columns=[



{
key:"courseCode",

title:"Code"

},




{
key:"courseName",

title:"Course Name"

},




{
key:"department",

title:"Department"

},





{
key:"credit",

title:"Credit"

},




{
key:"teacher",

title:"Teacher"

},




{
key:"semester",

title:"Semester"

},





{
key:"status",

title:"Status",


render:(course:Course)=>(


<Badge

color={

course.status==="Active"

?

"green"

:

"red"

}

>

{course.status}

</Badge>


)

},





{
key:"action",

title:"Action",

render:(course:Course)=>(


<div className="flex gap-2">


<Button

variant="warning"

onClick={()=>onEdit(course)}

>

Edit

</Button>




<Button

variant="danger"

onClick={()=>onDelete(course.id)}

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

data={courses}

/>

);


}