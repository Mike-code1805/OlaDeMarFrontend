import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Icon24 = ( props ) => {
  const { width, height, fill, d } = props;

  return (
    <Icon 
      d={d}
      fill={fill}
      width={width} 
      height={height} 
      viewBox="0 0 24 24"
    />
  )
}

Icon24.defaultProps = {
  width: 24,
  height: 24
}

Icon24.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  d: PropTypes.string.isRequired
}

export default Icon24;