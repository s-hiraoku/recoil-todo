import React from "react";
import { Todo } from "../../../common/types";
import { TodoOutputContainer } from "./TodoOutputContainer";

type TodosOutputPresenterProps = {
  todoIds: number[];
};

export const TodosOutputPresenter: React.FC<TodosOutputPresenterProps> = ({
  todoIds,
}) => {
  return (
    <>
      <div>-------------------------</div>
      <h1>Todoリスト</h1>
      {todoIds.map((todoId) => (
        <TodoOutputContainer todoId={todoId} />
      ))}
    </>
  );
};
