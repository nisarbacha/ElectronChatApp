import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import chatReducer from "../reducer/chats";
import authReducer from "../reducer/auth";

export default function configureStore() {
  const middlewears = [thunkMiddleware];
  const store = createStore(
    combineReducers({
      chats: chatReducer,
      auth: authReducer
    }),
    applyMiddleware(...middlewears)
  );
  return store;
}
