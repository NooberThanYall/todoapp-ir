import React from 'react'
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';

const TodoItem = ({props}) => {
    const {todo, done} = props
  return (
    <motion.li
      initial={{ opacity: 0, y: -10, scale: 0.9 }}
      animate={{
        opacity: todo.done ? 0.5 : 1,
        y: 0,
        scale: 1,
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      key={todo._id}
      className={`flex gap-3 items-center w-[25%] transition-all px-4 py-2 rounded-lg ${
        todo.done ? "line-through text-gray-500" : ""
      }`}
      onClick={() => done(todo._id, todo.done)}
    >
              {/* Checkbox for marking as done */}
              <input
                type="checkbox"
                checked={todo.done}
                // onChange={() => done(todo._id, !todo.done)}
                className="w-5 h-5 appearance-none cursor-pointer rounded-md bg-darkbgsecondary checked:bg-checkbox border-none outline-none"
              />
              <span>{todo.task}</span>

              <div className="flex items-center space-x-2 ml-auto">
                <button>
                  <Trash2 className="text-deletebtn" size={20} />
                </button>
              </div>
            </motion.li>
  )
}

export default TodoItem