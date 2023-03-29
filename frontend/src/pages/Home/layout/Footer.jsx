/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='contacts'>
        <h3>Contatos</h3>
        <p>Telefone: (xx) xxxxx-xxxx</p>
        <p>Email: xxxxx@gmail.com</p>
        <p>Endereço: xxxxxxxxxxxx</p>
      </div>
      <div className='restrict-area'>
        <h3>Área restrita</h3>
        <Link to='/login' className='login-link'>Login</Link>
      </div>
      <div className='nav'>
        <h3>Navegação</h3>
        <ul>
          <li><a href="/">Ínicio</a></li>
          <li><a href="#promotions">Promoções</a></li>
          <li><a href="#contactUs">Fale Conosco</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer