"use client";

import { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  email: string;
  class: string;
};

export default function StudentTable() {

  const [students, setStudents] = useState<Student[]>([]);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editId, setEditId] = useState<number | null>(null);


  const [form, setForm] = useState({
    name: "",
    email: "",
    class: "",
  });



  // =====================
  // GET STUDENTS
  // =====================

  useEffect(() => {

    fetch("/api/students")
      .then((res)=>res.json())
      .then((data)=>setStudents(data));

  },[]);



  // =====================
  // SEARCH
  // =====================

  const filteredStudents = students.filter((student)=>

    student.name
      .toLowerCase()
      .includes(search.toLowerCase())

  );



  // =====================
  // ADD STUDENT
  // =====================

  async function addStudent(){

    const response = await fetch(
      "/api/students",
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json",
        },

        body:JSON.stringify(form),
      }
    );


    const newStudent = await response.json();


    setStudents([
      ...students,
      newStudent
    ]);


    closeModal();

  }





  // =====================
  // OPEN EDIT
  // =====================

  function editStudent(student:Student){

    setForm({

      name:student.name,

      email:student.email,

      class:student.class,

    });


    setEditId(student.id);

    setOpen(true);

  }






  // =====================
  // UPDATE STUDENT
  // =====================

  async function updateStudent(){


    const updatedStudent = {

      id:editId,

      name:form.name,

      email:form.email,

      class:form.class,

    };



    await fetch(
      "/api/students",
      {

        method:"PUT",

        headers:{
          "Content-Type":"application/json",
        },

        body:JSON.stringify(updatedStudent),

      }
    );



    setStudents(

      students.map((student)=>

        student.id === editId

        ? updatedStudent as Student

        : student

      )

    );


    closeModal();

  }







  // =====================
  // DELETE STUDENT
  // =====================


  async function deleteStudent(id:number){


    await fetch(
      "/api/students",
      {

        method:"DELETE",

        headers:{
          "Content-Type":"application/json",
        },

        body:JSON.stringify({
          id
        }),

      }
    );



    setStudents(

      students.filter(
        (student)=>student.id !== id
      )

    );

  }






  // =====================
  // CLOSE MODAL
  // =====================

  function closeModal(){

    setForm({

      name:"",
      email:"",
      class:"",

    });


    setEditId(null);

    setOpen(false);

  }





  return (

    <div>


      {/* HEADER */}

      <div className="
        flex
        justify-between
        items-center
        mt-8
      ">


        <input

          type="text"

          placeholder="Search student..."

          value={search}

          onChange={(e)=>
            setSearch(e.target.value)
          }


          className="
            border
            rounded-xl
            px-4
            py-3
          "

        />



        <button

          onClick={()=>{

            setEditId(null);

            setOpen(true);

          }}

          className="
            bg-blue-600
            text-white
            px-5
            py-3
            rounded-xl
          "

        >

          + Add Student

        </button>


      </div>







      {/* TABLE */}


      <div className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
        mt-6
      ">


        <table className="w-full">


          <thead>

            <tr className="
              border-b
              text-left
              text-gray-500
            ">


              <th className="pb-3">
                Name
              </th>


              <th>
                Class
              </th>


              <th>
                Email
              </th>


              <th>
                Action
              </th>


            </tr>


          </thead>



          <tbody>


          {
            filteredStudents.map((student)=>(


              <tr
                key={student.id}
                className="border-b"
              >


                <td className="py-4">
                  {student.name}
                </td>



                <td>
                  {student.class}
                </td>



                <td>
                  {student.email}
                </td>




                <td className="
                  flex
                  gap-2
                  py-4
                ">


                  <button

                    onClick={()=>
                      editStudent(student)
                    }

                    className="
                      bg-yellow-500
                      text-white
                      px-3
                      py-2
                      rounded-lg
                    "

                  >

                    Edit

                  </button>





                  <button

                    onClick={()=>
                      deleteStudent(student.id)
                    }

                    className="
                      bg-red-600
                      text-white
                      px-3
                      py-2
                      rounded-lg
                    "

                  >

                    Delete

                  </button>


                </td>


              </tr>


            ))
          }


          </tbody>


        </table>


      </div>








      {/* MODAL */}


      {
        open && (

        <div className="
          fixed
          inset-0
          bg-black/50
          flex
          items-center
          justify-center
        ">


          <div className="
            bg-white
            rounded-2xl
            p-8
            w-96
          ">


            <h2 className="
              text-2xl
              font-bold
              mb-6
            ">

              {editId 
                ? "Edit Student"
                : "Add Student"
              }

            </h2>





            <input

              placeholder="Name"

              value={form.name}

              onChange={(e)=>
                setForm({
                  ...form,
                  name:e.target.value
                })
              }


              className="
                border
                rounded-lg
                px-4
                py-3
                w-full
                mb-3
              "

            />






            <input

              placeholder="Email"

              value={form.email}

              onChange={(e)=>
                setForm({
                  ...form,
                  email:e.target.value
                })
              }


              className="
                border
                rounded-lg
                px-4
                py-3
                w-full
                mb-3
              "

            />






            <input

              placeholder="Class"

              value={form.class}

              onChange={(e)=>
                setForm({
                  ...form,
                  class:e.target.value
                })
              }


              className="
                border
                rounded-lg
                px-4
                py-3
                w-full
                mb-3
              "

            />







            <div className="
              flex
              justify-end
              gap-3
              mt-6
            ">


              <button

                onClick={closeModal}

                className="
                  bg-gray-200
                  px-4
                  py-2
                  rounded-lg
                "

              >

                Cancel

              </button>





              <button

                onClick={
                  editId
                  ? updateStudent
                  : addStudent
                }


                className="
                  bg-blue-600
                  text-white
                  px-4
                  py-2
                  rounded-lg
                "

              >

                {
                  editId
                  ? "Update"
                  : "Save"
                }


              </button>



            </div>



          </div>


        </div>

        )
      }



    </div>

  );
}