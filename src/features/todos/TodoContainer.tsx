import { useRecoilState, useRecoilValue } from "recoil";
import { Todo } from "../../common/types";
import { TodoPresenter } from "./TodoPresenter";
import { maxIDSelector, todosState } from "./todoState";

export const TodoContainer = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const maxID = useRecoilValue(maxIDSelector);

  const addTodo = (title: string, content: string) => {
    const newTodo: Todo = {
      id: maxID + 1,
      title: title,
      content: content,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const toggleComplete = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  const args = {
    todos,
    addTodo,
    removeTodo,
    toggleComplete,
  };
  return <TodoPresenter {...args} />;
};
