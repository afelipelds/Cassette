import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import logo from '../assets/img/logo_.png';
import { logoutRequest } from '../actions';
import userLogo from '../assets/img/icon_user.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='Header'>
      <div className='Header__logo'>
        <Link to='/'>
          <img src={logo} alt='CASSETTe' />
        </Link>
      </div>
      <div className='Header__profile'>
        <div className='Header__profile--image'>
          <img src={hasUser ? gravatar(user.email) : userLogo} alt={user.email} />
          <p>Perfil</p>
        </div>
        <ul className='Header__profile--menu'>
          { hasUser ? (
            <>
              <li><Link to='/account'>{user.name}</Link></li>
              <li><a href='#logout' onClick={handleLogout}>Cerrar sesión</a></li>
            </>
          ) : (
            <>
              <li><Link to='/login'>Iniciar sesión</Link></li>
            </>
          )}
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

const mapDispatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
