import React from 'react';
import { shallow } from 'enzyme';
import NameField from './NameField';
import GenericInput from './GenericInput';

describe('NameField renders', () => {
  test('a GenericInput', () => {
    const wrapper = shallow(<NameField />);
    expect(wrapper.find(GenericInput).length).toEqual(1);
  });
});

describe('NameField correctly passes', () => {
  test('all its props to its GenericInput', () => {
    const props = { test: 'value', test2: 'value2' };
    const wrapper = shallow(<NameField {...props} />);
    expect(wrapper.find(GenericInput).props()).toEqual(props);
  });
});
