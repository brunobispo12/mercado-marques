import React from 'react'
import './styles/Promotion.css'

const Promotion = (props) => {
    return (
        <div className='promotion'>
            <h3>teste</h3>
            <div className='promotion-img'></div>
            <div className="price">
                <p>{`R$: 20`}</p>/<p>{`R$: 15`}</p>
            </div>
        </div>
    )
}

export default Promotion