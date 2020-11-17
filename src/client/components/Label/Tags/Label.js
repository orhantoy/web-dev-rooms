import React from 'react';
import PropTypes from 'prop-types';
import './label.style.css';

const Labels = ({ text }) => <label className="button">{text}</label>;

// Expected prop values
Labels.propTypes = {
  text: PropTypes.string,
};

// Default prop values
Labels.defaultProps = {
  text: 'HTML/CSS',
};

export default Labels;
