import React, { Component } from 'react';
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
  buttonProps: {
    icon: '\uf054',
    text: 'log in'
  }
};

export class SignUpForm extends Component {
  handleSubmit() {}

  render() {
    const { fields, buttonProps } = signUpFormConfig;

    const formFields = fields.map(({ name, component }, index) => (
      <Field name={name} key={index} component={component} />
    ));

    return (
      <form className="SignUpForm">
        {formFields}
        <Button {...buttonProps} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'SignUpForm'
})(SignUpForm);

// TODO:
// 2. set submit handler to toggle submitted state
// 3. change form to Form and use submit handler
// 4. render Form or post-submit note based on submitted state
// 5. style post-submit note
// 6. add ReactCSSTransitionGroup
