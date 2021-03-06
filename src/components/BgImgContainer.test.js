import React from 'react';
import { shallow } from 'enzyme';
import { CSSTransitionGroup } from 'react-transition-group';
import BgImgContainer from './BgImgContainer';

describe('BgImgContainer renders', () => {
  test(`its 'children' prop`, () => {
    const children = <div>test</div>;
    const wrapper = shallow(<BgImgContainer>{children}</BgImgContainer>);
    expect(wrapper.find('div').length).toEqual(1);
  });

  test('a CSSTransitionGroup', () => {
    const wrapper = shallow(<BgImgContainer />);
    expect(wrapper.find(CSSTransitionGroup).length).toEqual(1);
  });
});

describe('BgImgContainer correctly passes', () => {
  describe('CSSTransitionGroup a prop for', () => {
    test('transitionName', () => {
      const transitionName = 'form-submittal';
      const wrapper = shallow(<BgImgContainer />);
      expect(wrapper.find(CSSTransitionGroup).prop('transitionName')).toEqual(
        transitionName
      );
    });

    test('transitionEnterTimeout', () => {
      const transitionEnterTimeout = 500;
      const wrapper = shallow(<BgImgContainer />);
      expect(
        wrapper.find(CSSTransitionGroup).prop('transitionEnterTimeout')
      ).toEqual(transitionEnterTimeout);
    });

    test('transitionLeaveTimeout', () => {
      const transitionLeaveTimeout = 300;
      const wrapper = shallow(<BgImgContainer />);
      expect(
        wrapper.find(CSSTransitionGroup).prop('transitionLeaveTimeout')
      ).toEqual(transitionLeaveTimeout);
    });
  });
});
