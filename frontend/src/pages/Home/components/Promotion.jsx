import React from 'react'
import './styles/Promotion.css'

const Promotion = (props) => {
    return (
        <div className='promotion'>
            <h3>{props.productName}</h3>
            <div className='promotion-img'><img src={props.productImage} alt=""/></div>
            <div className="price">
                <p>{`De: R$ ${props.productPrice}`}</p>{'ㅤ'}{'/'}{'ㅤ'}<p>{`Por: R$ ${props.productDiscount}`}</p>
            </div>
        </div>
    )
}

export default Promotion