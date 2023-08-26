import { Todo } from "@/lib/drizzle"
const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/ToDo", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch Data")
        };
        const result = await res.json()
        return result
    } catch (err) {
        console.log(err);
    }
}

const TodoList = async () => {
    const res: { data: Todo[] } = await getData();
    return (
        <div className="max-h-[350px] overflow-auto mb-4">
            {
                res.data.map((item) => {
                    return (
                        <div className="bg-gray-200 shadow my-3 rounded-lg py-4 px-4 flex items-center gap-x-3">
                            <div className="h-3 w-3 bg-secondary rounded-full"> </div>
                            <p className="text-lg font-medium"> {item.task}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TodoList
