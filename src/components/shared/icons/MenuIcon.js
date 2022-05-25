import PropTypes from 'prop-types';

const MenuIcon = ( props ) => {
  const { width, height, fill } = props;
  
  return (
    <svg 
      width={width}
      height={height}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="15" width="24" height="2.5" fill={fill}/>
      <rect y="7" width="24" height="2.5" fill={fill}/>
    </svg>
  )
}

MenuIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: "#503E9D"
}

MenuIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default MenuIcon;