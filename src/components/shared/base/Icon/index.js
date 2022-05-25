import PropTypes from 'prop-types';

const Icon = ( props ) => {
  const { viewBox, width, height, fill, d } = props;

  return (
    <svg 
      fill="none" 
      width={width} 
      height={height} 
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd"
        fill={fill}
        d={d}
      />
    </svg>
  )
}

Icon.defaultProps = {
  fill: "#503E9D",
}

Icon.propTypes = {
  fill: PropTypes.string,
  d: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  viewBox: PropTypes.string.isRequired,
}

export default Icon;