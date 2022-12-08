import React, { useContext } from 'react'
import { UserSystem } from '../context/FirebaseContext'
import { FadeLoader } from 'react-spinners'
import { Navigate } from 'react-router-dom'

function LoginRegPrivetForUser({ children }) {
  const { user, loading } = useContext(UserSystem)

  if (loading) {
    return (
      <div className="flex justify-center top-1/2 left-1/2">
        <FadeLoader color="#36d7b7" />
      </div>
    )
  }

  if (!user && !user?.uid) {
    return children
  }
  return <Navigate to="/" />
}

export default LoginRegPrivetForUser
