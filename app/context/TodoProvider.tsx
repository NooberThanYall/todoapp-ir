"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useUser } from "./UserProvider";
import { TodoItem } from "../components/todo";

const TodoContext = createContext(null);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<{ todoList: TodoItem[] }>({
    todoList: [],
  });
  const [date, setDate] = useState(() => {
    const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
    return today;
  }); // Default to today


  const user = useUser();

  useEffect(function(){
    fetchTodos(date)
  }, [date])

  function changeDate(val: number) {
    setDate((prev) => {
      const dateObj = new Date(prev);
      dateObj.setDate(dateObj.getDate() + val);
      return dateObj.toISOString().split("T")[0];
    });
  }

  async function fetchTodos(dateVal = date) {
    const res = await fetch(`http://127.0.0.1:3000/api/todo?date=${dateVal}`, {
      method: "GET",
    });
    const todos = await res.json();
    setTodos(todos);
    return todos;
  }

  async function addTodo(task: string, priority: string): Promise<void> {
    const res = await fetch("http://127.0.0.1:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task, priority }),
    });

    if (!res.ok) {
      console.error("Failed to add todo:", await res.text());
      return;
    }

    const { todo } = await res.json();
    setTodos((prev) => ({
      todoList: [...prev.todoList, todo], // Append new todo to the existing list
    }));
  }

  async function doneTodo(id: string, done: boolean) {
    //      
    const res = await fetch("http://127.0.0.1:3000/api/todo", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, done }),
    });

    if (!res.ok) {
      console.error("Failed to Update:", await res.text());
      return;
    }
    

    const {updatedTodo} = await res.json();
    setTodos((prevTodos) => ({
      todoList: prevTodos.todoList.map((t) =>
        t._id === id ? { ...t, done: updatedTodo.done } : t
      ),
    }));
    
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        fetchTodos,
        addTodo,
        doneTodo,
        date,
        changeDate
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export default TodoProvider;
