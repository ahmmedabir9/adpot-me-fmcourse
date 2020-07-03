import { combineReducers } from "redux";
import location from "./location";
import theme from "./theme";

const rootReducer = combineReducers({
  location,
  theme,
});

export default rootReducer;
