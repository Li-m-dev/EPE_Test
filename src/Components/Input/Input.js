import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <input
        className="Form-placeholder"
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;
