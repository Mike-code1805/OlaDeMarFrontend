import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'src/components/utils/classNames';
import AppContext from 'src/components/context/app/app.context';
import styles from './styles.module.scss';

const SidebarItem = ({ Icon, text, counter, handleClick, index }) => {
  const { sidebarIsOpen, sidebarIndex } = useContext(AppContext);

  return (
    <li className={classNames({
      [styles['SidebarItem']]: true,
      [styles['SidebarItem--open']]: sidebarIsOpen,
      [styles['SidebarItem--active']]: sidebarIndex.indexOf(index) === 0
    })}>
      <button 
        className={styles['SidebarItem__button']}
        onClick={handleClick}
      >
        { Icon }
        <span className={styles['SidebarItem__text']}>{ text }</span>
        { 
          typeof counter !== "undefined" && (
            <>
              <span className={styles['SidebarItem__dot']}></span>
              <span className={styles['SidebarItem__counter']}>{ counter }</span>
            </>
          )
        }
      </button>
    </li>
  )
}

SidebarItem.defaultProps = {
  handleClick: () => {}
}

SidebarItem.propTypes = {
  Icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  counter: PropTypes.number,
  handleClick: PropTypes.func,
  index: PropTypes.string.isRequired
}

export default SidebarItem;