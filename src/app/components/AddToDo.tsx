"use client"
import { useRouter } from "next/navigation";
import Image from "next/image"
import React, { useState, useTransition } from "react"
import { NewTodo } from '../../lib/drizzle';
const AddToDo = () => {
    const [task, setTask] = useState<NewTodo | null>(null);
    const { refresh } = useRouter();

    const handleSubmit = async () => {
        try {
            if (task) {

                const res = await fetch("/api/ToDo", {
                    method: "POST",
                    body: JSON.stringify({
                        task: task.task
                    })
                })
                console.log(res.ok)
                refresh();
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>

            <form className="w-full flex gap-x-3 ">
                <input

                    onChange={(e) => setTask({ task: e.target.value })}

                    type="text" className="rounded-full w-full py-4 focus:outline-secondary px-5 border" />
                <button type='button' onClick={handleSubmit} className="bg-primary p-3 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary">
                    <Image src={"/vector.png"} width={20} height={20} alt="" />
                </button>
            </form>
        </div>
    )
}

export default AddToDo
