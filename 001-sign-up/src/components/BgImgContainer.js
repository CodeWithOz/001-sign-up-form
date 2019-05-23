import React from 'react';
import PropTypes from 'prop-types';

export default function BgImgContainer({ children }) {
  return <section className="bg-img-container">{children}</section>;
}

BgImgContainer.propTypes = {
  children: PropTypes.node
};
