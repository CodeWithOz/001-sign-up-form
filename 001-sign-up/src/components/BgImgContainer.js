import React from 'react';
import PropTypes from 'prop-types';

export default function BgImgContainer({ children }) {
  return <section className="BgImgContainer">{children}</section>;
}

BgImgContainer.propTypes = {
  children: PropTypes.node
};
