import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

export default function Input({ className, placeholder }) {
  return <input className={className} placeholder={placeholder} />;
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
