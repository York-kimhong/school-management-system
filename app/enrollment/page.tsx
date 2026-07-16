"use client";


import { useState } from "react";


import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";


import EnrollmentTable from "@/components/enrollment/EnrollmentTable";
import EnrollmentModal from "@/components/enrollment/EnrollmentModal";





type Enrollment = {

id:number;

student:string;

className:string;

academicYear:string;

semester:string;

status:string;

};







const initialEnrollments:Enrollment[]=[



{

id:1,

student:"York Kimhong",

className:"IT3A",

academicYear:"2026",

semester:"Semester 1",

status:"Active"

},





{

id:2,

student:"Sok Dara",

className:"CS2B",

academicYear:"2026",

semester:"Semester 1",

status:"Active"

}



];










export default function EnrollmentPage(){



const [enrollments,setEnrollments]=useState(

initialEnrollments

);



const [search,setSearch]=useState("");



const [open,setOpen]=useState(false);



const [editId,setEditId]=useState<number|null>(null);



const [deleteId,setDeleteId]=useState<number|null>(null);







const [form,setForm]=useState({


student:"",

className:"",

academicYear:"",

semester:"",

status:"Active",


});









// Search

const filteredEnrollments = enrollments.filter(

(item)=>

item.student

.toLowerCase()

.includes(

search.toLowerCase()

)

);









// Add

function openAdd(){


setEditId(null);


setForm({

student:"",

className:"",

academicYear:"",

semester:"",

status:"Active",

});


setOpen(true);


}









// Save

function saveEnrollment(){



if(editId){



setEnrollments(

enrollments.map((item)=>

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



const newEnrollment={


id:Date.now(),

...form


};



setEnrollments([

...enrollments,

newEnrollment

]);



}



setOpen(false);



}









// Edit

function editEnrollment(item:Enrollment){



setEditId(item.id);



setForm({

student:item.student,

className:item.className,

academicYear:item.academicYear,

semester:item.semester,

status:item.status,

});



setOpen(true);



}









// Delete

function deleteEnrollment(){



setEnrollments(

enrollments.filter(

(item)=>

item.id!==deleteId

)

);



setDeleteId(null);



}









return(



<div className="space-y-8">






{/* Header */}



<div className="
flex
items-center
justify-between
">


<div>


<h1 className="
text-3xl
font-bold
text-gray-800
">

Enrollment Management

</h1>


<p className="
mt-2
text-gray-500
">

Manage student class enrollment

</p>


</div>





<Button

onClick={openAdd}

>

+ Add Enrollment

</Button>




</div>









<Card>



<div className="mb-6">


<SearchBar

value={search}

onChange={setSearch}

placeholder="Search student..."

/>


</div>









<EnrollmentTable


enrollments={filteredEnrollments}


onEdit={editEnrollment}


onDelete={(id)=>

setDeleteId(id)

}


/>






</Card>









<EnrollmentModal


open={open}


onClose={()=>setOpen(false)}



form={form}



setForm={setForm}



onSubmit={saveEnrollment}



editMode={editId!==null}


/>









<ConfirmDialog


open={deleteId!==null}


title="Delete Enrollment?"


message="This enrollment will be permanently removed."


onCancel={()=>setDeleteId(null)}


onConfirm={deleteEnrollment}



/>








</div>


);



}