import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import logo from '../assets/img/logo_.png';
import userLogo from '../assets/img/icon_user.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  console.log(hasUser);
  return (
    <header className='Header'>
      <div className='Header__logo'>
        <Link to='/'>
          <img src={logo} alt='CASSETTe' />
        </Link>
      </div>
      <div className='Header__profile'>
        <div className='Header__profile--image'>
          {console.log(hasUser)}
          {
            hasUser ? (
              <img src={gravatar(user.email)} alt={user.email} />
            ) : (
              <img src={userLogo} alt='' />
            )
          }
          <p>Perfil</p>
        </div>
        <ul className='Header__profile--menu'>
          <li><Link to='/account'>Cuenta</Link></li>
          <li><Link to='/login'>Iniciar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
