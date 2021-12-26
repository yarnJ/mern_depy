import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerson } from "../../redux/person/person.action";

const PersonListComponent = () => {

  const dispatch = useDispatch();
  const [personList, setpersonList] = useState([]);
  const personData = useSelector(state => state.person.personList);
  console.log(personData);

  useEffect(() => {
    dispatch(getPerson());
    setpersonList(personData);
    console.log(personList);
  }, []);

  if(personData === [] || personData === null) {
    return (
      <div>no data</div>
    )
  } else {
    return(
      <div className="person-list-area">
        {personData.map((list, index) => (
          <p>{list.person_name}</p>
        ))}
      </div>
    )
  }
  
};

export default PersonListComponent;