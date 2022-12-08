import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { UserSystem } from './FirebaseContext'

function GetCurrentUserByLoginEmail() {
  const { user } = useContext(UserSystem)
  const load_data = () => {
    return axios.get(
      `https://watch-house.vercel.app/user-get-by-email/v1?email=${user?.email}`,
    )
  }
  const { data, isLoading, refetch } = useQuery(
    ['GetCurrentUserByLoginEmail'],
    load_data,
  )
  const current_db_user = data?.data
  return { current_db_user, isLoading, refetch }
}

export default GetCurrentUserByLoginEmail
