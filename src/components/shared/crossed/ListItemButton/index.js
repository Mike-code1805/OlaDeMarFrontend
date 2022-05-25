import React from 'react';
import PropTypes from 'prop-types';
import OptionsIcon from 'src/components/shared/icons/OptionsIcon';
import { classNames } from 'src/components/utils/classNames';
import styles from './styles.module.scss';

const ListItemButton = ({ IconCmp, title, text, handleClick, className }) => {
  return (
    <div className={classNames({
      [styles['ListItemButton']]: true,
      [className]: !!className
    })}>
      <button 
        onClick={handleClick}
        className={styles['ListItemButton__button']}
      >
        <span className={styles['ListItemButton__icon']}><IconCmp /></span>
        <span className={styles['ListItemButton__title']}>{ title }</span>
        <span className={styles['ListItemButton__text']}>{ text }</span>
        <span className={styles['ListItemButton__arrow']}>
          <OptionsIcon width={16} height={16} fill="#000000"/>
        </span>
      </button>
    </div>
  )
}

ListItemButton.defaultProps = {
  handleClick: () => {}
}

ListItemButton.propTypes = {
  IconCmp: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func
} 

export default ListItemButton;