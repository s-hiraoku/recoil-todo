import { useGetTodoAction } from "../../../hooks/useGetTodoAction";
import { useTodoAction } from "../../../hooks/useTodoAction";
import { TodoOutputPresenter } from "./TodoOutputPresenter";

type TodoOutputContainerProps = {
  todoId: number;
};

export const TodoOutputContainer: React.FC<TodoOutputContainerProps> = ({
  todoId,
}) => {
  const { useGetTodo } = useGetTodoAction();
  const { removeTodo, toggleComplete } = useTodoAction();

  const todo = useGetTodo(todoId);

  const args = {
    todo,
    removeTodo,
    toggleComplete,
  };

  return <TodoOutputPresenter {...args} />;
};
