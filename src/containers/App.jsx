import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../containers/Login'
import Register from '../containers/Register'
import '../assets/styles/App.scss'

const App = () => (
    <>
        <Header />
        {/* <Register /> */}
        <Home />
        {/* <Podcast /> */}
        {/* <Login /> */}
        <Footer />
    </>
)

export default App