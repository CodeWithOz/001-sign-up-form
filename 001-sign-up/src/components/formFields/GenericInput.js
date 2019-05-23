import React from 'react';

// this component receives props from redux-form so I won't
// specify the prop types
export default function GenericInput({ input }) {
  return <input {...input} />;
}
