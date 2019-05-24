import React from 'react';
import GenericInput from './GenericInput';

const nameFieldConfig = {
  placeholder: 'Uche Ozoemena'
};

export default function NameField(props) {
  const newProps = { ...props, placeholder: nameFieldConfig.placeholder };

  return (
    <div>
      <GenericInput {...newProps} />
    </div>
  );
}
