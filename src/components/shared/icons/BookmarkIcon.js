import Icon24 from '../base/Icon24';

const d = "M5.57143 0H18.4286C19.8429 0 21 1.18667 21 2.66667V24L12 20L3 24V2.66667C3 1.19391 4.15127 0 5.57143 0ZM12 17.0933L18.4286 20V2.66667H5.57143V20L12 17.0933Z";

const BookmarkIcon = ( props ) => {
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

export default BookmarkIcon;