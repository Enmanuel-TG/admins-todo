import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata = {
  title: "Todos",
  description: "Todos",
};

const page = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return <TodosGrid todos={todos} />;
};

export default page;
