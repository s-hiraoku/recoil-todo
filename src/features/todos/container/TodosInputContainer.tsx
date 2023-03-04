import { useTodoAction } from "../../../hooks/useTodoAction";
import { TodosInputPresenter } from "../presenter/TodosInputPresenter";

export const TodosInputContainer = () => {
  const { addTodo } = useTodoAction();
  return <TodosInputPresenter addTodo={addTodo} />;
};
