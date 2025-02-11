import { BlogType } from "@/app/models/BlogModel";
import { bold } from "@/app/(root)/layout";
import React from "react";

const BlogMain = ({blog}: {blog: BlogType}) => {
   return (
      <>
         {/* Blog Title */}
         <h1 className={`text-4xl ${bold} mb-4  pb-6`}>{blog.title}</h1>
         {/* Author and Date */}
         <div className="flex justify-between items-center text-sm text-gray-300 mb-6">
            <span>نویسنده: {blog.author}</span>
            <span>
               تاریخ:{" "}
               {blog.publishDate.toLocaleDateString("fa-IR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
               })}
            </span>
         </div>
         {/* Head Image */}
         <div className="mb-6">
            <img
               src={blog.headImgUrl}
               alt="Blog Header"
               className="w-full  object-fit rounded-lg"
            />
         </div>
         {/* Content */}
         <main
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
         />
      </>
   );
};

export default BlogMain;
