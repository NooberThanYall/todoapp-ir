import { Blog, BlogType } from "@/app/models/BlogModel";
import connectDB from "@/lib/db/mongodb";
import React from "react";
import LatestBlogs from "@/app/components/partials/LatestBlogs";
import BlogMain from "@/app/components/partials/BlogMain";

const BlogPage = async ({ params }: { params: { _id: string } }) => {
   await connectDB();
   // const blog: BlogType = (await Blog.find({ _id: params._id }))[0];
   const latestBlogs = await Blog.find({}).sort({ publishDate: -1 });
   const blog: BlogType = latestBlogs.find(
      (blog) => blog._id.toString() === params._id
   );

   if (!blog) {
      return <div>Blog not found.</div>;
   }

   //  
   return (
      <div className="flex gap-8 mt-32">
         {/* Main Content */}
         <article className="flex-1 bg-darkblue shadow-lg text-white p-8 rounded-lg ">
            <BlogMain blog={blog}/>
         </article>

         {/* Sidebar */}
         <aside className="w-72 flex flex-col gap-4">
            <div className="w-full bg-darkblue text-darkblue p-6 rounded-lg shadow-md max-h-96">
               
            </div>
            <LatestBlogs latestBlogs={latestBlogs}/>
         </aside>
      </div>
   );
};

export default BlogPage;
