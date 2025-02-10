import { z } from 'zod'

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email('ایمیل نادرست!'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const logInSchema = z.object({
  email: z.string().email('ایمیل نادرست!'),
  password: z.string().min(1, 'پسورد خود را وارد کنید!'),
})

