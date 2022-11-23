import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Admin = () => {
    const {isLoggedIn} =useContext(AuthContext)
    if(!isLoggedIn){
        return <Navigate to="/"/>
    }
  return (
    <div>Admin</div>
  )
}

export default Admin