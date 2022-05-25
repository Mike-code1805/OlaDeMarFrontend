import React, { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import CloseIcon from 'src/components/shared/icons/CloseIcon';
import styles from './styles.module.scss';

const CloseSidebarButton = () => {
  const { closeSidebar } = useContext(AppContext);

  return (
    <button 
      onClick={closeSidebar}
      className={styles['CloseSidebarButton']}
    >
      <CloseIcon width={20} height={20} fill="#503E9D"/>
    </button>
  )
}

export default CloseSidebarButton;