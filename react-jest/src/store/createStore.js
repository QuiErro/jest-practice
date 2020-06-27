import { createStore, combineReducers } from "redux";
import { reducer as todoReducer } from "../containers/TodoList/store";

const reducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(),
);

export default store;
