import React, { Component } from 'react';

import logo from '../assets/logo.svg';
import circle from '../assets/circle.svg';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <img className="logo" src={logo} alt="logo"/>
        <div id="profile" >
          <a href="#">Meu perfil</a>
          <img className="circle" src={circle} alt="circle"/>
        </div>
      </div>
    )
  }
}

export default Header;