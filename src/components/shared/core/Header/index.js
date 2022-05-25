import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppContext from 'src/components/context/app/app.context';
import { useWindowSize } from 'src/components/hooks/useWindowSize';
import ShoppingCartButton from './components/CartButton';
import CloseButton from './components/CloseButton';
import MenuButton from './components/MenuButton';
import MenuList from './components/MenuList';
import styles from './styles.module.scss';

const Header = () => {
  const { width } = useWindowSize();
  const { headerMenuIsOpen, closeHeaderMenu } = useContext(AppContext);

  const cart = useSelector((state)=>state.cart.quantity);

  useEffect(() => {
    if( width >= 992 ) {
      closeHeaderMenu();
    }
  }, [width])

  return (
    <header className={styles['Header']}>
      { 
        headerMenuIsOpen ? (
          <>
            <div className={styles['Header__menu']}>
              <CloseButton />
            </div>
            <MenuList />
          </>
        ) : (
          <>
            <div className={styles['Header__menu']}>
              <MenuButton />
              { width >= 992 && <MenuList /> }
            </div>
            <div className={styles['Header__apps']}>
              <ShoppingCartButton />            
            </div>
            <span className={styles['Header__counter']}>{cart}</span>
          </>
        )
      }
    </header>
  );
}

export default Header;