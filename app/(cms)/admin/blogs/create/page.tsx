"use client";
import { bold } from "@/app/(root)/fonts";
import JoditEditor from "jodit-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";
import { BlogType } from '@/app/models/BlogModel';

const Page = () => {
   const editorRef = useRef(null);
   const [content, setContent] = useState("");
   const router = useRouter()

   const handleBlogSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const values = Object.fromEntries(formData.entries());

      try {
         const res = await fetch("http://127.0.0.1:3000/api/article", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values, content }),
         });

         if (!res.ok) throw new Error("error");
         const {newBlog}: {newBlog: BlogType} = await res.json();

         router.push(`/blogs/${newBlog._id}`)
         

      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <header
            className={`w-full h-1/4 flex justify-center items-center ${bold} text-[35px] text-white`}
         >
            مقاله جدید ( بازم الکی )
         </header>
         <main className="w-full h-3/4 flex justify-around py-8 text-1xl text-white">
            <form
               action=""
               className="flex flex-col items-center gap-4 w-full "
               onSubmit={handleBlogSubmit}
            >
               <input
                  type="text"
                  placeholder="title"
                  name={"title"}
                  className={"bg-darkorange p-4 rounded-md text-gray-300 w-2/4"}
               />
               <input
                  type="text"
                  placeholder="desc"
                  name={"description"}
                  className={
                     "bg-darkorange p-4 ltr rounded-md text-gray-100 w-2/4"
                  }
               />
               <input
                  type="text"
                  placeholder="tags"
                  name={"tags"}
                  className={
                     "bg-darkorange p-4 ltr rounded-md text-gray-300 w-2/4"
                  }
               />
               <input
                  type="text"
                  placeholder="author"
                  name={"author"}
                  className={
                     "bg-darkorange p-4 ltr rounded-md text-gray-300 w-2/4"
                  }
               />
               <input
                  type="text"
                  placeholder="headImgUrl"
                  name={"headImgUrl"}
                  className={"bg-darkorange p-4 ltr rounded-md text-gray-300 "}
               />

               <JoditEditor
                  ref={editorRef}
                  value={content}
                  className="text-black"
                  onChange={(newContent) => setContent(newContent)}
               />
               <button
                  type="submit"
                  className="bg-darkblue py-2 px-3 h-10 rounded-md"
               >
                  ثبت بلاگ
               </button>
            </form>
         </main>
      </>
   );
};

export default Page;
