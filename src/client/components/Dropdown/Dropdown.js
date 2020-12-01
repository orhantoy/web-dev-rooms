import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

export default function StudyDropdown() {
  const items = [
    {
      id: '01',
      value: 'Elastic',
    },
    {
      id: '02',
      value: 'Zendesk',
    },
    {
      id: '03',
      value: 'Hack Your Future',
    },
  ];

  const [value, setValue] = useState('Elastic');

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
StudyDropdown.defaultProp = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
