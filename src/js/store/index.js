import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
export default function configureStore() {
  const middlewears = [thunkMiddleware];
  const store = createStore(() => {
    return {
      message: "hello redux",
      data1: "here is data1 ",
      data2: "here is data2",
    };
  }, applyMiddleware(...middlewears));
  return store;
}
