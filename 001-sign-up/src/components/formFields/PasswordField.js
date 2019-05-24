import React from 'react';
import GenericInput from './GenericInput';

const passwordFieldConfig = {
  customProps: {
    placeholder: 'password',
    type: 'password'
  }
};

export default function PasswordField(props) {
  const newProps = { ...props, ...passwordFieldConfig.customProps };

  return <GenericInput {...newProps} />;
}
