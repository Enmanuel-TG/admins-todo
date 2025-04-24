import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import * as yep from "yup";
import { Z_UNKNOWN } from "zlib";

//----------------------------------------------------------------------------------------------------
const schemaValidator = yep.object({
  id: yep.number(),
  description: yep.string().required(),
  completed: yep.boolean().default(false),
});

//----------------------------------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";
  const skip = searchParams.get("skip") ?? "0";

  if (isNaN(Number(take))) {
    return NextResponse.json({ error: "Invalid take value" }, { status: 400 });
  }
  const todos = await prisma.todo.findMany({
    take: Number(take),
    skip: Number(skip),
  });
  return NextResponse.json(todos);
}

//----------------------------------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const body = await schemaValidator.validate(await request.json());
    const { completed, description } = body;
    const todo = await prisma.todo.create({
      data: {
        description: description,
        completed: completed,
      },
    });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

//----------------------------------------------------------------------------------------------------

export async function PUT(request: NextRequest) {
  try {
    const body = await schemaValidator.validate(await request.json());
    const { id, completed, description } = body;

    const todo = await prisma.todo.update({
      where: { id },
      data: {
        description,
        completed,
      },
    });
    return NextResponse.json(todo);
  } catch (error: any) { //TODO fix that=====================================================================
    if (error.code === "P2025") {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
