import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button renders', () => {
  test('a button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toEqual(1);
  });

  test(`its 'text' prop`, () => {
    const text = 'test';
    const wrapper = shallow(<Button text={text} />);
    expect(wrapper.text()).toContain(text);
  });
});

describe('Button correctly passes', () => {
  test(`its icon 'prop' to its button as data-icon`, () => {
    const icon = 'test';
    const wrapper = shallow(<Button icon={icon} />);
    expect(wrapper.find('button').prop('data-icon')).toEqual(icon);
  });
});
