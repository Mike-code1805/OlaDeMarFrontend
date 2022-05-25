import React from 'react'
import ListItemButton from 'src/components/shared/crossed/ListItemButton';
import LocationIcon from 'src/components/shared/icons/LocationIcon';

const MenuItemAddress = () => {
  return (
    <ListItemButton 
      title='Location'
      text='San Francisco, California'
      IconCmp={LocationIcon}
    />
  )
}

export default MenuItemAddress;