import React from 'react';
import './heading.style.css';

const Header = ({ children }) => {
  return <h2 className="header">{children}</h2>;
};

export default Header;
