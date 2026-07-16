"use client";


import { useState } from "react";

import { useRouter } from "next/navigation";




export default function LoginForm(){


    const router = useRouter();



    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");

    const [error,setError]=useState("");






    async function handleLogin(){


        setError("");



        const response = await fetch(
            "/api/login",
            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },


                body:JSON.stringify({

                    email,

                    password

                })

            }
        );



        const data = await response.json();




        if(!response.ok){

            setError(data.message);

            return;

        }



        router.push("/Dashboard");


    }







    return(


        <div className="space-y-5">


            <h1 className="
            text-2xl
            font-bold
            ">

                University Login

            </h1>





            <input

            className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            "

            placeholder="Email"

            type="email"

            value={email}

            onChange={(e)=>
                setEmail(e.target.value)
            }

            />





            <input

            className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            "

            placeholder="Password"

            type="password"

            value={password}

            onChange={(e)=>
                setPassword(e.target.value)
            }

            />






            {
                error &&

                <p className="text-red-500">

                    {error}

                </p>
            }







            <button

            onClick={handleLogin}

            className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
            "

            >

                Login

            </button>




        </div>


    );


}