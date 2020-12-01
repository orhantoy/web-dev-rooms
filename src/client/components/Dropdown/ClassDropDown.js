import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

export default function ClassDropdown() {
  const items = [
    {
      id: '01',
      value: 'Class14',
    },
    {
      id: '02',
      value: 'Class15',
    },
    {
      id: '03',
      value: 'Class16',
    },
  ];

  const [value, setValue] = useState('Class14');

  return (
    <div className="dropdown-component">
      <select
        className="select-css"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      >
        {items.map((studygroup) => (
          <option
            className="dropdown-option"
            key={studygroup.id}
            value={studygroup.value}
          >
            {studygroup.value}
          </option>
        ))}
      </select>
    </div>
  );
}
ClassDropdown.propType = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
