import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default function Input(prop) {
  const [value, setValue] = useState();

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <input
      className="input-components"
      value={value}
      onChange={onChange}
      placeholder={prop.text}
    />
  );
}

Input.propType = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.fun,
};
