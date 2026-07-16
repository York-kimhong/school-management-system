"use client";


import { useState } from "react";


import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";


import StaffTable from "@/components/staff/StaffTable";
import StaffModal from "@/components/staff/StaffModal";



type Staff = {

id:number;

name:string;

position:string;

department:string;

email:string;

phone:string;

status:string;

};





const initialStaff:Staff[] = [


{
id:1,

name:"Sok Dara",

position:"HR Officer",

department:"Human Resource",

email:"dara@university.edu",

phone:"012345678",

status:"Active",

},



{
id:2,

name:"Kim Rina",

position:"Accountant",

department:"Finance",

email:"rina@university.edu",

phone:"098765432",

status:"Active",

},



];







export default function StaffPage(){



const [staff,setStaff]=useState(

initialStaff

);



const [search,setSearch]=useState("");



const [open,setOpen]=useState(false);



const [editId,setEditId]=useState<number|null>(null);



const [deleteId,setDeleteId]=useState<number|null>(null);





const [form,setForm]=useState({

name:"",

position:"",

department:"",

email:"",

phone:"",

status:"Active",

});







// Search

const filteredStaff = staff.filter(

(item)=>

item.name

.toLowerCase()

.includes(

search.toLowerCase()

)

);








// Add

function openAdd(){



setEditId(null);



setForm({

name:"",

position:"",

department:"",

email:"",

phone:"",

status:"Active",

});



setOpen(true);



}







// Save

function saveStaff(){



if(editId){



setStaff(

staff.map((item)=>

item.id===editId

?

{

...item,

...form

}

:

item

)

);



}

else{



const newStaff={


id:Date.now(),

...form

};



setStaff([

...staff,

newStaff

]);



}



setOpen(false);



}









// Edit

function editStaff(item:Staff){



setEditId(item.id);



setForm({

name:item.name,

position:item.position,

department:item.department,

email:item.email,

phone:item.phone,

status:item.status,

});



setOpen(true);



}









// Delete

function deleteStaff(){



setStaff(

staff.filter(

(item)=>

item.id!==deleteId

)

);



setDeleteId(null);



}









return(



<div className="space-y-8">






{/* Header */}


<div

className="
flex
items-center
justify-between
"

>


<div>


<h1

className="
text-3xl
font-bold
text-gray-800
"

>

Staff Management

</h1>


<p

className="
mt-2
text-gray-500
"

>

Manage university staff and officers

</p>


</div>




<Button

onClick={openAdd}

>

+ Add Staff

</Button>



</div>









<Card>



<div className="mb-6">


<SearchBar

value={search}

onChange={setSearch}

placeholder="Search staff..."

/>


</div>








<StaffTable


staff={filteredStaff}


onEdit={editStaff}


onDelete={(id)=>

setDeleteId(id)

}


/>






</Card>









<StaffModal


open={open}


onClose={()=>setOpen(false)}


form={form}


setForm={setForm}


onSubmit={saveStaff}


editMode={editId!==null}



/>








<ConfirmDialog


open={deleteId!==null}


title="Delete Staff?"


message="This staff member will be permanently removed."


onCancel={()=>setDeleteId(null)}


onConfirm={deleteStaff}



/>









</div>



);



}