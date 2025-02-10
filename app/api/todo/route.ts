import { NextRequest, NextResponse } from "next/server";
import { log } from "console";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth/jwt";
import connectDB from "@/lib/db/mongodb";
import { Todo } from "@/app/models/TodoModel";
import { User } from "@/app/models/UserModel";

export async function GET(req: NextRequest) {
  await connectDB();

  const session = await cookies().get("session")?.value;
  // @ts-expect-error huh
  const { _id } = await decrypt(session);

  try {
    //@ts-expect-error huh
    const todos = await Todo.find({ owner: _id });

    console.log(todos);
    
    return NextResponse.json({ todoList: todos });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
export async function POST(req: NextRequest) {
  await connectDB();
  const { task } = await req.json();
  const session = await cookies().get("session")?.value;
  // @ts-expect-error huh
  const { _id } = await decrypt(session);

  try {
    const todo = new Todo({
      task,
      done: false,
      owner: _id,
    });

    const newTodo = await todo.save();

    return NextResponse.json({ todo: newTodo });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function PATCH(req: NextRequest) {
  await connectDB();
  const {id, done} = await req.json();

  try {
    console.log(id, done);
    
    // @ts-expect-error huh
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { done: !done },
      { new: true } // Return the updated document
    );
    console.log(updatedTodo);
    

    return NextResponse.json({updatedTodo})
  } catch (error) {
    return NextResponse.json({error})
  }
}