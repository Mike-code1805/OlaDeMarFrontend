import React from 'react';
import IconButton from 'src/components/shared/crossed/IconButton';
import ShoppingCartIcon from 'src/components/shared/icons/ShoppingCartIcon';
import styles from './styles.module.scss';

const IconShoppingCart = () => (<ShoppingCartIcon width={16} height={16} fill="#ffffff"/>)

const ShoppingCartButton = ({ handleClick }) => {
  return (
    <IconButton
      handleClick={handleClick}
      IconCmp={IconShoppingCart}
      className={styles['ShoppingCartButton']}
    />
  )
}

export default ShoppingCartButton;