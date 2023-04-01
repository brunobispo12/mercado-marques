/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useMemo, useRef } from 'react'
import './styles/Dashboard.css'
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject, refFromURL } from 'firebase/storage'
import { db, storage } from '../../services/firebaseConfig';
import { FirebaseContext } from '../../context/firebaseContext'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const { productData, clearCache } = useContext(FirebaseContext)
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productDiscount, setProductDiscount] = useState('')
  const [progress, setProgress] = useState('')
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setUploading(true)
      const { productImage, imageFullPath } = await uploadImage(e)
      const productCollectionRef = collection(db, 'products')

      const product = await addDoc(productCollectionRef, {
        productName,
        productPrice,
        productDiscount,
        productImage,
        imageFullPath,
      })
      clearCache()
      setProductName('')
      setProductPrice('')
      setProductDiscount('')
      fileInputRef.current.value = null
      setUploading(false)
    }
    catch (error) {
      console.log(error)
    }

  }

  function uploadImage(e) {
    return new Promise((resolve, reject) => {
      const file = e.target[3]?.files[0]
      if (!file) { throw new Error('Insira uma imagem') }
      const storageRef = ref(storage, `images/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(progress)
        },
        error => {
          reject(error)
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref)
            const productImage = url
            const imageFullPath = storageRef.fullPath
            resolve({ productImage, imageFullPath })
          } catch (error) {
            reject(error)
          }
        }
      )
    })
  }

  async function deleteProduct(id, imageFullPath) {
    const productDoc = doc(db, 'products', id)
    if (imageFullPath !== undefined || null || '') {
      const storageRef = ref(storage, imageFullPath)
      await deleteObject(storageRef)
    }

    await deleteDoc(productDoc)
    clearCache()
  }

  const promotionsList = useMemo(() => {
    return productData.map((product) => {
      return (
        <tr key={product.id}><td>{product.productName}</td><td>{`R$ ${product.productPrice}`}</td><td>{`R$ ${product.productDiscount}`}</td><td><div><button onClick={() => deleteProduct(product.id, product.imageFullPath)}>Excluir</button></div></td></tr>
      )
    })
  }, [productData])

  return (
    <section className='dashboard'>
      <div className='dashboard-header'><div className="title"><h1>Dashboard</h1></div></div>
      <div className='div-link'><Link to='/' className='link'>Voltar ao ínicio</Link></div>
      <div className='dashboard-body'>
        <div className='add-item-conteiner'>
          <div className="center">
            <h2>Adicionar Item</h2>
          </div>
          <div className="form-conteiner">
            <form onSubmit={(e) => handleSubmit(e)} className='form'>
              <input type="text" placeholder='Digite o nome do produto' value={productName} onChange={(e) => setProductName(e.target.value)} />
              <input type="text" placeholder='Digite o preço original' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
              <input type="text" placeholder='Digite o preço do produto com desconto' value={productDiscount} onChange={(e) => setProductDiscount(e.target.value)} />
              <input type="file" name='file' ref={fileInputRef}/>
              <button type='submit'>Enviar</button>
              {uploading && <progress value={progress} max='100'></progress>}
            </form>
          </div>
        </div>
        <div className='products-delete-area'>
          <div className="center">
            <h2>Excluir Item</h2>
          </div>
          <div className="form-conteiner">
            <table className='table'>
              <thead><tr><th>Nome do produto</th><th>Preço do produto</th><th>Preço com desconto</th><th>Ação</th></tr></thead>
              <tbody>
                {promotionsList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Dashboard