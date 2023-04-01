/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useMemo } from 'react'
import './styles/Promotions.css'
import Promotion from '../components/Promotion'
import { FirebaseContext } from '../../../context/firebaseContext'

const Promotions = () => {

    const { productData } = useContext(FirebaseContext)

    const promotionsList = useMemo(() => {
        return productData.map((product) => {
            return (<Promotion productName={product.productName} productPrice={product.productPrice} productDiscount={product.productDiscount} key={product.id} productImage={product.productImage}></Promotion>)
        })
    }, [productData])

    return (
        <div>
            <h2>Promoções</h2>
            <div className='promotions-conteiner'>
                {promotionsList}
            </div>
        </div>
    )
}

export default Promotions