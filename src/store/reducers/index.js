import { combineReducers } from "redux";
import tweets from "./tweets";
import modals from "./modals";

export default combineReducers({
  tweets,
  modals
});
