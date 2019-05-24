import React from 'react';
import PropTypes from 'prop-types';

// this component receives some props from redux-form so I won't
// specify them in the prop types
export default function GenericInput({ input, meta, ...customProps }) {
  const { labelIndicator, ...forInput } = customProps;

  return (
    <div className="generic-input">
      <label htmlFor={customProps.id} data-label-indicator={labelIndicator} />
      <input {...input} {...forInput} />
    </div>
  );
}

GenericInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string
};
