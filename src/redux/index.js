import { combineReducers } from "redux";
import LogReducers from "./reducers/logReducers/logReducers";
import TechReducers from "./reducers/techReducers/techReducers";

export default combineReducers({
  log: LogReducers,
  tech: TechReducers,
});
