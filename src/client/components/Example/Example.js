import React from 'react';
import PropTypes from 'prop-types';

import './Example.styles.css';

export const Example = (props) => {
  return (
    <div className="example-component">
      <h2>{props.title}</h2>
      <p className="text">{props.text}</p>
    </div>
  );
};

Example.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Example.defaultProps = {
  text: '',
};
