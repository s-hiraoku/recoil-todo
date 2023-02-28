import { atom, selector } from "recoil";
import { ATOM_KEYS, SELECTOR_KEYS } from "../../common/recoilkeys";
import { Todo } from "../../common/types";

export const todosState = atom({
  key: ATOM_KEYS.todoState,
  default: [
    {
      id: 1,
      title: "テスト1",
      content: "テスト1の内容",
      isCompleted: false,
    },
    {
      id: 2,
      title: "テスト2",
      content: "テスト2の内容",
      isCompleted: false,
    },
  ] as Todo[],
});

export const maxIDSelector = selector<number>({
  key: SELECTOR_KEYS.todoMaxid,
  get: ({ get }) => {
    return get(todosState).length ? get(todosState).slice(-1)[0].id : 0;
  },
});
