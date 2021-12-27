import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllPesonList } from "../../redux/person/person-slice";

const PersonListComponent = () => {

  const dispatch = useDispatch();
  const personList = useSelector(state => state.person.all_personList);

  useEffect(() => {
    dispatch(asyncGetAllPesonList("123213213"));
  }, []);

  if(personList === [] || personList === null) {
    return (
      <div>no data</div>
    )
  } else {
    return(
      <div className="person-list-area">
        {personList.map((list, index) => (
          <p>{list.person_name}</p>
        ))}
      </div>
    )
  }
  
};

export default PersonListComponent;