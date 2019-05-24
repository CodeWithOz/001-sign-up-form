import React from 'react';
import PropTypes from 'prop-types';

// this component receives some props from redux-form so I won't
// specify them in the prop types
export default function GenericInput({ input, meta, ...customProps }) {
  return <input {...input} {...customProps} />;
}

GenericInput.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string
};
