"use client";

import { Todo } from "@prisma/client";
import { TodosItem } from "./TodosItem";
import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {

  const router = useRouter();


  const toggleTodo = async (
    id: number,
    completed: boolean,
    description: string
  ) => {
    const updateTodos = todosApi.updateTodo(id, completed, description);
    router.refresh();
    return updateTodos;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
      {todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
