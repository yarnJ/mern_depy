import React from "react";
import { useNavigate } from "react-router";
import ButtonComponent from "../../resuable/button/button.component";

const PersonListItemComponent = ({ num, _id, person_name, person_position, person_level }) => {

  const navigate = useNavigate();

  const editPerson = () => {
    navigate(`/edit-${ _id }`);
  }

  return(
    <tr className="person-list-item-area">
      <td>{ num + 1 }</td>
      <td>{ person_name }</td>
      <td>{ person_position }</td>
      <td>{ person_level }</td>
      <td>
        <div>
          <ButtonComponent variant="primary" value="Edit" size="sm" onClick={ editPerson }/>
          {' '}
          <ButtonComponent variant="secondary" value="Delete" size="sm"/>
        </div>
      </td>
    </tr>
  )
};

export default PersonListItemComponent;

