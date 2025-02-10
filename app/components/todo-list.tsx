'use client'

import { useState } from 'react'
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Plus, Trash2, Edit2 } from 'lucide-react'

interface Task {
  id: number
  name: string
  completed: boolean
}

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }])
      setNewTask('')
    }
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const editTask = (id: number, newName: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, name: newName } : task
    ))
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-darkblue">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">لیست کارها</h1>
      
      <div className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="کار جدید..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={addTask} className="bg-lightblue hover:bg-blue-600 text-white">
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
              className="mr-2"
            />
            <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-gray-800 dark:text-white'}`}>
              {task.name}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const newName = prompt('ویرایش کار', task.name)
                if (newName) editTask(task.id, newName)
              }}
            >
              <Edit2 className="h-4 w-4 text-lightblue" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteTask(task.id)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

