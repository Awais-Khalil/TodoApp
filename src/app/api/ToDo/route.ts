import { QueryResult } from '@vercel/postgres'
import { NextResponse, NextRequest } from 'next/server'
import { Todo, todoTable, db, NewTodo } from "@/lib/drizzle"
import { sql } from '@vercel/postgres'


export async function GET(request: NextRequest) {


    try {
        await sql`CREATE Table IF NOT EXISTS Todos(id serial, Task varchar(255));`
        const res = await db.select().from(todoTable);

        //  const res = await db.select().from(todoTable).execute();
        //const ress = await client.sql`SELECT * from todos;`
        // console.log(res.rows.find((item) => item.id === 1));
        return NextResponse.json({ data: res })
    } catch (err) {
        console.log((err as { message: string }).message);
        return NextResponse.json({ message: "Something went wrong" });

    }
}

export async function POST(request: NextRequest) {
    //const client = await db.connect();
    const req = await request.json();
    try {
        if (req.task) {

            // const res: QueryResult = await sql`INSERT INTO Todos(Task) VALUES(${req.task})`
            //   console.log(res)
            const res = await db.insert(todoTable).values({
                task: req.task,
            }).returning();

            return NextResponse.json({ message: "Data added successfully", data: res })
        } else {
            throw new Error("Task field is required")
        }
    }
    catch (error) {
        return NextResponse.json({
            message: (error as { message: string }).message
        })
    }

}