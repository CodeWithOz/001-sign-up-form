import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import BgImgContainer from './BgImgContainer';
import SignUpForm from './SignUpForm';

describe('App renders', () => {
  test('a BgImgContainer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BgImgContainer).length).toEqual(1);
  });

  test('a SignUpForm inside the BgImgContainer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BgImgContainer).find(SignUpForm).length).toEqual(1);
  });
});
