import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Container } from "./styles";

const MenuList = ({ menuTitle, countryName }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuButtonValue, setMenuButtonValue] = useState(menuTitle);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    if (e.nativeEvent.target.outerText === "") {
      setMenuButtonValue(menuButtonValue);
    } else {
      setMenuButtonValue(e.nativeEvent.target.outerText);
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
        >
          {countryName.map((name) => (
            <MenuItem onClick={handleClose} key={name}>
              {name}
            </MenuItem>
          ))}
        </Menu>
      }
    </Container>
  );
};

export default MenuList;
