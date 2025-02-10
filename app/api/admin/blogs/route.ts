import { Blog } from "@/app/models/BlogModel";
import connectDB from "@/lib/db/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  const { title, description, tags, author, body, headImageUrl } =
    await req.json();

  try {
    const newBlog = await Blog.create({
      title,
      description,
      tags,
      author,
      body,
      headImageUrl,
    });

    return NextResponse.json({newBlog, success: true})
  } catch (error) {
    return NextResponse.json({success: false})
  }
}
export async function DELETE(req: NextRequest) {

    await connectDB();
    const {_id} = await req.json();

    try {

        const deleted = await Blog.deleteOne({_id})
        return NextResponse.json({success: true})
    } catch (error) {
         return NextResponse.json({success: false})
    }
}