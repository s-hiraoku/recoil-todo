import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { ATOM_KEYS, SELECTOR_KEYS } from "../../common/recoilkeys";
import { Todo } from "../../common/types";

export const todoIdState = atom<number[]>({
  key: ATOM_KEYS.todoIdState,
  default: [],
});

export const todosState = atomFamily<Todo | null, number>({
  key: ATOM_KEYS.todoState,
  default: null,
});

export const getTodo = selectorFamily<Todo | null, number>({
  key: SELECTOR_KEYS.getTodo,
  get:
    (todoId) =>
    ({ get }) =>
      get(todosState(todoId)),
});
