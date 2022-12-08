import React, { useContext } from 'react'
import { UserSystem } from '../context/FirebaseContext'
import { FadeLoader } from 'react-spinners'
import { Navigate, useLocation } from 'react-router-dom'

function AdminPrivetRoute({ children }) {
  const { user, loading, db_user: db_main } = useContext(UserSystem)

  const current_db_user_role = db_main?.userRole
  const location = useLocation()
  if (loading) {
    return (
      <div className="flex justify-center top-1/2 left-1/2">
        <FadeLoader color="#36d7b7" />
      </div>
    )
  }

  if (user && user.uid && current_db_user_role === 'admin') {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />
}

export default AdminPrivetRoute
