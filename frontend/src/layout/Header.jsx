import React, { useState } from 'react'
import './styles/Header.css'

const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    function attStateMenu() {
        setOpenMobileMenu((prevState) => !prevState)

    }

    return (
        <header>
            <h1>Logo</h1>
            <div className="desktop-menu">
                <nav className='nav-desktop'>
                    <ul>
                        <li><a href="/">Ínicio</a></li>
                        <li><a href="#promotions">Promoções</a></li>
                        <li><a href="#contactUs">Fale Conosco</a></li>
                    </ul>
                </nav>
            </div>
            <div className="mobile">
                <button className='mobile-menu' onClick={() => attStateMenu()}>
                    <svg viewBox="0 0 95 40" width="35" height="35">
                        <rect width="75" height="5" className='teste'></rect>
                        <rect y="20" width="75" height="5"></rect>
                        <rect y="40" width="75" height="5"></rect>
                    </svg>
                </button>
                <nav>
                    <ul className='menu' style={{ display: `${openMobileMenu !== false ? 'block' : 'none'}` }}>
                        <li><a href="/" onClick={() => attStateMenu()}>Ínicio</a></li>
                        <div className='center'><span className='bar'></span></div>
                        <li><a href="#promotions" onClick={() => attStateMenu()}>Promoções</a></li>
                        <div className='center'><span className='bar'></span></div>
                        <li><a href="#contactUs" onClick={() => attStateMenu()}>Fale Conosco</a></li>
                        <div className='center'><span className='bar'></span></div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header