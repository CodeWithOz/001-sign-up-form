import React from 'react';
import { shallow } from 'enzyme';
import EmailField from './EmailField';
import GenericInput from './GenericInput';

describe('EmailField renders', () => {
  test('a GenericInput', () => {
    const wrapper = shallow(<EmailField />);
    expect(wrapper.find(GenericInput).length).toEqual(1);
  });
});
