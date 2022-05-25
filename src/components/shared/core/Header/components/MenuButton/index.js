import React, { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import IconButton from 'src/components/shared/crossed/IconButton';
import MenuIcon from 'src/components/shared/icons/MenuIcon';
import { classNames } from 'src/components/utils/classNames';
import styles from './styles.module.scss';

const IconMenu = () => (<MenuIcon width={16} height={16} fill="#ffffff"/>)

const MenuButton = ({ className }) => {
  const { openHeaderMenu } = useContext(AppContext);

  return (
    <IconButton
      IconCmp={IconMenu}
      handleClick={openHeaderMenu}
      className={classNames({
        [styles['MenuButton']]: true,
        [className]: !!className
      })}
    />
  )
}

export default MenuButton;