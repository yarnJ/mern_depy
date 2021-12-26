import { combineReducers } from "redux";
import personReducer from "./person/person.reducer";

export default combineReducers({
  person: personReducer
});