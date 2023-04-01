import React, { useState, useEffect } from 'react';
import './styles/Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { useNavigate, Link } from 'react-router-dom';
import leftArrow from '../../assets/images/seta-esquerda.png'
import eyePass from '../../assets/images/view.png'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)
  const navigate = useNavigate()
  const [passwordVision, setPasswordVision] = useState('password')

  async function submitLoginForm(e) {
    e.preventDefault()
    await signInWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  function changePasswordVision() {
    setPasswordVision((prevState) => {
      if (prevState === 'password') {
        return 'text'
      } else {
        return 'password'
      }
    })
  }

  return (
    <div className='login-screen'>
      <div className='login-conteiner'>
        <div className='inline'>
          <h1>Login</h1>
          <Link to='/' className='login-link'><div className='back-button'><img src={leftArrow} alt="" /></div></Link></div>
        <form onSubmit={(e) => submitLoginForm(e)} className='login-form'>
          <label htmlFor="user">Usuário: </label>
          <input type="text" placeholder='Digite seu usuário' id='user' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Senha: </label>
          <input type={passwordVision} placeholder='Digite sua senha' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className='alt-vision'><img src={eyePass} alt="" onClick={() => changePasswordVision()} /></div>
          <div className='center-button'><button type='submit'>Login</button></div>
          {error && (<div className='login-error'>Usuário ou senha incorretos</div>)}
        </form>
      </div>
      {loading && <div className='loading'><span className='spining-loading'></span></div>}
    </div>
  )
}

export default Login