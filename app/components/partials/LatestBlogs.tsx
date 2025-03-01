import { BlogType } from '@/app/models/BlogModel'
import { BookOpenText } from 'lucide-react'
import React from 'react'

const LatestBlogs = ({latestBlogs}: {latestBlogs: BlogType[]}) => {
  return (
    <div className="w-full bg-darkblue text-darkblue p-6 rounded-lg shadow-md max-h-96">
               <h2 className="flex gap-2 text-md font-bold mb-4 border-b text-white border-lightblue pb-2">
                  <BookOpenText />
                  آخرین مقالات
               </h2>
               <ul className="space-y-4">
                  {latestBlogs.map((latestBlog) => (
                     <li
                        key={latestBlog._id}
                        className="flex items-center gap-4 bg-lightblue rounded-e-lg p-4 shadow-sm hover:bg-lightblue/80 transition border-r-4 border-solid border-orange-400"
                     >
                        <div>
                           <h3 className="text-[16px]">
                              {latestBlog.title}
                              <span className="text-gray-400 text-[9px] mx-3">
                                 {latestBlog.publishDate.toLocaleDateString(
                                    "fa-IR",
                                    {
                                       weekday: "long",
                                       year: "numeric",
                                       month: "long",
                                       day: "numeric",
                                    }
                                 )}
                              </span>
                           </h3>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
  )
}

export default LatestBlogs