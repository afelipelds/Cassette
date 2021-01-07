import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Register.scss';

const Register = () => (
  <section className='Register'>
    <section className='Register__container'>
      <h2>Regístrate</h2>
      <form className='Register__container--form' action=''>
        <input className='input' type='text' name='' id='' placeholder='Nombre' />
        <input className='input' type='text' name='' id='' placeholder='Correo' />
        <input className='input' type='password' name='' id='' placeholder='Establezca una contraseña' />
        <button className='button'>Registrar</button>
      </form>
      <section className='Register__container--social-media'>
        <p className='Login__container--register'>
          Ya tienes una cuenta?
          <Link to='/login'>
            Inicia sesión
          </Link>
        </p>
      </section>
    </section>
  </section>
);
export default Register;
