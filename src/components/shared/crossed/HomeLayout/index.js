import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from 'src/components/footer';
import Header from '../../core/Header';
import Sidebar from '../../core/Sidebar';
import styles from './styles.module.scss';

const HomeLayout = () => {
  return (
    <div className={styles['HomeLayout']}>
      <Sidebar />
      <div className={styles['HomeLayout__content']}>
        <Header />
        <Outlet />
        <Footer/>
      </div>
      
    </div>
  )
}

export default HomeLayout;