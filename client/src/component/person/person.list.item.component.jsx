import React from "react";
import { useNavigate } from "react-router";
import { Image } from "react-bootstrap";
import ButtonComponent from "../../resuable/button/button.component";
import "../../page/person/person.style.scss";

const PersonListItemComponent = ({ num, _id, person_name, person_position, person_level, person_photo, person_path }) => {

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
        <Image src={ `http://localhost:5000/${ person_path }/${ person_photo }` }/>
      </td>
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

