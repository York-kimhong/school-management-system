import { NextResponse } from "next/server";

import {
    login,
    createSession
} from "@/lib/auth";




export async function POST(
    request:Request
){


    const body = await request.json();



    const user = login(

        body.email,

        body.password

    );





    if(!user){


        return NextResponse.json(

            {
                message:"Invalid email or password"
            },

            {
                status:401
            }

        );


    }





    await createSession(user);





    return NextResponse.json({

        message:"Login success",

        role:user.role

    });



}