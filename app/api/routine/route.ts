import { Routine } from '@/app/models/RoutineModel';
import connectDB from '@/lib/db/mongodb';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req:NextRequest) {
    await connectDB();
    
    try {
        //@ts-expect-error huu
        const routines = await Routine.find({})
    
        return NextResponse.json({success: true, routines})
    } catch (err) {
        return NextResponse.json({success: false})
        
    }
}
export async function POST(req:NextRequest) {
    await connectDB();
    const body = await req.json();

    try {
        //@ts-expect-error huu
        const routine = await Routine.create({...body});

        return NextResponse.json({success: true, routine})
    } catch (err) {
        return NextResponse.json({success: false})
        
    }
    
}