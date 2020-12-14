import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () => (
    <section className={"Main"}>
        <div className={"Main__container"}>
            <h2 className={"Main__container__title"}>¿Qué quieres ver hoy?</h2>
            <input className={"Main__container__input"} type="text" name="" id="" placeholder="Buscar"
            />
        </div>
    </section>
)

export default Search