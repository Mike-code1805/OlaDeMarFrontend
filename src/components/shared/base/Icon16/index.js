import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Icon16 = ( props ) => {
  const { width, height, fill, d } = props;

  return (
    <Icon 
      d={d}
      fill={fill}
      width={width} 
      height={height} 
      viewBox="0 0 16 16"
    />
  )
}

Icon16.defaultProps = {
  width: 16,
  height: 16
}

Icon16.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  d: PropTypes.string.isRequired
}

export default Icon16;