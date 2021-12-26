import PersonActionType from "./person.type";
import { getPersonList } from "../../utilis/person.utilis";

const INITIAL_STATE = {
  personList: []
}

const personReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PersonActionType.GET_PERSON:
      return {
        personList: getPersonList("123")
      }

      default:
        return {
          state
        }
  }
} 

export default personReducer;