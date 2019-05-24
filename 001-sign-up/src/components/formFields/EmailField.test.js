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

describe('EmailField correctly passes', () => {
  test('all its props to its GenericInput', () => {
    const props = { test: 'value', test2: 'value2' };
    const wrapper = shallow(<EmailField {...props} />);
    const genWrapper = wrapper.find(GenericInput);
    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        expect(genWrapper.prop(prop)).toEqual(props[prop]);
      }
    }
  });
});
