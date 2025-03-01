import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth/jwt";
import connectDB from "@/lib/db/mongodb";
import { Todo } from "@/app/models/TodoModel";

export async function GET(req: NextRequest) {
  await connectDB();

  const searchParams = req.nextUrl.searchParams;
  const date = searchParams.get('date');


  const startOfDay = new Date(date);
  startOfDay.setHours(0,0,0,0)

  const endOfDay = new Date(date);
  endOfDay.setHours(23,59,59,999)

  const session = await cookies().get("session")?.value;
  // @ts-expect-error huh
  const { _id } = await decrypt(session);

  try {
    //@ts-expect-error huh
    const todos = await Todo.find({
      owner: _id,
      createdAt: { $gte: startOfDay, $lte: endOfDay }, // Filter by date range
    }).sort({ createdAt: -1 });
         
    return NextResponse.json({ todoList: todos });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
export async function POST(req: NextRequest) {
  await connectDB();
  const { task, priority } = await req.json();
  const session = await cookies().get("session")?.value;
  // @ts-expect-error huh
  const { _id } = await decrypt(session);

  try {
    const todo = new Todo({
      task,
      priority,
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
         
    // @ts-expect-error huh
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { done: !done },
      { new: true } // Return the updated document
    );
         

    return NextResponse.json({updatedTodo})
  } catch (error) {
    return NextResponse.json({error})
  }
}

export async function DELETE() {
  await connectDB();


  try {

    const todos = await Todo.deleteMany({});

         
    return NextResponse.json({ todoList: todos });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}