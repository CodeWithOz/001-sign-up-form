import React from 'react';
import GenericInput from './GenericInput';

const nameFieldConfig = {
  customProps: {
    id: 'name',
    placeholder: 'Uche Ozoemena',
    required: true,
    type: 'text'
  }
};

export default function NameField(props) {
  const newProps = { ...props, ...nameFieldConfig.customProps };

  return <GenericInput {...newProps} />;
}
