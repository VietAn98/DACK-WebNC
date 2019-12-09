import { combineReducers } from "redux";
import * as rtReducer from "./index";

const rootReducer = combineReducers({
  ...rtReducer
});

export default rootReducer;
