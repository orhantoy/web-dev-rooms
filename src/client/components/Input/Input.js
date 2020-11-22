import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default function Input({ placeholder }) {
  return <input placeholder={placeholder} />;
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
