import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleWare from "redux-thunk";
import rootReducers from "./index";

const initialState = {};
const loggerMiddleWare = createLogger();

const middlewares = [thunkMiddleWare];

if (process.env.NODE_ENV === "development") {
  middlewares.push(loggerMiddleWare);
}

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
