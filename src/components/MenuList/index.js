import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { Container } from './styles';

const MenuList = ({countryName}) => {

  const [anchorEl, setAnchorEl] = useState(null)
  const [menuButtonValue, setMenuButtonValue] = useState('Global')

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setMenuButtonValue(e.nativeEvent.target.outerText)
    setAnchorEl(null);
  };

  return (
    <Container>
      <Button aria-controls='menu-all' aria-haspopup='true' onClick={handleClick}>
        Total
        <ArrowDropDownIcon />
      </Button>

      <Menu
      id='menu-all'
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      

      
      <Button aria-controls='menu-contries' aria-haspopup='true' onClick={handleClick}>
        {menuButtonValue}
        <ArrowDropDownIcon />
      </Button> 
      
      <Menu
      id='menu-contries'
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      >
        {countryName.map(name => (
          <MenuItem onClick={handleClose} key={name}>{name}</MenuItem>
        ))}

      </Menu>
     
    </Container>
  );
};

export default MenuList;
