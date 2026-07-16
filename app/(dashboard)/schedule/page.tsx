"use client";


import { useState } from "react";


import Card from "@/components/ui/Card";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import ConfirmDialog from "@/components/ui/ConfirmDialog";


import ScheduleTable from "@/components/schedule/ScheduleTable";
import ScheduleModal from "@/components/schedule/ScheduleModal";





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







const initialSchedules:Schedule[]=[



{

id:1,

course:"Database System",

teacher:"Dr. Sok Dara",

className:"IT3A",

room:"A101",

day:"Monday",

startTime:"08:00",

endTime:"10:00",

semester:"Semester 1",

status:"Active"

},





{

id:2,

course:"Data Structure",

teacher:"Prof. Kim Rina",

className:"CS2B",

room:"B201",

day:"Wednesday",

startTime:"13:00",

endTime:"15:00",

semester:"Semester 2",

status:"Active"

}



];










export default function SchedulePage(){



const [schedules,setSchedules]=useState(

initialSchedules

);



const [search,setSearch]=useState("");



const [open,setOpen]=useState(false);



const [editId,setEditId]=useState<number|null>(null);



const [deleteId,setDeleteId]=useState<number|null>(null);







const [form,setForm]=useState({


course:"",

teacher:"",

className:"",

room:"",

day:"",

startTime:"",

endTime:"",

semester:"",

status:"Active",


});









// Search

const filteredSchedules = schedules.filter(

(item)=>

item.course

.toLowerCase()

.includes(

search.toLowerCase()

)

);









// Open Add

function openAdd(){


setEditId(null);


setForm({

course:"",

teacher:"",

className:"",

room:"",

day:"",

startTime:"",

endTime:"",

semester:"",

status:"Active",

});


setOpen(true);


}









// Save

function saveSchedule(){



if(editId){



setSchedules(

schedules.map((item)=>

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



const newSchedule={


id:Date.now(),

...form


};



setSchedules([

...schedules,

newSchedule

]);



}



setOpen(false);



}









// Edit

function editSchedule(item:Schedule){



setEditId(item.id);



setForm({

course:item.course,

teacher:item.teacher,

className:item.className,

room:item.room,

day:item.day,

startTime:item.startTime,

endTime:item.endTime,

semester:item.semester,

status:item.status,

});



setOpen(true);



}









// Delete

function deleteSchedule(){



setSchedules(

schedules.filter(

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

Schedule Management

</h1>


<p className="
mt-2
text-gray-500
">

Manage university class schedules

</p>


</div>





<Button

onClick={openAdd}

>

+ Add Schedule

</Button>




</div>









<Card>



<div className="mb-6">


<SearchBar

value={search}

onChange={setSearch}

placeholder="Search schedule..."

/>


</div>









<ScheduleTable


schedules={filteredSchedules}


onEdit={editSchedule}


onDelete={(id)=>

setDeleteId(id)

}


/>






</Card>









<ScheduleModal


open={open}


onClose={()=>setOpen(false)}



form={form}



setForm={setForm}



onSubmit={saveSchedule}



editMode={editId!==null}


/>









<ConfirmDialog


open={deleteId!==null}


title="Delete Schedule?"


message="This schedule will be permanently removed."


onCancel={()=>setDeleteId(null)}


onConfirm={deleteSchedule}



/>








</div>


);



}