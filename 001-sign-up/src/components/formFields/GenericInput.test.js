import React from 'react';
import { shallow } from 'enzyme';
import GenericInput from './GenericInput';

describe('GenericInput renders', () => {
  test('an input element', () => {
    const wrapper = shallow(<GenericInput />);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
