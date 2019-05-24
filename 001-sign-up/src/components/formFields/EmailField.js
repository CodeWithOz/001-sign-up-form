import React from 'react';
import GenericInput from './GenericInput';

const emailFieldConfig = {
  customProps: {
    id: 'email',
    placeholder: 'example@mail.com',
    required: true,
    type: 'email'
  }
};

export default function EmailField(props) {
  const newProps = { ...props, ...emailFieldConfig.customProps };

  return <GenericInput {...newProps} />;
}
