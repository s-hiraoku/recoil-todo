import { useGetTodoAction } from "../../../hooks/useGetTodoAction";
import { TodosOutputPresenter } from "../presenter/TodosOutputPresenter";

export const TodosOutputContainer = () => {
  const { todoIds } = useGetTodoAction();
  return <TodosOutputPresenter todoIds={todoIds} />;
};
