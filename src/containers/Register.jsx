import React from 'react'
import '../assets/styles/containers/Register.scss'

const Register = () => (
    <section className="Register">
      <section className="Register__container">
        <h2>Regístrate</h2>
        <form className="Register__container--form" action="">
          <input className="input" type="text" name="" id="" placeholder="Nombre" />
          <input className="input" type="text" name="" id="" placeholder="Correo" />
          <input className="input" type="password" name="" id="" placeholder="Establezca una contraseña" />
          <button className="button">Registrar</button>
        </form>
        <section className="Register__container--social-media">
          <div><img src="public/img/google-icon.png"   alt="Google" /> inicia sesión con Google</div>
          <div><img src="public/img/twitter-icon.png" alt="Twitter" /> inicia sesión con Twitter</div>
        </section>
      </section>
    </section>
)
export default Register