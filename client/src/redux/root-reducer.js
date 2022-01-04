import { combineReducers } from "@reduxjs/toolkit";
import { personListReducer } from "./person/person-slice";
import { userReducer } from "./user/user-slice";

const reducers = {
  person: personListReducer,
  user: userReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;