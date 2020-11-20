import React from 'react';
import PropTypes from 'prop-types';

export const Avatar = (props) => {
  return <div className="all-avatar-images">{props.image}</div>;
};

Avatar.defaultProps = {
  image: PropTypes.image,
};
