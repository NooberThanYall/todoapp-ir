'use client'
import { Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogListLi = ({ blog }) => {
    const deleteBlogHandler = async() => {
      const _id = blog._id;
        const res =await fetch('/api/admin/blogs', {
            method: 'DELETE',
            body: JSON.stringify({_id})
        })
      //   const wtf = await res.json()
      //   console.log();
        
        location.reload()
    }
   return (
      <li
         key={blog._id}
         className={`flex justify-between items-center bg-lightorange text-white px-4 py-2 rounded-lg gap-6`}
      >
         <Link href={`/blogs/${blog._id}`} className="text-wrap w-48 leading-7">
            {blog.title}
         </Link>
         <div className="flex items-center space-x-2">
            <button onClick={e => deleteBlogHandler()}>
               <Trash2 className="text-red-500" size={20} />
            </button>
         </div>
      </li>
   );
};

export default BlogListLi;
