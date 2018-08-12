import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <input
        className="Form-placeholder"
        // id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;
