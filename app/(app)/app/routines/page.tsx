'use client'
import AddRoutineForm from "@/app/components/routine/AddRoutineForm";
import RoutineCard from "@/app/components/routine/RoutineCard";
import { Button } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [state, setState] = useState("normal");
    const [loading, setLoading] = useState(false);
    const [routines, setRoutines] = useState([]); // مقدار اولیه رو [] گذاشتم

    useEffect(() => {
        async function fetchRoutines() {
            try {
                setLoading(true);
                const res = await fetch("http://127.0.0.1:3000/api/routine");
                const data = await res.json();
                setRoutines(data.routines);
            } catch (error) {
                             } finally {
                setLoading(false);
            }
        }

        fetchRoutines();
    }, []);

    const handleAddButton = () => {
        setState("form");
    };

    return (
        <div className="text-textprimary p-6 w-full h-screen flex flex-col items-center gap-6">
            <h1 className="text-2xl text-center font-bold  pb-4 w-full">
                روتین ها
            </h1>

            {loading ? (
                <h3 className="text-xl text-center opacity-50 pb-4">در حال بارگیری...</h3>
            ) : routines.length > 0 ? (
                routines.map((routine) => (
                    <RoutineCard routine={routine} key={routine._id} />
                ))
            ) : (
                <h3 className="text-xl text-center opacity-50 pb-4">
                    روتینی یافت نشد
                </h3>
            )}

            {state === "form" ? (
                <AddRoutineForm setRoutines={setRoutines} />
            ) : (
                <Button
                    onClick={handleAddButton}
                    className="hover:bg-orange-600 bg-orange-500 text-darkbg flex items-center gap-2"
                >
                    <Plus />
                    <span>روتین جدید</span>
                </Button>
            )}
        </div>
    );
};

export default Page;
