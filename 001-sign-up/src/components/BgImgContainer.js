import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

export default function BgImgContainer({ children }) {
  return (
    <section className="BgImgContainer">
      <CSSTransitionGroup>{children}</CSSTransitionGroup>
    </section>
  );
}

BgImgContainer.propTypes = {
  children: PropTypes.node
};
