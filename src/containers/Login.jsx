import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import googleIcon from '../assets/img/google-icon.png';
import twitterIcon from '../assets/img/twitter-icon.png';
import '../assets/styles/containers/Login.scss';

const Login = (props) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const handleInput = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(formValues);
    //redirect Home:]
    props.history.push('/');

  };

  return (
    <>
      <Header className='Header' isLogin />
      <section className='Login'>
        <section className='Login__container'>
          <h2>Inicia sesión</h2>
          <form
            className='Login__container--form'
            action=''
            onSubmit={handleSubmit}
          >
            <input
              className='input'
              type='text'
              name='email'
              id='email'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              className='input'
              type='password'
              name='password'
              id='password'
              placeholder='Contraseña'
              onChange={handleInput}
              autoComplete='on'
            />
            <button className='button' type='submit'>Iniciar sesión</button>
            <div className='Login__container--remember-me'>
              <label htmlFor='cbox1'>
                <input type='checkbox' name='cbox1' id='cbox1' value='Checkbox' />
                Recuérdame
              </label>
              <Link to='/forgot-password'>
                Olvidé mi contraseña
              </Link>
            </div>
          </form>
          <section className='Login__container--social-media'>
            <div>
              <img src={googleIcon} alt='Google' />
              inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='Twitter' />
              inicia sesión con Twitter
            </div>
          </section>
          <p className='Login__container--register'>
            No tienes ninguna cuenta?
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
