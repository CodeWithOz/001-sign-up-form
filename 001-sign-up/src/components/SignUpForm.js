import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function SignUpForm() {
  return (
    <form>
      <Field name="name" component={() => <div>Dummy Field</div>} />
    </form>
  );
}

export default reduxForm({
  form: 'SignUpForm'
})(SignUpForm);
