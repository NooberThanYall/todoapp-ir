import React from 'react'

//@ts-expect-error kos nanat ts
const FormRoutine = ({loading, submitRoutine}) => {
  return (
    <form
            className={`space-y-4 ${
                loading ? "opacity-50" : ""
            } md:space-y-6 bg-darkblue p-6 rounded-lg`}
            onSubmit={submitRoutine}
        >
            <div>
            <label
                    htmlFor="tasks"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
نام روتین                </label>
                <input
                    type="text"
                    name="name"
                    required
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="نام روتین"
                />
            </div>
            <div>
                <label
                    htmlFor="tasks"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    لیست کار ها
                </label>
                <textarea
                    name="tasks"
                    required
                    id="tasks"
                    placeholder='با خط فاصله "-" جدا کنید'
                    className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-500 dark:focus:ring-primary-800"
            >
                اضافه کردن روتین {" "}
            </button>
        </form>
  )
}

export default FormRoutine