import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './DropDown.css';

export default function SkillDropdown() {
  const items = [
    {
      id: '01',
      value: 'HTML/CSS',
    },
    {
      id: '02',
      value: 'Firebase',
    },
    {
      id: '03',
      value: 'Javascript',
    },
    {
      id: '04',
      value: 'MYSQL',
    },
    {
      id: '05',
      value: 'NodeJS',
    },
    {
      id: '06',
      value: 'React',
    },
    {
      id: '07',
      value: 'Typescript',
    },
  ];

  const [value, setValue] = useState('Add Skills here');

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

SkillDropdown.defaultProp = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
