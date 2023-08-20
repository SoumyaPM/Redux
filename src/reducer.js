import { BUY_BOOK } from "./constant";

const initialState = {
  books: 20
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return { ...state, books: state.books - 1 };
    default:
      return state;
  }
};
