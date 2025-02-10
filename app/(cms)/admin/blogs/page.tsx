import { bold } from "@/app/(root)/layout";
import BlogListLi from "@/app/components/admin/BlogListLi";
import LinkClientBtn from "@/app/components/LinkClientBtn";
import { Blog } from "@/app/models/BlogModel";
import connectDB from "@/lib/db/mongodb";
import React from "react";

const Page = async () => {
   await connectDB();

   const blogs = await Blog.find({});
   return (
      <>
         <header
            className={`w-full h-1/4 flex justify-center items-center ${bold} text-[35px] text-white`}
         >
            مقالات سایت ( الکی )
         </header>
         <main className="w-full h-3/4 flex justify-around py-8 text-1xl text-white">
            <LinkClientBtn
               href={"/admin/blogs/create"}
               className={"bg-darkblue py-2 px-3 h-10 rounded-md"}
               content={"بلاگ جدید"}
            />
            <ul className="w-92 h-92 bg-darkorange rounded-md p-8 gap-3 flex flex-col">
               {blogs ? blogs.map((blog) => {
                  return (
                     <BlogListLi blog={blog} key={blog._id}/>
                  );
               }) : (<h2>مقاله ای موجود نیست</h2>)}
            </ul>
         </main>
      </>
   );
};

export default Page;
