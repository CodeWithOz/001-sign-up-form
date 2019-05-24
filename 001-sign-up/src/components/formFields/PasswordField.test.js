import React from 'react';
import { shallow } from 'enzyme';
import PasswordField from './PasswordField';
import GenericInput from './GenericInput';

describe('PasswordField renders', () => {
  test('a GenericInput', () => {
    const wrapper = shallow(<PasswordField />);
    expect(wrapper.find(GenericInput).length).toEqual(1);
  });
});
