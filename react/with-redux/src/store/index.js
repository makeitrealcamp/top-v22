import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countReducer from "./reducers/Count.reducer";
import textReducer from "./reducers/Text.reducer";
import postsReducer from "./reducers/Posts.reducer";

// function logger(store) {
//   console.log("store", store);
//   return function (next) {
//     //next permite al middleware pasar al siguiente paso
//     return function (action) {
//       console.log("action", action, "current state:", store.getState());
//       const result = next(action);
//       console.log("next state:", store.getState());
//       return result;
//     };
//   };
// }

const rootReducer = combineReducers({
  textReducer,
  countReducer,
  postsReducer,
});

// const state = {
//   textReducer:{
//     text: ""
//   },
//   countReducer:{
//     count: 0
//   }
// }

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
