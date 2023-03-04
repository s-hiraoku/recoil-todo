import { useRecoilCallback } from "recoil";
import { Todo } from "../common/types";
import { todoIdState, todosState } from "../features/todos/todoState";

let id = 1;
const getId = () => {
  return id++;
};

export const useTodoAction = () => {
  const addTodo = useRecoilCallback(
    ({ set }) =>
      (title: string, content: string) => {
        const newTodo: Todo = {
          id: getId(),
          title: title,
          content: content,
          isCompleted: false,
        };
        set(todoIdState, (prev) => [...prev, newTodo.id]);
        set(todosState(newTodo.id), newTodo);
      },
    []
  );
  const removeTodo = useRecoilCallback(
    ({ set, reset }) =>
      (targetId: number) => {
        set(todoIdState, (prev) => prev.filter((id) => id !== targetId));
        reset(todosState(targetId));
      },
    []
  );
  const toggleComplete = useRecoilCallback(
    ({ set }) =>
      (targetId: number) => {
        set(todosState(targetId), (todo) => {
          if (!todo) return null;
          return { ...todo, isCompleted: !todo.isCompleted };
        });
      },
    []
  );

  return {
    addTodo,
    removeTodo,
    toggleComplete,
  };
};
