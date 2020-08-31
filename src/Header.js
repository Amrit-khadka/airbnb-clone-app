import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png" 
             className="header__icon"
             alt="header" />
        <div className="header__center">
          <input type="text" />
          <SearchIcon />
        </div>
        <div className="header__right">
          <p>Become a hose</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />

        </div>
    </div>
  )
}

export default Header
