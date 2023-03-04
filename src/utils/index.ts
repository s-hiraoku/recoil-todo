export type mappedConst<T extends string> = {
  [key in T]: key;
};
