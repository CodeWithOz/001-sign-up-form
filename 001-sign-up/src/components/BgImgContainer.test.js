import React from 'react';
import { shallow } from 'enzyme';
import BgImgContainer from './BgImgContainer';

describe('BgImgContainer renders', () => {
  test(`its 'children' prop`, () => {
    const children = 'test';
    const wrapper = shallow(<BgImgContainer children={children} />);
    expect(wrapper.children()).toEqual(children);
  });
});
