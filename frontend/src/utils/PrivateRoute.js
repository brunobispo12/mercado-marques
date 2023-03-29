import { Outlet, Navigate } from 'react-router-dom'
import { auth } from '../services/firebaseConfig';

import React from 'react'

const PrivateRoute = () => {

    return (
        auth.currentUser ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoute