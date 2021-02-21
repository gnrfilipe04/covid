import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Container } from "./styles";

const MenuList = ({ countries, menuTitle, countryName, flag }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuButtonValue, setMenuButtonValue] = useState(menuTitle);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    if (e.nativeEvent.target.outerText === "") {
      setMenuButtonValue(menuButtonValue);
      
    } else {
      setMenuButtonValue(e.nativeEvent.target.outerText)
      console.log(e.nativeEvent.target.outerText)
    }

    setAnchorEl(null);
  };


  return (
    <Container>
      <Button
        aria-controls="menu-contries"
        aria-haspopup="true"
        onClick={handleClick}
      > 
        {menuButtonValue}
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
