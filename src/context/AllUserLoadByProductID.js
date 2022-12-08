import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function AllUserLoadByProductID(id) {
  const AllUserLoadByProductIds = () => {
    return axios.get(`https://watch-house.vercel.app/users-get?userid=${id}`)
  }
  const { data, isLoading, refetch } = useQuery(
    ['AllUserLoadByProductID', id],
    AllUserLoadByProductIds,
  )
  const all_users = data?.data
  return { all_users, isLoading, refetch }
}

export default AllUserLoadByProductID
