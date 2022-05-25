import React, { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import AuthContext from 'src/components/context/auth/auth.context';
import { useRouter } from 'src/components/hooks/useRouter';
import OptionsIcon from 'src/components/shared/icons/OptionsIcon';
import ProfileIcon from 'src/components/shared/icons/ProfileIcon';
import { classNames } from 'src/components/utils/classNames';
import styles from './styles.module.scss';

const AuthButton = () => {
  const { user } = useContext(AuthContext);
  const { sidebarIsOpen } = useContext(AppContext);
  const { gotoLogin } = useRouter();

  return (
    <div className={classNames({
      [styles['AuthButton']]: true,
      [styles['AuthButton--open']]: sidebarIsOpen
    })}> 
      <button 
        onClick={gotoLogin}
        className={styles['AuthButton__button']}
      >
        <span className={styles['AuthButton__icon']}>
          <ProfileIcon width={16} height={16} fill="#FFFFFF"/>
        </span>
        <span className={styles['AuthButton__text']}> iniciar sesión </span>
        <span className={styles['AuthButton__arrow']}>
          <OptionsIcon width={16} height={16} fill="#000000"/>
        </span>
      </button>
    </div>
  )
}

export default AuthButton;