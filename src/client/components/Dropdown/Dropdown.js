import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

export function DropDown({ title }) {
  return (
    <select>
      <option selected value="class">
        {title}
      </option>
    </select>
  );
}
export function StudyGroup({ title }) {
  return (
    <select>
      <option selected value="class">
        {title}
      </option>
      <option>Zendesk</option>
      <option>Hack Your Future</option>
    </select>
  );
}

export function Skills({ title }) {
  return (
    <select>
      <option selected value="class">
        {title}
      </option>
      <option>HTML/CSS</option>
      <option>Javascript</option>
      <option>MYSQL</option>
      <option>NodeJs</option>
      <option>React</option>
      <option>Typescript</option>
    </select>
  );
}
DropDown.propTypes = {
  title: PropTypes.string.isRequired,
};
StudyGroup.propTypes = {
  title: PropTypes.string.isRequired,
};
Skills.propTypes = {
  title: PropTypes.string.isRequired,
};
