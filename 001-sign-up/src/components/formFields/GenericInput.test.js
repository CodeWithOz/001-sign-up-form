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

  test(`its 'placeholder' prop to the input element`, () => {
    const placeholder = 'test';
    const wrapper = shallow(<GenericInput placeholder={placeholder} />);
    expect(wrapper.find('input').prop('placeholder')).toEqual(placeholder);
  });

  test(`its 'type' prop to the input element`, () => {
    const type = 'test';
    const wrapper = shallow(<GenericInput type={type} />);
    expect(wrapper.find('input').prop('type')).toEqual(type);
  });
});
