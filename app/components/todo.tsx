import React, { FormEvent, useState } from "react";
import FormAdd from "./todo/formAdd";
import TodoItem from "./todo/TodoItem";
import SortingBtns from "./todo/SortingBtns";
import PersianDatePicker from "./partials/Datepicker";
import ShamsiDatePicker from "./partials/Datepicker";

export interface TodoItem {
    _id: string;
    task: string;
    done: boolean;
    owner: string;
}

interface TodosResponse {
    todoList: TodoItem[];
}

const Todo = ({
    todos = { todoList: [] },
    add,
    done,
}: {
    todos?: TodosResponse;
    add: (task: string) => Promise<void>;
    done: (id: string, done: boolean) => Promise<void>;
}) => {
    const [sort, setSort] = useState<string>("");

    const completed = todos.todoList.filter((todo) => todo.done).length;
    const percentage = (completed / todos.todoList.length) * 100;

    return (
        <div className={"flex flex-col justify-between h-full w-full "}>
            <div className="flex flex-col gap-4
            ">
                <h1 className="text-2xl text-center font-bold ">
             لیست کارها
                </h1>

                <ShamsiDatePicker />

                <FormAdd add={add} />
                <SortingBtns sort={sort} setSort={setSort} />
                <ul className="space-y-3 max-h-[600px] overflow-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 flex flex-col flex-wrap p-6">
                    {todos.todoList.length > 0 ? (
                        [...todos.todoList]
                            .sort((a, b) => {
                                if (sort === "HTL")
                                    //@ts-expect-error kos madare TS
                                    return a.priority - b.priority;
                                if (sort === "LTH")
                                    //@ts-expect-error kos madare TS
                                    return b.priority - a.priority;
                                return 0;
                            })
                            .map((todo) => (
                                <TodoItem
                                    props={{ todo, done }}
                                    key={todo._id}
                                />
                            ))
                    ) : (
                        <li className="text-center text-gray-400">
                            هیچ کاری موجود نیست
                        </li>
                    )}
                </ul>
            </div>
            <div className="bg-darkbgsecondary w-full h-1/5 p-8 rounded-lg flex flex-col justify-around gap-4">
                <h2 className="text-xl text-center">درصد کار های انجام شده:</h2>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                        className="bg-orange-500 text-md font-medium text-darkbg text-center p-0.5 leading-none rounded-full"
                        style={{
                            width: `${
                                Number.isNaN(percentage) ? "0" : percentage
                            }%`,
                        }}
                    >
                        {" "}
                        {Number.isNaN(Math.floor(percentage))
                            ? "0"
                            : Math.floor(percentage)}
                        %
                    </div>
                </div>
                <h2 className="text-xl text-center">
                    {" "}
                    <span className={"text-orange-500"}>
                        {completed}
                    </span> از{" "}
                    <span className={"text-orange-500"}>
                        {todos.todoList.length}
                    </span>{" "}
                    انجام شده{" "}
                </h2>
            </div>
        </div>
    );
};
export default Todo;
