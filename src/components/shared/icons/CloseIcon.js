import Icon16 from '../base/Icon16';

const d = "M6.22222 8L0 1.77778L1.77778 0L8 6.22222L14.2222 0L16 1.77778L9.77778 8L16 14.2222L14.2222 16L8 9.77778L1.77778 16L0 14.2222L6.22222 8Z";

const CloseIcon = ( props ) => {
  const { width, height, fill } = props;
  
  return (
    <Icon16 
      width={width}
      height={height}
      fill={fill}
      d={d}
    />
  )
}

export default CloseIcon;