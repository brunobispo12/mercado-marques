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
                <button className='mobile-menu' onClick={() => attStateMenu()}><div className='hamburger'></div></button>
                <nav>
                    <ul className='menu' style={{ display: `${openMobileMenu !== false ? 'block' : 'none'}` }}>
                        <li><a href="/" onClick={() => attStateMenu()}>Ínicio</a></li>
                        <li><a href="#promotions" onClick={() => attStateMenu()}>Promoções</a></li>
                        <li><a href="#contactUs" onClick={() => attStateMenu()}>Fale Conosco</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header