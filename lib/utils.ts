import { createClient } from "@supabase/supabase-js";
import { signUpSchema } from "@/app/schemas/AuthSchemas";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";
import dotenv from 'dotenv';
import { State } from "@/app/components/auth/SignUpForm";

dotenv.config()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*", // Allow all origins
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS", // Allowed methods
  "Access-Control-Allow-Headers": "Content-Type",
}

export function getCookieValue(name: string) {
  const cookies = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return cookies ? cookies.split("=")[1] : null;
}

export const option = {

  weekday: 'long',

  year: 'numeric',

  month: 'long',

  day: 'numeric'

}




// -------------- A U T H ------------------ //

// @ts-expect-error huh
export async function handleSignUp(e: React.FormEvent<HTMLFormElement>, state, setState) {
  e.preventDefault();
  setState(prev => {
    return {...prev, loading: true}
  })

  const formData = new FormData(e.currentTarget);
  const values = Object.fromEntries(formData.entries());

  if (values.password !== values.confirmPassword) {
     setState({ ...state, errors: { confirm: "پسورد ها یکی نیستند!" } });
  }

  try {
     const validated = signUpSchema.parse(values);



     const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
     });
     const res = await response.json();

     if (!res.success) {
        setState({ ...state, errors: res.errors });
     } else {
        setState({
           success: true,
           message: res.message,
           errors: {},
           state: "upload",
        });
     }
  } catch (error) {
     if (error instanceof z.ZodError) {
        setState({ ...state, errors: { zod: error.message } });
     } else {
        setState({ ...state, errors: { general: "هه هه هه هه " } });
     }
  } finally {
    setState(prev => {
      return {...prev, loading: false}
    })
  }
}




// ---------------------- S U P A B A S E ----------------------//


const supabaseUrl = "https://wzaevxnrrqabamgkdxcb.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6YWV2eG5ycnFhYmFtZ2tkeGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MDEwOTAsImV4cCI6MjA1MzE3NzA5MH0.cclD1z4xE0Fex1h2FfoNK7M42o1YDQlIlitj3qNu0sw";

//@ts-expect-error huh
export const supabase = createClient(supabaseUrl, process.env.NEXT_PUBLIC_SERVICE_ROLE);
