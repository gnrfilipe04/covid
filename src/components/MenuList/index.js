import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Container } from "./styles";

const MenuList = ({ countries, menuTitle, setMenuTitle }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    if (e.nativeEvent.target.outerText === "") {
      setMenuTitle(menuTitle);
      
    } else {
      setMenuTitle(e.nativeEvent.target.outerText)  
    }
    setAnchorEl(null);
  };

  return (
    
    <Container>
      <Button
        aria-controls="menu-contries"
        aria-haspopup="true"
        onClick={handleClick}
        onChange={(e) => setMenuTitle(e.nativeEvent.target.outerText)}
      > 
        {menuTitle}
        <ArrowDropDownIcon /> 
      </Button>
      {
       
        <Menu
          id="menu-contries"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{height: '29rem'}}
        >
          <MenuItem onClick={handleClose}>
            <img src="global.png" style={{width: '20px', height: 'auto', marginRight: '5px'}}/>Global
          </MenuItem>
          {countries.map((country) => (
            <MenuItem onClick={handleClose} key={country.country}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                { country.countryInfo ?
                  <img style={{width: '20px', height: 'auto', marginRight: '5px'}} src={country.countryInfo.flag}/>
                  : ''
                }
                {country.country}
              </div>
            </MenuItem>
          ))}
        </Menu>
      }
    </Container>
  );
};

export default MenuList;
