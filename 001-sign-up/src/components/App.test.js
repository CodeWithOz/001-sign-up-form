import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import BgImgContainer from './BgImgContainer';

describe('App renders', () => {
  test('a BgImgContainer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BgImgContainer).length).toEqual(1);
  });
});
