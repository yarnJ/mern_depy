import { combineReducers } from "@reduxjs/toolkit";
import { personListReducer } from "./person/person-slice";

const reducers = {
  person: personListReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;