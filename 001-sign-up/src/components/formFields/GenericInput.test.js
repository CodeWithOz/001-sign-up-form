import React from 'react';
import { shallow } from 'enzyme';
import GenericInput from './GenericInput';

describe('GenericInput renders', () => {
  test('an input element', () => {
    const wrapper = shallow(<GenericInput />);
    expect(wrapper.find('input').length).toEqual(1);
  });
});

describe('GenericInput correctly passes', () => {
  test(`its 'input' prop to the input element`, () => {
    const inputProps = { test: 'test' };
    const wrapper = shallow(<GenericInput input={inputProps} />);
    expect(wrapper.find('input').props()).toEqual(inputProps);
  });
});
