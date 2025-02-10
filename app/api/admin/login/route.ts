import { User } from "@/app/models/UserModel";
import connectDB from "@/lib/db/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  const { password } = await req.json();

  try {

    const adminUser = await User.findOne({admin: true});

    if(adminUser.password === password) {
        return NextResponse.json({success: true})
    } else{
        throw new Error('شما ادمین نیستید')
    }

  } catch (error) {
    return NextResponse.json({success: false, error: error.message });
  }
}
