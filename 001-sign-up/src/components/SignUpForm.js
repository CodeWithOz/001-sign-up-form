import React from 'react';
import { Field, reduxForm } from 'redux-form';
import NameField from './formFields/NameField';
import EmailField from './formFields/EmailField';

const signUpFormConfig = {
  fields: [
    {
      name: 'name',
      component: NameField
    },
    {
      name: 'email',
      component: EmailField
    }
  ]
};

export function SignUpForm() {
  const fields = signUpFormConfig.fields.map(({ name, component }, index) => (
    <Field name={name} key={index} component={component} />
  ));

  return <form className="sign-up-form">{fields}</form>;
}

export default reduxForm({
  form: 'SignUpForm'
})(SignUpForm);
