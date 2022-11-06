import React from "react";
import "./form.css";

const Form = (props) => {
  return (
    <div className="formInput">
      {/* <label>username</label> */}
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default Form;
