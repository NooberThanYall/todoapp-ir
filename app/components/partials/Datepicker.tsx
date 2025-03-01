// app/components/ShamsiDatePicker.js
'use client'; // Required for client-side features like useState

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTodo } from '@/app/context/TodoProvider';

const ShamsiDatePicker = () => {
  const {changeDate, date} = useTodo();
  const dateAlan = new Date().toISOString().split("T")[0];

  return (
    // <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="w-full max-w-md">
    <div className={'w-full flex items-center justify-center gap-4'}>
          <div className='p-2 rounded-md bg-darkbgsecondary' onClick={() => changeDate(-1)}><ArrowRight/> </div>
          <div className=''>{date == dateAlan ? 'امروز' : (new Date(date)).toLocaleDateString("fa-IR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
               })}</div>
          <div className={`p-2 rounded-md bg-darkbgsecondary ${date === dateAlan ? 'opacity-40' : ''}`} onClick={() => changeDate(1)}><ArrowLeft /></div>
        </div>
      // </div>
    // </div>
  );
};

export default ShamsiDatePicker;