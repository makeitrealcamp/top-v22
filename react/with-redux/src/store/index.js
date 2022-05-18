import { createStore } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

export const store = createStore(reducer, initialState);
