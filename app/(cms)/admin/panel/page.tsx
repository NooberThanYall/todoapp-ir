import { bold } from '@/app/(root)/layout';
import { Blog } from '@/app/models/BlogModel';
import { User } from '@/app/models/UserModel';
import connectDB from '@/lib/db/mongodb'
import React from 'react'

const Page =  async() => {

  await connectDB();

  const users = await User.find({});
  const blogs = await Blog.find({});

  return (
    <>
      <header  className={`w-full h-1/4 flex justify-center items-center ${bold} text-[35px] text-white`}>
        آمار سایت ( الکی )
      </header>
      <main className='w-full h-3/4 flex justify-around py-8 text-1xl text-white'>
       <h2> تعداد کاربران: {users.length}</h2>
       <h2>تعداد مقالات : {blogs.length}</h2>
      </main>
    </>
  )
}

export default Page