"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";
import FormRegister from "../partials/FormRegister";
import { handleSignUp } from "@/lib/utils";

type Errors = {
   confirm?: string;
   general?: string;
   zod?: string;
};

export type State = {
   success: boolean;
   errors: Errors;
   message: string;
   state: string;
   userData: object;
   loading: boolean
};

const initialState: State = {
   loading: false,
   success: false,
   errors: {},
   message: "",
   // state: "form",
   // userData: {}
};

export const SignUpForm = () => {
   const [state, setState] = useState<State>(initialState);

   return (
      <div className=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-darkblue  ">
         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white __className_43c461">
               ثبت نام
            </h1>
               <FormRegister handleSignUp={(e) => handleSignUp(e, state, setState)} state={state}/>

         </div>
      </div>
   );
};
