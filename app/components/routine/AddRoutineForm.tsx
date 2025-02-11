import React, { FormEvent, useState } from "react";
import FormRoutine from "../partials/FormRoutine";

const AddRoutineForm = ({setRoutines}) => {
    const [loading, setLoading] = useState<boolean>(false);

    async function submitRoutine(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries());

        try {
          setLoading(true);

          const response = await fetch('http://127.0.0.1:3000/api/routine', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            //@ts-expect-error kos nane ts
            body: JSON.stringify({...values, tasks: values.tasks.split('-')})
          });

          const {routine} = await response.json();

          setRoutines(routines => [...routines, routine])
          
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
    }
    return (
        <FormRoutine
            loading={loading}
            submitRoutine={(e) => submitRoutine(e)}
        />
    );
};

export default AddRoutineForm;
