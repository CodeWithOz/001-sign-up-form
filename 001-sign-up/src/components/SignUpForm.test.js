import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import { SignUpForm } from './SignUpForm';

describe('SignUpForm renders', () => {
  test('a form element', () => {
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  describe('a form element containing', () => {
    test(`a Field component for 'name'`, () => {
      const wrapper = shallow(<SignUpForm />);
      expect(wrapper.find('form').find({ name: 'name' }).length).toEqual(1);
      expect(
        wrapper
          .find('form')
          .find({ name: 'name' })
          .is(Field)
      ).toEqual(true);
    });
  });
});
