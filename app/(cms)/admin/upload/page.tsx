import { bold } from '@/app/(root)/layout';
import UploadPage from '@/app/components/partials/Upload';
import React from 'react'

const Page =  async() => {



  return (
    <>
      <header  className={`w-full h-1/4 flex justify-center items-center ${bold} text-[35px] text-white`}>
        آلپلود
      </header>
      <main className='w-full h-3/4 flex justify-around py-8 text-1xl text-white'>
       <UploadPage/>
      </main>
    </>
  )
}

export default Page