import React from 'react'
import '../assets/styles/components/NotFound.scss'

const NotFound = () => (
    <section className="Error">
      <div className="Error__container">
        <h1 className="u-fontSize90 glitch" data-text="404">404</h1>
        <h2 className="u-fontSize30 glitch" data-text=" ERROR "></h2>
      </div>
      <div>
        <p className="return"><a href="index.html">Regresar al inicio</a></p>
      </div>
    </section>
)

export default NotFound