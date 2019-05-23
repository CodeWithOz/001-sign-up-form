import React from 'react';
import { shallow } from 'enzyme';
import BgImgContainer from './BgImgContainer';

describe('BgImgContainer renders', () => {
  test(`its 'children' prop`, () => {
    const children = <div>test</div>;
    const wrapper = shallow(<BgImgContainer>{children}</BgImgContainer>);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
