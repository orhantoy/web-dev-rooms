// working with dumb/statless component with no props

import React from 'react';
import './AppHeader.style.css'; // css for the div not for the img
import Vector from './Vector.svg'; // css and propreties come directly within the svg file

export const AppHeader = () => {
  return (
    <div className="AppHeader-div">
      <img src={Vector} alt="AppHeader" />
    </div>
  );
};

/*

// dumb/statless img component with props

import React from 'react';
import './AppHeader.style.css';
import PropTypes from 'prop-types';

export const AppHeader = (props) => {
  return (
    <div className="AppHeader-div">
      <img src={props.path} alt="AppHeader" />
    </div>
  );
};
AppHeader.propTypes = {
  path: PropTypes.string,
};

AppHeader.defaultProps = {
  path: '',
};
 */
