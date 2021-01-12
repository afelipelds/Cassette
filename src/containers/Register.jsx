import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/containers/Register.scss';

const Register = (props) => {
  const [formValues, setFormValues] = useState({
    name: '',
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
    props.registerRequest(formValues);
    props.history.push('/');
  };

  return (
    <section className='Register'>
      <section className='Register__container'>
        <h2>Regístrate</h2>
        <form className='Register__container--form' action='' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            name='name'
            id='name'
            placeholder='Nombre'
            onChange={handleInput}
          />
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
            placeholder='Establezca una contraseña'
            onChange={handleInput}
            autoComplete='off'
          />
          <button className='button' type='submit'>Registrar</button>
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
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
