import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

const bgImgContainerConfig = {
  transitionGroupProps: {
    transitionName: 'form-submittal',
    transitionEnterTimeout: 500
  }
};

export default function BgImgContainer({ children }) {
  const { transitionGroupProps } = bgImgContainerConfig;

  return (
    <section className="BgImgContainer">
      <CSSTransitionGroup {...transitionGroupProps}>
        {children}
      </CSSTransitionGroup>
    </section>
  );
}

BgImgContainer.propTypes = {
  children: PropTypes.node
};
