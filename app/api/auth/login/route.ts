import { User } from "@/app/models/UserModel";
import connectDB from "@/lib/db/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  await connectDB();

  try {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('کاربری با این ایمیل وجود ندارد!')
    }

    if(user.password !== password) {
        throw new Error('اطلاعات وارد شده نادرست است!')
    }

    return NextResponse.json({success: true, user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        admin: user.admin,
        todoList: user.todoList
    }})
  } catch ({ message }) {
    return NextResponse.json({ success: false, error: message });
  }
}
