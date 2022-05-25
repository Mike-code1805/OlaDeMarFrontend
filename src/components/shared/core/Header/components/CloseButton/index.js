import React, { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import IconButton from 'src/components/shared/crossed/IconButton';
import CloseIcon from 'src/components/shared/icons/CloseIcon';
import styles from './styles.module.scss';

const IconClose = () => (<CloseIcon width={16} height={16} fill="#ffffff"/>)

const CloseButton = () => {
  const { closeHeaderMenu } = useContext(AppContext);

  return (
    <IconButton
      IconCmp={IconClose}
      handleClick={closeHeaderMenu}
      className={styles['CloseButton']}
    />
  )
}

export default CloseButton;