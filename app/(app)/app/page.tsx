"use client";
import Todo from "@/app/components/todo";
import { useTodo } from "@/app/context/TodoProvider";
import React, { useEffect, useState } from "react";

const Page = () => {
  //@ts-expect-error fuck typescript's mother
  const { fetchTodos, todos, addTodo, doneTodo } = useTodo();
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Start loading
      await fetchTodos(); // Fetch data
      setLoading(false); // Stop loading
    };

    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" text-white p-6 w-full h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <span className="text-lightblue text-lg animate-pulse">در حال بارگذاری...</span>
        </div>
      ) : (
        <Todo todos={todos} add={addTodo} done={doneTodo} />
      )}
    </div>
  );
};

export default Page;
