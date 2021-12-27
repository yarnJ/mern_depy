import React from "react";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllPesonList } from "../../redux/person/person-slice";
import PersonListItemComponent from "./person.list.item.component";

const PersonListComponent = () => {

  const dispatch = useDispatch();
  const personList = useSelector(state => state.person.all_personList);

  useEffect(() => {
    dispatch(asyncGetAllPesonList());
  }, []);

  if(personList === [] || personList === null) {
    return (
      <div>no data</div>
    )
  } else {
    return(
      <div className="person-list-area">
        <Table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {personList.map(({id, ...otherPersonListComponentProps}, index) => (
            <PersonListItemComponent key={ index } { ...otherPersonListComponentProps } num = { index }/>
          ))}
        </tbody>
        </Table>
      </div>
    )
  }
  
};

export default PersonListComponent;