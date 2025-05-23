"use client";
import { Todo } from "@prisma/client";
import styles from "./TodosItems.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: number, completed: boolean, description: string) => Promise<Todo>;
}

export const TodosItem = ({ todo, toggleTodo }: Props) => {
  const { description, completed } = todo;
  return (
    <div className={completed ? styles.todoDone : styles.todoPending}>
      <div
        onClick={() => toggleTodo(todo.id, !todo.completed, description)}
        className={`flex p-2 items-center gap-3 rounded-b-md cursor-pointer hover:bg-opacity-60  ${
          completed ? "bg-red-100" : "bg-blue-100"
        } `}
      >
        {completed ? (
          <IoCheckboxOutline size={30} />
        ) : (
          <IoSquareOutline size={30} />
        )}
        <div className="text-center sm:text-left">{description}</div>
      </div>
    </div>
  );
};
