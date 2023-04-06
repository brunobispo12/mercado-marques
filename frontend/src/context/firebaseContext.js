import { createContext, useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../services/firebaseConfig';

export const FirebaseContext = createContext()

const FirebaseProvider = ({ children }) => {
    const [productData, setProductData] = useState([])
    const [attProductData, setAttProductData] = useState(false)

    const getProducts = async () => {
        const productCollectionRef = collection(db, 'products')
        const response = await getDocs(productCollectionRef)
        const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setProductData(data)
        localStorage.setItem('productData', JSON.stringify(data))
    }

    useEffect(() => {

        const cachedData = localStorage.getItem('productData')
        if (cachedData) {
            setProductData(JSON.parse(cachedData))
        } else {
            getProducts()
        }

    }, [attProductData])

    const clearCache = () => {
        setAttProductData((prevState) => !prevState)
        localStorage.removeItem('productData')
    }

    return (
        <FirebaseContext.Provider value={{ productData, setProductData, clearCache }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider
