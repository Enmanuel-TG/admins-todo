import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {

    await prisma.todo.deleteMany();

    const todo = await prisma.todo.createMany({
      data: [
        {
          description: "This an example 1",
          completed: true,
        },
        {
          description: "This an example 2",
          completed: true,
        },
        {
          description: "This an example 3",
          completed: true,
        },
        {
          description: "This an example 4",
          completed: true,
        },
        {
          description: "This an example 5",
          completed: true,
        },
        {
          description: "This an example 6",
          completed: true,
        },
        {
          description: "This an example 7",
          completed: true,
        },
        {
          description: "This an example 8",
          completed: true,
        },
        {
          description: "This an example 9",
          completed: true,
        },
      ],
    });
    console.log(todo);

    return NextResponse.json({
        message: "Seed have been used",
    })
};