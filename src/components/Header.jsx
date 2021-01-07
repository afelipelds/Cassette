import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/img/logo_.png';
import userLogo from '../assets/img/icon_user.png';

const Header = () => (
  <header className='Header'>
    <div className='Header__logo'>
      <Link to='/'>
        <img src={logo} alt='CASSETTe' />
      </Link>
    </div>
    <div className='Header__profile'>
      <div className='Header__profile--image'>
        <img src={userLogo} alt='' />
        <p>Perfil</p>
      </div>
      <ul className='Header__profile--menu'>
        <li><Link to='/account'>Cuenta</Link></li>
        <li><Link to='/login'>Iniciar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
