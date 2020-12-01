import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

export default function QuestionDropdown() {
  const items = [
    {
      id: '01',
      value: 'Add Question here',
    },
    {
      id: '02',
      value: 'question2',
    },
    {
      id: '03',
      value: 'question3',
    },
  ];

  const [value, setValue] = useState('Add Question here');

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
QuestionDropdown.propType = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
