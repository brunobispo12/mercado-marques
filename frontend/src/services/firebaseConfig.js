import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBoYZ-RE0Qu2xyW6XrkpzDYq0BH8aSuTOs",
    authDomain: "mercado-d9265.firebaseapp.com",
    projectId: "mercado-d9265",
    storageBucket: "mercado-d9265.appspot.com",
    messagingSenderId: "86295516071",
    appId: "1:86295516071:web:d295a25475bec7048a5c82",
    measurementId: "G-N009N253R5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)


