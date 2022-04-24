import { LOGIN } from "./action";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...store, login: !store.login };
    default:
      return store;
  }
};
