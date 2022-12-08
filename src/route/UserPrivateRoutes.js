import React, { useContext } from 'react'
import { UserSystem } from '../context/FirebaseContext'
import { FadeLoader } from 'react-spinners'
import { Navigate, useLocation } from 'react-router-dom'

function UserPrivateRoutes({ children }) {
  const { user, loading } = useContext(UserSystem)
  const location = useLocation()
  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <FadeLoader color="#36d7b7" />
      </div>
    )
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />
}

export default UserPrivateRoutes
