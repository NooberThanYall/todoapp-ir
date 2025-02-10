import Link from 'next/link'
import React from 'react'

//@ts-expect-error huh
const FormRegister = ({state, handleSignUp}) => {
  return (
    <form className={`space-y-4 ${state.loading ? 'opacity-50' : ''} md:space-y-6`} onSubmit={handleSignUp}>
                  <div>
                     <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        نام
                     </label>
                     <input
                        type="text"
                        name="name"
                        required
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-600"
                        placeholder="نام شما"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        ایمیل
                     </label>
                     <input
                        type="email"
                        name="email"
                        required
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ایمیل شما"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        پسورد
                     </label>
                     <input
                        type="password"
                        name="password"
                        required
                        id="password"
                        placeholder="حداقل 8 کاراکتر"
                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        تکرار پسورد
                     </label>
                     <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        placeholder="••••••••"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                  </div>
                  <div className="flex items-start">
                     <div className="flex items-center h-5">
                        <input
                           id="terms"
                           aria-describedby="terms"
                           type="checkbox"
                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                     </div>
                     {/* <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div> */}
                  </div>
                  <button
                     type="submit"
                     className="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lightblue dark:focus:ring-primary-800"
                  >
                     ثبت نام{" "}
                  </button>
                  {state.errors.confirm && (
                     <p className="text-red-500">{state.errors.confirm}</p>
                  )}

                  {state.errors.general && (
                     <p className="text-red-500">{state.errors.general}</p>
                  )}
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                     از قبل اکانت داری؟{" "}
                     <Link
                        href="/auth/login"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                     >
                        ورود
                     </Link>
                  </p>
               </form>
  )
}

export default FormRegister