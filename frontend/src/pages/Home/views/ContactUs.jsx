import React, { useState } from 'react'
import './styles/ContactUs.css'
import emailjs from '@emailjs/browser'

const ContactUs = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    function handleSendEmail(e) {

        e.preventDefault()
        
        if ( name === '' || email === '' || message === '') return setError('* Por favor preencha todos os campos')

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }

        emailjs.send('service_dm8ex2g', 'template_w37pgpj', templateParams, 'iRNx3vqMtUFVJ-G2O')
            .then((response) => {
                setEmail('')
                setMessage('')
                setName('')
                setError('')
            }, (error) => {
                setError('ERRO: entre em contato com o suporte')
            })
    }


    return (
        <>
            <h2>Fale Conosco</h2>
            <div className="form-conteiner">
                <form className='form' onSubmit={(e) => { handleSendEmail(e) }}>
                    {error !== '' && <div className="error-text">{error}</div>}
                    <input type="text" className='input-name' placeholder='Digite seu nome' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" className='input-email' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="" id="" className='input-subject' rows="10" placeholder='Assunto' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default ContactUs