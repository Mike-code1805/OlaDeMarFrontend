import { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import { classNames } from 'src/components/utils/classNames';
import DocumentIcon from '../../icons/DocumentIcon';
import FeedIcon from '../../icons/FeedIcon';
import HomeIcon from '../../icons/HomeIcon';
import SettingsIcon from '../../icons/SettingsIcon';
import CloseSidebarButton from './components/CloseSidebarButton';
import FoodHubLogo from './components/FoodHubLogo';
import SidebarItem from './components/SidebarItem';
import AuthButton from './components/AuthButton';
import styles from './styles.module.scss';
import { useRouter } from 'src/components/hooks/useRouter';
import ShoppingCartIcon from '../../icons/ShoppingCartIcon';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { sidebarIsOpen } = useContext(AppContext);
  const {gotoNew, gotoHome, gotoExplore, gotoCheckOut} = useRouter();
  const quantity = useSelector((state)=>state.cart.quantity);

  const state = useSelector(state=>state.cart);
  console.log(state)

  return (
    <div className={classNames({
      [styles['Sidebar']]: true,
      [styles['Sidebar--open']]: sidebarIsOpen
    })}>
      { sidebarIsOpen && <CloseSidebarButton /> }
      <div className={styles['Sidebar__content']}>
        <FoodHubLogo />
        <ul className={styles['Sidebar__list']}>
          <SidebarItem
            text="Inicio"
            Icon={<HomeIcon />}
            index="home"
            handleClick={gotoHome}
          />
          <SidebarItem
            text="Explorar"
            Icon={<FeedIcon />}
            index="explore"
            handleClick={gotoExplore}
          />
          <SidebarItem
            text="Noticias"
            Icon={<DocumentIcon />}
            index="news"
            handleClick={gotoNew}
          />
          <SidebarItem
            counter={quantity}
            text="Comprar"
            Icon={<ShoppingCartIcon />}
            index="messages"
            handleClick={gotoCheckOut}
          />
          <SidebarItem
            text="Configuración"
            Icon={<SettingsIcon />}
            index="settings"
          />
        </ul>
        <AuthButton />
      </div>
    </div>
  )
}

export default Sidebar;