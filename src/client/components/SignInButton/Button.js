import React from 'react';
import './Button.css';
import slackLogo from './Images/slack-logo.png';

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  // eslint-disable-next-line react/button-has-type
  return (
    // eslint-disable-next-line react/button-has-type
    <button className="button">
      <img src={slackLogo} alt="logo" />
      {children}
    </button>
  );
};
export default Button;
