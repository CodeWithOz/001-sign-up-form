import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import { SignUpForm } from './SignUpForm';
import NameField from './formFields/NameField';
import EmailField from './formFields/EmailField';
import PasswordField from './formFields/PasswordField';
import Button from './Button';

describe('SignUpForm renders', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUpForm />);
  });

  test('a form element', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  describe('a form element containing', () => {
    describe(`a 'name' field that`, () => {
      test('is a Field', () => {
        expect(wrapper.find('form').find({ name: 'name' }).length).toEqual(1);
        expect(
          wrapper
            .find('form')
            .find({ name: 'name' })
            .is(Field)
        ).toEqual(true);
      });

      test('uses a NameField component', () => {
        expect(wrapper.find({ name: 'name' }).prop('component')).toEqual(
          NameField
        );
      });
    });

    describe(`an 'email' field that`, () => {
      test('is a Field', () => {
        expect(wrapper.find('form').find({ name: 'email' }).length).toEqual(1);
        expect(
          wrapper
            .find('form')
            .find({ name: 'email' })
            .is(Field)
        ).toEqual(true);
      });

      test('uses an EmailField component', () => {
        expect(wrapper.find({ name: 'email' }).prop('component')).toEqual(
          EmailField
        );
      });
    });

    describe(`a 'password' field that`, () => {
      test('is a Field', () => {
        expect(wrapper.find('form').find({ name: 'password' }).length).toEqual(
          1
        );
        expect(
          wrapper
            .find('form')
            .find({ name: 'password' })
            .is(Field)
        ).toEqual(true);
      });

      test('uses an PasswordField component', () => {
        expect(wrapper.find({ name: 'password' }).prop('component')).toEqual(
          PasswordField
        );
      });
    });

    test('a Button', () => {
      expect(wrapper.find(Button).length).toEqual(1);
    });
  });
});

describe('SignUpForm correctly passes', () => {
  test('text prop to Button', () => {
    const btnText = 'log in';
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper.find(Button).prop('text')).toEqual(btnText);
  });

  test('icon prop to Button', () => {
    const btnIcon = '\uf054'; // font awesome's chevron-right
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper.find(Button).prop('icon')).toEqual(btnIcon);
  });
});

describe('SignUpForm exposes', () => {
  describe('a handleSubmit method that', () => {
    test('is a function', () => {
      expect(SignUpForm.prototype.handleSubmit).toBeDefined();
      expect(typeof SignUpForm.prototype.handleSubmit).toEqual('function');
    });
  });
});
