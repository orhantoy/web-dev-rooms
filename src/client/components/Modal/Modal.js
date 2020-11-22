import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

export default function Modal({ title }) {
  return (
    <div className="modal-wrapper">
      <div className="modal-header">
        <span className="close-modal-btn">x</span>
      </div>
      <h4 className="modal-title">{title} </h4>
    </div>
  );
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
};
