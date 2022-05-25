import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'src/components/utils/classNames';
import styles from './styles.module.scss';

const MenuButton = ( props ) => {
  const { IconCmp, handleClick, className } = props;

  return (
    <button 
      onClick={handleClick}
      className={classNames({
        [styles['IconButton']]: true,
        [className]: !!className
      })}
    >
      <IconCmp />
    </button>
  )
}

MenuButton.defaultProps = {
  handleClick: () => {}
}

MenuButton.propTypes = {
  handleClick: PropTypes.func,
  className: PropTypes.string,
  IconCmp: PropTypes.func.isRequired
}


export default MenuButton;