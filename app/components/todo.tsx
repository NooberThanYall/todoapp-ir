import { PlusCircle, Trash2 } from 'lucide-react'
import React, { ChangeEvent, FormEvent, useState } from 'react'

export interface TodoItem {
  _id: string;
  task: string;
  done: boolean;
  owner: string;
}

interface TodosResponse {
  todoList: TodoItem[];
}


const Todo = ({ todos = { todoList: [] }, add, done }: { todos?: TodosResponse, add:(task: string) => Promise<void> , done:(id: string, done: boolean) => Promise<void> }) => {
  const [value, setValue] = useState<string>('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add(value)
    setValue('')
  }
  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-4 border-b-2 border-white pb-4">
        لیست کارهای امروز
      </h1>
      <form className="mt-6 flex items-center gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          placeholder="کار جدید..."
          className="flex-1 px-4 py-2 text-white bg-darkblue rounded-lg shadow-inner focus:ring-2 focus:ring-darkblue focus:outline-none"
        />
        <button type="submit" className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition">
          <PlusCircle size={24} />
        </button>
      </form>
      <ul className="space-y-3 max-h-[300px] overflow-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 p-6">
        {todos.todoList.length > 0 ? (
          todos.todoList.map((todo) => (
            <li
              key={todo._id}
              className={`flex gap-3 items-center w-1/4 bg-lightblue text-white px-4 py-2 rounded-lg ${todo.done ? "line-through opacity-40" : ""}`}
              onClick={() => done(todo._id, todo.done)}
            >
              {/* Checkbox for marking as done */}
              <input
                type="checkbox"
                checked={todo.done}
                // onChange={() => done(todo._id, !todo.done)}
                className="w-5 h-5 appearance-none cursor-pointer rounded-md bg-darkblue checked:bg-orange-500 border-none outline-none"
              />
              <span>{todo.task}</span>

              <div className="flex items-center space-x-2 ml-auto">
                <button>
                  <Trash2 className="text-red-500" size={20} />
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-400">هیچ کاری موجود نیست</li>
        )}
      </ul>
    </>
  );
};
export default Todo;