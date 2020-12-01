import React from 'react';
import PropTypes from 'prop-types';

import './Button.styles.css';

export const Button = (props) => {
  return (
    <button className="button1" type="submit" onClick={props.handleOnClick}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  handleOnClick: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  handleOnClick: '',
};
