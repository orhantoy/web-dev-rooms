import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default function Input({ classname, placeholder }) {
  return <input className={classname} placeholder={placeholder} />;
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};
