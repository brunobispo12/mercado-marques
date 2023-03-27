import React from 'react'
import './style/ContactUs.css'

const ContactUs = () => {

    function handleSubmitForm(e){
        e.preventDefault()
        console.log('submit')
    }


    return (
        <>
            <h2>Fale Conosco</h2>
            <div className="form-conteiner">
                <form className='form' onSubmit={(e) => { handleSubmitForm(e) }}>
                    <input type="text" className='input-name' placeholder='Digite seu nome' />
                    <input type="text" className='input-email' placeholder='Digite seu email' />
                    <textarea name="" id="" className='input-subject' rows="10" placeholder='Assunto'></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default ContactUs