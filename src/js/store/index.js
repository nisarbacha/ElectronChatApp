import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import chatReducer from "../reducer/chats";

export default function configureStore() {
  const middlewears = [thunkMiddleware];
  const store = createStore(
    combineReducers({
      chats: chatReducer,
    }),
    applyMiddleware(...middlewears)
  );
  return store;
}
