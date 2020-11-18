import React from 'react';
import './Button.css';

const Button = ({ children, click }) => {
  const clicked = () => {
    click();
  };
  return (
    <button type="submit" className="button" onClick={clicked}>
      {children}
    </button>
  );
};
export default Button;
