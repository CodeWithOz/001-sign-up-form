import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button renders', () => {
  test('a button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
