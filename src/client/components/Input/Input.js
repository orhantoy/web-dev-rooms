import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default function Input(props) {
  const [value, setValue] = useState();

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <input
      className="input-component"
      value={value}
      onChange={onChange}
      placeholder={props.placeholder}
    />
  );
}
Input.propType = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
