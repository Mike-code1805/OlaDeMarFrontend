import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Icon20 = ( props ) => {
  const { width, height, fill, d } = props;

  return (
    <Icon 
      d={d}
      fill={fill}
      width={width} 
      height={height} 
      viewBox="0 0 20 20"
    />
  )
}

Icon20.defaultProps = {
  width: 20,
  height: 20
}

Icon20.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  d: PropTypes.string.isRequired
}

export default Icon20;