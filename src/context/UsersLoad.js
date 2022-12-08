import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
function UsersLoad(email) {
  const user_data_by_emails = () => {
    return axios.get(`https://watch-house.vercel.app/users-profile/${email}`)
  }
  const { data, isLoading, refetch } = useQuery(
    ['user_data_by_email', email],
    user_data_by_emails,
  )
  const users_data = data?.data[0]
  return { users_data, isLoading, refetch }
}

export default UsersLoad
