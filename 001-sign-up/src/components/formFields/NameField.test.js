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
