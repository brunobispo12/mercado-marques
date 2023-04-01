import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyArNhmkLeeO0qHxDTYy1-n2uaTG36UnMoo",
    authDomain: "mercado-92254.firebaseapp.com",
    projectId: "mercado-92254",
    storageBucket: "mercado-92254.appspot.com",
    messagingSenderId: "799711514671",
    appId: "1:799711514671:web:89fde4b2bc8adfce6576da",
    measurementId: "G-8L62ZY71J0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


