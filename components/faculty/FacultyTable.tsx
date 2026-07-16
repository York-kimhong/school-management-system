"use client";

import Table from "@/components/ui/Table";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";


type Faculty = {
  id:number;
  name:string;
  code:string;
  dean:string;
  email:string;
  phone:string;
  status:string;
};


type FacultyTableProps = {
  faculties:Faculty[];
  onEdit:(faculty:Faculty)=>void;
  onDelete:(id:number)=>void;
};


export default function FacultyTable({
  faculties,
  onEdit,
  onDelete,
}:FacultyTableProps){


const columns = [

{
 key:"name",
 title:"Faculty Name"
},

{
 key:"code",
 title:"Code"
},

{
 key:"dean",
 title:"Dean"
},

{
 key:"email",
 title:"Email"
},

{
 key:"status",
 title:"Status",

 render:(faculty:Faculty)=>(

   <Badge
    color={
      faculty.status==="Active"
      ?
      "green"
      :
      "red"
    }
   >

    {faculty.status}

   </Badge>

 )

},


{
 key:"action",
 title:"Action",

 render:(faculty:Faculty)=>(

   <div className="flex gap-2">

    <Button
      variant="warning"
      onClick={()=>
        onEdit(faculty)
      }
    >
      Edit
    </Button>


    <Button
      variant="danger"
      onClick={()=>
        onDelete(faculty.id)
      }
    >
      Delete
    </Button>


   </div>

 )

}

];


return (

<Table

 columns={columns}

 data={faculties}

/>

);


}