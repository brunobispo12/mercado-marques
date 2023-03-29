import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig';

const Dashboard = () => {

  return (
    <div><button onClick={() => signOut(auth)}>Logout</button></div>
  )
  
}

export default Dashboard