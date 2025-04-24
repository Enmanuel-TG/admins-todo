import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(context: Segments) {
  const { id } = context.params;

  const todo = await prisma.todo.findFirst({ where: { id: Number(id) } });

  if (!todo) {
    return NextResponse.json(
      {
        status: 404,
        message: "Todo not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}
