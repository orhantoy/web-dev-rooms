import React from 'react';
import PropTypes from 'prop-types';
import './Card.styles.css';

export const Card = (props) => {
  return (
    <div className="title-text-card">
      <p className="title">{props.title}</p>
      <p className="text">{props.text}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
