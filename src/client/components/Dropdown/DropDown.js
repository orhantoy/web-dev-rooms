import React, { useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import './DropDown.css';

export default function DropDown(props) {
  const [values, setValue] = useState('');

  return (
    <div className="dropdown-component">
      <select
        className="select-css"
        value={values}
        onChange={(e) => setValue(e.currentTarget.value)}
      >
        {props.items.map((item) => (
          <option className="dropdown-option" key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
DropDown.propTypes = {
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

DropDown.defaultProps = {
  items: [],
};
