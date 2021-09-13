import { combineReducers } from "redux";
import LogReducers from "./reducers/logReducers/logReducers";

export default combineReducers({
  log: LogReducers,
});
