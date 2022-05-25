import React from 'react'
import { classNames } from 'src/components/utils/classNames';
import styles from './styles.module.scss';

const MenuList = () => {
  return (
    <div className={classNames({
      [styles['MenuList']]: true
    })}>
      <div className={styles['MenuList__content']}>
        
      </div>
    </div>
  )
}

export default MenuList;