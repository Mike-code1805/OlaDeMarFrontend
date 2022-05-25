import Icon24 from '../base/Icon24';

const d = "M2.4 3H21.6C22.9255 3 24 4.06332 24 5.375V19.625C24 20.9367 22.9255 22 21.6 22H2.4C1.068 22 0 20.9312 0 19.625V5.375C0 4.05687 1.068 3 2.4 3ZM12 11.3125L21.6 5.375H2.4L12 11.3125ZM21.6 8.18937V19.625H2.4V8.18937L12 14.115L21.6 8.18937Z";

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