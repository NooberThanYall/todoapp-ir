import { User } from "@/app/models/UserModel";
import connectDB from "@/lib/db/mongodb";
import { headers } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectDB()
    const {name, email, password} = await req.json();
         

    try {
        
        const userAlrExist = await User.findOne({email});

        if(!userAlrExist) {
            const newUser = await User.create({
                name,
                email,
                password,
                admin: false,
                todoList: []
            })
             
            return NextResponse.json({success: true, user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                todoList: newUser.todoList,

            }} , {
                headers
            })
        } else {
            throw new Error('این ایمیل قبلا ثبت شده!')
        }


    } catch ({message}) {
        return NextResponse.json({success: false, error: message}, {
            headers
        })
    }
}