import { useRecoilValue } from "recoil";
import { getTodo, todoIdState } from "../features/todos/todoState";

export const useGetTodoAction = () => {
  const todoIds = useRecoilValue(todoIdState);

  const useGetTodo = (todoId: number) => useRecoilValue(getTodo(todoId));

  return { todoIds, useGetTodo };
};
