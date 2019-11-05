import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/img/cassette.png'
import userLogo from '../assets/img/icon_user.png' 

const Header = () => (
  <header className="Header">
    <div className="Header__logo">
      <img src={logo} alt="CASSETTe" />
    </div>
    <div className="Header__profile">
      <div className="Header__profile--image">
        <img src={userLogo} alt="" />
        <p>Perfil</p>
      </div>
      <ul className="Header__profile--menu">
        <li><a href="#">Cuenta</a></li>
        <li><a href="#">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
)

export default Header