import React from 'react';
import { Field, reduxForm } from 'redux-form';
import NameField from './formFields/NameField';
import EmailField from './formFields/EmailField';
import PasswordField from './formFields/PasswordField';
import Button from './Button';

const signUpFormConfig = {
  fields: [
    {
      name: 'name',
      component: NameField
    },
    {
      name: 'email',
      component: EmailField
    },
    {
      name: 'password',
      component: PasswordField
    }
  ],
  button: {
    text: 'log in'
  }
};

export function SignUpForm() {
  const fields = signUpFormConfig.fields.map(({ name, component }, index) => (
    <Field name={name} key={index} component={component} />
  ));

  return (
    <form className="SignUpForm">
      {fields}
      <Button text={signUpFormConfig.button.text} />
    </form>
  );
}

export default reduxForm({
  form: 'SignUpForm'
})(SignUpForm);
