import { Blog, BlogType } from "@/app/models/BlogModel";
import connectDB from "@/lib/db/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { headers, option } from "@/lib/utils";

export async function POST(req: NextRequest) {
   await connectDB();
   const body = await req.json();

   try {
      const newBlog = await Blog.create({
         ...body,
         publishDate: new Date(),
      });

      return NextResponse.json(
         { success: true, newBlog },
         {
            headers: {
               "Access-Control-Allow-Origin": "*", // Allow all origins
               "Access-Control-Allow-Methods": "POST, GET, OPTIONS", // Allowed methods
               "Access-Control-Allow-Headers": "Content-Type",
            },
         }
      );
   } catch (error) {
      return NextResponse.json(
         { success: false },
         {
            headers: {
               "Access-Control-Allow-Origin": "*", // Allow all origins
               "Access-Control-Allow-Methods": "POST, GET, OPTIONS", // Allowed methods
               "Access-Control-Allow-Headers": "Content-Type",
            },
         }
      );
   }
}

export async function GET(req: NextRequest) {
   await connectDB();

   try {
      const blogs = await Blog.find({});

      return NextResponse.json({ success: true, blogs }, { headers });
   } catch (error) {
      return NextResponse.json({ success: false }, { headers });
   }
}

export function OPTIONS() {
   return NextResponse.json(null, {
      headers: {
         "Access-Control-Allow-Origin": "*", // Allow all origins
         "Access-Control-Allow-Methods": "POST, GET, OPTIONS", // Allowed methods
         "Access-Control-Allow-Headers": "Content-Type",
      },
   });
}

export async function DELETE(req: NextRequest) {
  await connectDB();
  await Blog.deleteMany({})
  return NextResponse.json({})
}