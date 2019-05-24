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

describe('EmailField correctly passes', () => {
  test('all its props to its GenericInput', () => {
    const props = { test: 'value', test2: 'value2' };
    const wrapper = shallow(<PasswordField {...props} />);
    const genWrapper = wrapper.find(GenericInput);
    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        expect(genWrapper.prop(prop)).toEqual(props[prop]);
      }
    }
  });

  test('a placeholder prop to its GenericInput', () => {
    const wrapper = shallow(<PasswordField />);
    expect(wrapper.find(GenericInput).prop('placeholder')).toEqual(
      expect.any(String)
    );
    expect(
      wrapper.find(GenericInput).prop('placeholder').length
    ).toBeGreaterThan(0);
  });
});
