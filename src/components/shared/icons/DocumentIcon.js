import Icon24 from '../base/Icon24';

const d = "M2.66667 0C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.8133 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8133 24 21.3333V2.66667C24 1.18667 22.8133 0 21.3333 0H2.66667ZM2.66667 2.66667H21.3333V21.3333H2.66667V2.66667ZM5.33333 8V5.33333H18.6667V8H5.33333ZM5.33333 10.6667V13.3333H18.6667V10.6667H5.33333ZM5.33333 18.6667V16H14.6667V18.6667H5.33333Z";

const DocumentIcon = ( props ) => {
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

export default DocumentIcon;