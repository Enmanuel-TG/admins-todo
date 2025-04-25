import { Todo } from "@prisma/client";

export const updateTodo = async (id: number, completed: boolean, description: string): Promise<Todo> => {
    const body = { id, completed, description };
    const todo = await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
    return todo;
};