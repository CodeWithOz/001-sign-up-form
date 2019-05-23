import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm';

describe('SignUpForm renders', () => {
  test('a form element', () => {
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper.find('form').length).toEqual(1);
  });
});
