import React from 'react';
import GenericInput from './GenericInput';

const emailFieldConfig = {
  customProps: {
    placeholder: 'Uche Ozoemena'
  }
};

export default function EmailField(props) {
  const newProps = { ...props, ...emailFieldConfig.customProps };

  return <GenericInput {...newProps} />;
}
