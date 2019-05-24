import React from 'react';
import { Field, reduxForm } from 'redux-form';
import NameField from './formFields/NameField';

export function SignUpForm() {
  return (
    <form className="sign-up-form">
      <Field name="name" component={NameField} />
    </form>
  );
}

export default reduxForm({
  form: 'SignUpForm'
})(SignUpForm);
