import React from 'react';
import GenericInput from './GenericInput';

const passwordFieldConfig = {
  customProps: {
    id: 'password',
    labelIndicator: '\uf023',
    placeholder: 'password',
    required: true,
    type: 'password'
  }
};

export default function PasswordField(props) {
  const newProps = { ...props, ...passwordFieldConfig.customProps };

  return <GenericInput {...newProps} />;
}
