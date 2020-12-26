import React from 'react';
import '../assets/styles/containers/Login.scss';

const Login = () => (
  <section className='Login'>
    <section className='Login__container'>
      <h2>Inicia sesión</h2>
      <form className='Login__container--form' action=''>
        <input
          className='input'
          type='text'
          name=''
          id=''
          placeholder='Correo'
        />
        <input
          className='input'
          type='password'
          name=''
          id=''
          placeholder='Contraseña'
        />
        <button className='button'>Iniciar sesión</button>
        <div className='Login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' name='cbox1' id='cbox1' value='Checkbox' />
            Recuérdame
          </label>
          <a href=''>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='Login__container--social-media'>
        <div>
          <img src='public/img/google-icon.png' alt='Google' />
          inicia sesión con Google
        </div>
        <div>
          <img src='public/img/twitter-icon.png' alt='Twitter' /> 
          inicia sesión con Twitter
        </div>
      </section>
      <p className='Login__container--register'>
        No tienes ninguna cuenta? <a href=''>Regístrate.</a>
      </p>
    </section>
  </section>
);
export default Login;
