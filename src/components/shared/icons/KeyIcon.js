import Icon24 from '../base/Icon24';

const d = "M24 24V19.2L14.088 9.288C14.292 8.628 14.4 7.932 14.4 7.2C14.4 3.22355 11.1764 0 7.2 0C3.22355 0 0 3.22355 0 7.2C0 11.1764 3.22355 14.4 7.2 14.4C7.932 14.4 8.628 14.292 9.288 14.088L12 16.8H15.6V20.4H19.2V24H24ZM3.6 6C3.6 4.67452 4.67452 3.6 6 3.6C7.32548 3.6 8.4 4.67452 8.4 6C8.4 7.32548 7.32548 8.4 6 8.4C4.67452 8.4 3.6 7.32548 3.6 6Z";

const KeyIcon = ( props ) => {
  const { width, height, fill } = props;
  
  return (
    <Icon24 
      width={width}
      height={height}
      fill={fill}
      d={d}
    />
  )
}

export default KeyIcon;