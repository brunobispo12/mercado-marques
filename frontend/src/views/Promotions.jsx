import React from 'react'
import './style/Promotions.css'
import Promotion from '../components/Promotion'

const Promotions = () => {
    return (
        <div>
            <h2>Promoções</h2>
                <div className='promotions-conteiner'>
                    <Promotion/>
                    <Promotion/>
                    <Promotion/>
                    <Promotion/>
                    <Promotion/>
                </div>
        </div>
    )
}

export default Promotions