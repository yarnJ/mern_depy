import React from "react";
import { Form } from "react-bootstrap";

const PersonCategoryComponent = ({ handleChange }) => {
  return (
    <div className="person-category-area">
      <Form style={{ display: "flex" }}>
        {["Intern", "Junior", "Senior"].map((category, index) => (
          <div key={`inline-${index}`} className="mb-3">
            <Form.Check
              inline
              label={category}
              name="group1"
              type="radio"
              id={index + 1}
              value={category}
              onClick={() => handleChange(category)}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default PersonCategoryComponent;
