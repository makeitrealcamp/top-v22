import { createStore, combineReducers } from "redux";
import countReducer from "./reducers/Count.reducer";
import textReducer from "./reducers/Text.reducer";

const rootReducer = combineReducers({
  textReducer,
  countReducer,
});

// const state = {
//   textReducer:{
//     text: ""
//   },
//   countReducer:{
//     count: 0
//   }
// }

export const store = createStore(rootReducer);
