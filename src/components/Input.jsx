import React from "react";

const Input = ({ label, onChange, type ,errors, value, name }) => {
  return (
    <div>
      <label className="text-left">{label}</label>
      <br />
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
      {errors &&  <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
