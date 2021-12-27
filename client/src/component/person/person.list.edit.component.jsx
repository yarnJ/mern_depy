import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetPersonListByid, asyncEditPersonList } from "../../redux/person/person-slice";
import FormInputComponent from "../../resuable/form-input/formInput.component";
import ButtonComponent from "../../resuable/button/button.component";
import PersonCategoryComponent from "../create/person.category.component";

const PersonListEditComponent = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [person_name, setpersonName] = useState("");
  const [person_position, setpersonPosition] = useState("");
  const [person_level, setpersonCategory] = useState("");
  const level_id = location.pathname.slice(6)
  const personListById = useSelector((state) => state.person.personListById);

  useEffect(() => {
    dispatch(asyncGetPersonListByid(level_id));
  }, [])

  const handleChange = (category) => {
    setpersonCategory(category);
  };

  const editperson = () => {
    if(person_name !== "" && person_position !== "" && person_level !== "") {
      const editPerson = {level_id, 
        editPerson: {
          person_name, person_position, person_level
        }
      };
      
      dispatch(asyncEditPersonList(editPerson));
  
      navigate("/");
    } else {
      alert("Confirm ");
    }
  }

  if(personListById === [] || personListById === null) {
    return(
      <div>no data...</div>
    )
  } else {
    return (
      <div className="person-list-edit-area">
        <FormInputComponent
          label="Name of the person"
          onChange={(e) => setpersonName(e.target.value)}
          placeholder={personListById.person_name}
        ></FormInputComponent>

        <FormInputComponent
          label="Person's position"
          onChange={(e) => setpersonPosition(e.target.value)}
          placeholder={personListById.person_position}
        ></FormInputComponent>

        <div className="person-category-side">
          <PersonCategoryComponent handleChange={handleChange}/>
        </div>

        <ButtonComponent
          variant="outline-success"
          value="Edit person"
          onClick={editperson}
        ></ButtonComponent>
      </div>
    )
  }
};

export default PersonListEditComponent;