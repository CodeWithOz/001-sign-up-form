import React from 'react';
import GenericInput from './GenericInput';

const nameFieldConfig = {
  customProps: {
    placeholder: 'Uche Ozoemena',
    type: 'text'
  }
};

export default function NameField(props) {
  const newProps = { ...props, ...nameFieldConfig.customProps };

  return (
    <div>
      <GenericInput {...newProps} />
    </div>
  );
}
