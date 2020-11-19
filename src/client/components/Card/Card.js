import React from 'react';
// import PropTypes from 'prop-types';
import './Card.styles.css';

const Card = (props) => {
  const { title, text } = props;
  return (
    <div className="title-text-card">
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
};
export default Card;
