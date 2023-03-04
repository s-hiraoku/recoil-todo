import { mappedConst } from "../utils";

export type AtomKeys = "todoState" | "todoIdState";
export type SelectorKeys = "getTodo";

export const ATOM_KEYS: mappedConst<AtomKeys> = {
  todoState: "todoState",
  todoIdState: "todoIdState",
};

export const SELECTOR_KEYS: mappedConst<SelectorKeys> = {
  getTodo: "getTodo",
};
