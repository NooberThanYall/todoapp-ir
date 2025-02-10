'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { bold } from '../(root)/layout';

const HeroContent = () => {

  const handleClick = () => alert('سلام');
  return (
    <>
    <div className="flex flex-col gap-7">
          <h1
            className={`${bold} antialiased md:text-[46px] text-white md:w-[390px]`}
          >
            <span className="text-orange-400 text-[64px]">بهترین</span> راه
            مدیریت کار های روزانه با تودو!
          </h1>
          <h1 className=" text-white md:w-3/4 text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است{" "}
          </h1>
          <Button
            variant={"outline"}
            className="hover:bg-orange-400 w-36 bg-transparent border-orange-400 text-orange-400"
          >
            همین الان شروع کن!
          </Button>
        </div>
        <div className="items-center flex h-full"
        >
          <Image
          onClick={handleClick}
            src={"/images/ill.png"}
            alt="todo"
            height={400}
            width={400}
            className="rotate-12"
          />
        </div>
    </>
  )
}

export default HeroContent