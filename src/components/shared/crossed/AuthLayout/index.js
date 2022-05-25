import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles['auth-layout']}>
      <div className={styles['auth-layout__image']}/>
      <div className={styles['auth-layout__content']}>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout;